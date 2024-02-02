import { Box, Container, Stack, Typography, } from '@mui/material';
import MiniSearch from 'minisearch';
import React, { useCallback, useContext, useEffect, useRef, useState, useTransition, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useCaskQuery, useFormulaQuery, useSearchQuery, } from '../apis';
import { DetailsView, GridView, Loading, SearchInput, SectionedGridView, SelectableCardView, Terminal, } from '../components';
import { FirebaseContext, } from '../contexts';
import { ESSENTIAL_APPS, DEVELOPMENT_APPS, HOMEBREW_REFRESH_INTERVAL, MIN_SEARCH_LENGTH, SEARCH_FUZZINESS, UTILITY_APPS, RECIPE_COMMANDS, } from '../constants';
import { useAppDispatch, useAppSelector, } from '../hooks';
import type { Ingredient, } from '../models';
import { addIngredient, removeIngredient, } from '../states';
import { handleError, logAddToCart, logPageView, logRemoveFromCart, logSearch, } from '../utils';

const PLACEHOLDER : Record<string, string[]> = {
    'packages.apps.essentials'  : ESSENTIAL_APPS,
    'packages.apps.development' : DEVELOPMENT_APPS,
    'packages.apps.utilities'   : UTILITY_APPS,
};

export const Packages = () => {
    const [ query,              setQuery,              ] = useState('');
    const [ matchedIngredients, setMatchedIngredients, ] = useState<Ingredient[] | undefined>();

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const { data : caskData, error : caskError, } = useCaskQuery(undefined, {
        pollingInterval : HOMEBREW_REFRESH_INTERVAL,
    });

    const { data : formulaData, error : formulaError, } = useFormulaQuery(undefined, {
        pollingInterval : HOMEBREW_REFRESH_INTERVAL,
    });

    const { data : searchData, error : searchError, } = useSearchQuery(query, {
        skip : query.length < MIN_SEARCH_LENGTH,
    });

    const searchEngine = useRef<MiniSearch<Omit<Ingredient, 'imageUrl' | 'infoUrl' | 'source'>>>(new MiniSearch({
        fields        : [
            'id',
            'name',
            'description',
            'author',
        ],
        storeFields   : [
            'id',
            'name',
            'description',
            'imageUrl',
            'infoUrl',
            'author',
            'source',
        ],
        searchOptions : {
            fuzzy : SEARCH_FUZZINESS,
        },
    }));

    const dispatch = useAppDispatch();

    const app = useContext(FirebaseContext);

    const [ isPending, startTransition, ] = useTransition();

    const { t, } = useTranslation();

    const formulaCaskData : Ingredient[] = [
        ...(formulaData ?? []),
        ...(caskData ?? []),
    ];

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
            source      : result.source,
        }));
    }, [ app, ]);

    const handleSearch = (keyword? : string) => setQuery(keyword ?? '');

    const IngredientView = ({
        ingredient,
    } : {
        ingredient : Ingredient,
    }) => {
        const handleChange = (selected : boolean) => {
            if (app) {
                if (selected) {
                    logAddToCart(app, {
                        itemId : ingredient.id,
                    });
                } else {
                    logRemoveFromCart(app, {
                        itemId : ingredient.id,
                    });
                }
            }

            dispatch(selected ? addIngredient(ingredient) : removeIngredient(ingredient));
        };

        return (
            <SelectableCardView
                key={ingredient.id}
                selected={ingredients.some(selected => selected.id === ingredient.id)}
                color='primary'
                title={ingredient.name}
                subtitle={ingredient.author}
                description={ingredient.description}
                onChange={handleChange}>
                <DetailsView
                    description={ingredient.description}
                    infoUrl={ingredient.infoUrl} />
            </SelectableCardView>
        );
    };

    useEffect(() => {
        searchEngine.current.removeAll();

        if (caskData) searchEngine.current.addAll(caskData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        if (formulaData) searchEngine.current.addAll(formulaData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        if (searchData) searchEngine.current.addAll(searchData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        if (query.length < MIN_SEARCH_LENGTH) {
            setMatchedIngredients(undefined);
        } else {
            startTransition(() => setMatchedIngredients(search(query)));
        }
    }, [ caskData, formulaData, search, searchData, query, ]);

    useEffect(() => {
        if (caskError) handleError(caskError);
        if (formulaError) handleError(formulaError);
        if (searchError) handleError(searchError);
    }, [ caskError, formulaError, searchError, ]);

    useEffect(() => {
        if (app) logPageView(app, {
            pageName : 'Packages',
            route    : '/packages',
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
                            {t('packages.tagline')}
                        </Typography>
                        <SearchInput
                            loading={isPending}
                            hint={t('packages.search.hint')}
                            onSearch={handleSearch} />
                    </Container>
                </Box>
                {!matchedIngredients && (
                    <Container maxWidth='lg'>
                        <Stack
                            paddingTop={8}
                            display='flex'
                            direction='row'>
                            <Box flexGrow={1}>
                                <Typography
                                    gutterBottom
                                    paddingTop={2}
                                    color='primary'
                                    variant='h4'>
                                    {t('packages.about.title')}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {t('packages.about.description')}
                                </Typography>
                            </Box>
                            <Box marginRight={-4}>
                                <Terminal commands={RECIPE_COMMANDS} />
                            </Box>
                        </Stack>
                    </Container>
                )}
                <Container maxWidth='lg'>
                    {matchedIngredients && (
                        <GridView sx={{
                            paddingTop : 4,
                        }}>
                            {matchedIngredients.map(ingredient => (
                                <IngredientView
                                    key={ingredient.id}
                                    ingredient={ingredient} />
                            ))}
                        </GridView>
                    )}
                    {!matchedIngredients && caskData && formulaData && Object.keys(PLACEHOLDER).map(key => (
                        <SectionedGridView
                            sx={{
                                paddingY : 4,
                            }}
                            key={key}
                            paddingTop={4}
                            color='primary'
                            title={t(key)}>
                            {PLACEHOLDER[key].map(id => formulaCaskData.find(ingredient => ingredient.id === id.substring(id.indexOf('/') + 1) && ingredient.source === id.substring(0, id.indexOf('/')))!).map(ingredient => (
                                <IngredientView
                                    key={ingredient.id}
                                    ingredient={ingredient} />
                            ))}
                        </SectionedGridView>
                    ))}
                </Container>
            </Stack>
            <Loading show={!caskData || !formulaData || !!caskError || !!formulaError || !!searchError}>
                <Typography color={theme => theme.palette.getContrastText(theme.palette.text.primary)}>
                    {t('packages.loading')}
                </Typography>
            </Loading>
        </>
    );
};
