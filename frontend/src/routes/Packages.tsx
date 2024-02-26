import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MiniSearch from 'minisearch';
import React, { useCallback, useContext, useEffect, useRef, useState, useTransition, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useCaskQuery, useFormulaQuery, useIngredientsQuery, useSearchQuery, } from '../apis';
import { SelectableCardView, } from '../components/CardView';
import { DetailsView, } from '../components/DetailsView';
import { GridView, SectionedGridView, } from '../components/GridView';
import { Loading, } from '../components/Loading';
import { SearchInput, } from '../components/SearchInput';
import { Terminal, } from '../components/Terminal';
import { FirebaseContext, } from '../contexts';
import { HOMEBREW_REFRESH_INTERVAL, INGREDIENT_CATEGORIES, MIN_SEARCH_LENGTH, SEARCH_FUZZINESS, RECIPE_COMMANDS, } from '../constants';
import { useAppDispatch, useAppSelector, useDesktopMode, } from '../hooks';
import type { Ingredient, } from '../models';
import { addIngredient, removeIngredient, } from '../states';
import { handleError, logAddToCart, logPageView, logRemoveFromCart, logSearch, } from '../utils';

export const Packages = () => {
    const [ query,              setQuery,              ] = useState('');
    const [ matchedIngredients, setMatchedIngredients, ] = useState<Ingredient[] | undefined>();

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const { data : ingredientsData, error : ingredientsError, } = useIngredientsQuery(undefined, {
        pollingInterval : HOMEBREW_REFRESH_INTERVAL,
    });

    const { data : caskData, error : caskError, } = useCaskQuery(undefined, {
        pollingInterval : HOMEBREW_REFRESH_INTERVAL,
    });

    const { data : formulaData, error : formulaError, } = useFormulaQuery(undefined, {
        pollingInterval : HOMEBREW_REFRESH_INTERVAL,
    });

    const { data : searchData, error : searchError, isFetching, isLoading, } = useSearchQuery(query, {
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

    const isDesktopMode = useDesktopMode();

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
        if (ingredientsError) handleError(ingredientsError);
        if (caskError) handleError(caskError);
        if (formulaError) handleError(formulaError);
        if (searchError) handleError(searchError);
    }, [ ingredientsError, caskError, formulaError, searchError, ]);

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
                    padding={isDesktopMode ? 8 : 2}
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
                            variant={isDesktopMode ? 'h2' : 'h4'}>
                            {t('packages.tagline')}
                        </Typography>
                        <SearchInput
                            loading={isPending || isFetching || isLoading}
                            hint={t('packages.search.hint')}
                            onSearch={handleSearch} />
                    </Container>
                </Box>
                {!matchedIngredients && (
                    <Container maxWidth='lg'>
                        <Stack
                            paddingTop={8}
                            display='flex'
                            direction={isDesktopMode ? 'row' : 'column'}
                            alignItems={isDesktopMode ? undefined : 'center'}
                            textAlign={isDesktopMode ? undefined : 'center'}>
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
                            <Box
                                marginRight={isDesktopMode ? -4 : 0}
                                textAlign='left'>
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
                    {!matchedIngredients && ingredientsData && INGREDIENT_CATEGORIES.map(category => (
                        <SectionedGridView
                            sx={{
                                paddingY : 4,
                            }}
                            key={category}
                            paddingTop={4}
                            color='primary'
                            title={category}>
                            {ingredientsData.filter(ingredient => ingredient.category === category).map(ingredient => (
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
