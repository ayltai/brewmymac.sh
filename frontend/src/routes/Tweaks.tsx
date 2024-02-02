import { Settings, } from '@mui/icons-material';
import { Box, Container, Stack, Typography, } from '@mui/material';
import MiniSearch from 'minisearch';
import React, { useCallback, useContext, useEffect, useRef, useState, useTransition, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useGetSpellsQuery, } from '../apis';
import { MIN_SEARCH_LENGTH, SEARCH_FUZZINESS, SPELLBOOK_COMMANDS, TWEAKS_REFRESH_INTERVAL, TWEAK_CATEGORIES, } from '../constants';
import { GridView, Loading, SearchInput, SectionedGridView, SelectableCardView, Terminal, TweakDetailsView, } from '../components';
import { FirebaseContext, } from '../contexts';
import { useAppDispatch, useAppSelector, } from '../hooks';
import type { Tweak, } from '../models';
import { addTweak, removeTweak, updateTweak, } from '../states';
import { handleError, logAddToCart, logPageView, logRemoveFromCart, logSearch, } from '../utils';

export const Tweaks = () => {
    const [ query,         setQuery,         ] = useState('');
    const [ matchedTweaks, setMatchedTweaks, ] = useState<Tweak[] | undefined>();

    const { tweaks, } : { tweaks : Tweak[], } = useAppSelector(state => state.spellbook);

    const { data, error, } = useGetSpellsQuery(undefined, {
        pollingInterval : TWEAKS_REFRESH_INTERVAL,
    });

    const searchEngine = useRef<MiniSearch<Omit<Tweak, 'imageUrl' | 'infoUrl'>>>(new MiniSearch({
        fields        : [
            'id',
            'name',
            'description',
        ],
        storeFields   : [
            'id',
            'name',
            'description',
            'imageUrl',
            'infoUrl',
            'author',
            'parameters',
            'types',
            'values',
            'impact',
            'privileged',
            'sipInvolved',
        ],
        searchOptions : {
            fuzzy : SEARCH_FUZZINESS,
        },
    }));

    const dispatch = useAppDispatch();

    const app = useContext(FirebaseContext);

    const [ isPending, startTransition, ] = useTransition();

    const { t, } = useTranslation();

    const search = useCallback((keyword : string) => {
        if (app) logSearch(app, {
            query : keyword,
        });

        return searchEngine.current.search(keyword).map(result => ({
            id          : result.id,
            name        : result.name,
            description : result.description,
            imageUrl    : result.imageUrl,
            infoUrl     : result.infoUrl,
            author      : result.author,
            parameters  : result.parameters,
            types       : result.types,
            values      : result.values,
            impact      : result.impact,
            privileged  : result.privileged,
            sipInvolved : result.sipInvolved,
        }));
    }, [ app, ]);

    const handleSearch = (keyword? : string) => setQuery(keyword ?? '');

    const TweakView = ({
        tweak,
    } : {
        tweak : Tweak,
    }) => {
        const isSelected = tweaks.some(selected => selected.id === tweak.id);

        const handleSelectionChange = (selected : boolean) => {
            if (app) {
                if (selected) {
                    logAddToCart(app, {
                        itemId : tweak.id,
                    });
                } else {
                    logRemoveFromCart(app, {
                        itemId : tweak.id,
                    });
                }
            }

            dispatch(selected ? addTweak(tweak) : removeTweak(tweak));
        };

        const handleValueChange = (parameter : string, value? : boolean | number | string) => {
            if (value) {
                const updatedTweak = {
                    ...tweak,
                };

                updatedTweak.values[tweak.parameters.indexOf(parameter)] = value;

                dispatch(updateTweak(updatedTweak));
            }
        };

        return (
            <SelectableCardView
                key={tweak.id}
                selected={isSelected}
                color='secondary'
                title={tweak.name}
                subtitle={tweak.author}
                description={tweak.description}
                actionText={isSelected ? t('action.configure') : undefined}
                actionIcon={isSelected ? <Settings /> : undefined}
                onChange={handleSelectionChange}>
                <TweakDetailsView
                    description={tweak.description}
                    infoUrl={tweak.infoUrl}
                    parameters={tweak.parameters}
                    types={tweak.types}
                    values={tweak.values}
                    onChange={handleValueChange} />
            </SelectableCardView>
        );
    };

    useEffect(() => {
        searchEngine.current.removeAll();

        if (data) searchEngine.current.addAll(data);

        if (query.length < MIN_SEARCH_LENGTH) {
            setMatchedTweaks(undefined);
        } else {
            startTransition(() => setMatchedTweaks(search(query)));
        }
    }, [ data, query, search, ]);

    useEffect(() => {
        if (error) handleError(error);
    }, [ error, ]);

    useEffect(() => {
        if (app) logPageView(app, {
            pageName : 'Tweaks',
            route    : '/tweaks',
        });
    }, [ app, ]);

    return (
        <>
            <Stack
                paddingBottom={16}
                spacing={2}
                alignItems='center'>
                <Box
                    sx={{
                        animation            : 'gradient 16s ease infinite',
                        background           : 'linear-gradient(315deg, #e5aac3 3%, #e8f5c8 38%, #07a3b2 68%, #6cc6cb 98%)',
                        backgroundSize       : '400%',
                        backgroundAttachment : 'fixed',
                        overflow             : 'hidden',
                    }}
                    width='100%'
                    padding={8}
                    position='relative'
                    textAlign='center'>
                    <div className='wave' />
                    <div className='wave' />
                    <div className='wave' />
                    <Container maxWidth='lg'>
                        <Typography
                            paddingX={8}
                            paddingBottom={8}
                            textAlign='center'
                            variant='h2'>
                            {t('tweaks.tagline')}
                        </Typography>
                        <SearchInput
                            loading={isPending}
                            hint={t('tweaks.search.hint')}
                            onSearch={handleSearch} />
                    </Container>
                </Box>
                {!matchedTweaks && (
                    <Container maxWidth='lg'>
                        <Stack
                            paddingTop={8}
                            display='flex'
                            direction='row'>
                            <Box flexGrow={1}>
                                <Typography
                                    gutterBottom
                                    paddingTop={2}
                                    color='secondary'
                                    variant='h4'>
                                    {t('tweaks.about.title')}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {t('tweaks.about.description')}
                                </Typography>
                            </Box>
                            <Box marginRight={-4}>
                                <Terminal commands={SPELLBOOK_COMMANDS} />
                            </Box>
                        </Stack>
                    </Container>
                )}
                <Container maxWidth='lg'>
                    {!matchedTweaks && data && TWEAK_CATEGORIES.map(category => (
                        <SectionedGridView
                            sx={{
                                paddingY : 4,
                            }}
                            key={category}
                            paddingTop={4}
                            color='secondary'
                            title={category}>
                            {data.filter(tweak => tweak.category === category).map(tweak => (
                                <TweakView
                                    key={tweak.id}
                                    tweak={tweak} />
                            ))}
                        </SectionedGridView>
                    ))}
                    {matchedTweaks && (
                        <GridView sx={{
                            paddingTop : 4,
                        }}>
                            {(matchedTweaks ?? data ?? []).map(tweak => (
                                <TweakView
                                    key={tweak.id}
                                    tweak={tweak} />
                            ))}
                        </GridView>
                    )}
                </Container>
            </Stack>
            <Loading show={!data || !!error}>
                <Typography color={theme => theme.palette.getContrastText(theme.palette.text.primary)}>
                    {t('tweaks.loading')}
                </Typography>
            </Loading>
        </>
    );
};
