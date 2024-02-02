import { Box, Link, Stack, Typography, } from '@mui/material';
import MiniSearch from 'minisearch';
import React, { useEffect, useRef, useState, useTransition, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useCaskQuery, useFormulaQuery, useSearchQuery, } from '../apis';
import { GridView, Loading, SearchInput, SectionedGridView, SelectableCardView, } from '../components';
import { ESSENTIAL_APPS, DEVELOPMENT_APPS, HOMEBREW_REFRESH_INTERVAL, MIN_SEARCH_LENGTH, SEARCH_FUZZINESS, UTILITY_APPS, } from '../constants';
import { useAppDispatch, useAppSelector, } from '../hooks';
import { Ingredient, } from '../models';
import { addIngredient, removeIngredient, } from '../states';
import { handleError, } from '../utils';

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

    const [ isPending, startTransition, ] = useTransition();

    const { t, } = useTranslation();

    const formulaCaskData : Ingredient[] = [
        ...(formulaData ?? []),
        ...(caskData ?? []),
    ];

    const search = (keyword : string) => searchEngine.current.search(keyword).map(result => ({
        id          : result.id,
        name        : result.name,
        description : result.description,
        imageUrl    : result.imageUrl,
        infoUrl     : result.infoUrl,
        author      : result.author,
        source      : result.source,
    }));

    const handleSearch = (keyword? : string) => setQuery(keyword ?? '');

    const IngredientView = ({
        ingredient,
    } : {
        ingredient : Ingredient,
    }) => {
        const handleChange = (selected : boolean) => dispatch(selected ? addIngredient(ingredient) : removeIngredient(ingredient));

        return (
            <SelectableCardView
                key={ingredient.id}
                selected={ingredients.some(selected => selected.id === ingredient.id)}
                title={ingredient.name}
                subtitle={ingredient.author}
                description={ingredient.description}
                onChange={handleChange}>
                <Stack spacing={2}>
                    <Box>
                        <Typography
                            variant='h5'
                            fontWeight='bold'>
                            {t('common.description')}
                        </Typography>
                        <Typography>
                            {ingredient.description}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant='h5'
                            fontWeight='bold'>
                            {t('common.website')}
                        </Typography>
                        <Link
                            href={ingredient.infoUrl}
                            target='_'>
                            <Typography>
                                {ingredient.infoUrl}
                            </Typography>
                        </Link>
                    </Box>
                </Stack>
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
    }, [ caskData, formulaData, searchData, query, ]);

    useEffect(() => {
        if (caskError) handleError(caskError);
        if (formulaError) handleError(formulaError);
        if (searchError) handleError(searchError);
    }, [ caskError, formulaError, searchError, ]);

    return (
        <>
            <Stack
                paddingTop={2}
                spacing={2}
                alignItems='center'>
                <Typography
                    paddingTop={8}
                    paddingBottom={4}
                    textAlign='center'
                    variant='h3'>
                    {t('packages.tagline')}
                </Typography>
                <SearchInput
                    loading={isPending}
                    hint={t('packages.search.hint')}
                    onSearch={handleSearch} />
                {matchedIngredients && (
                    <GridView paddingTop={4}>
                        {matchedIngredients.map(ingredient => (
                            <IngredientView
                                key={ingredient.id}
                                ingredient={ingredient} />
                        ))}
                    </GridView>
                )}
                {!matchedIngredients && caskData && formulaData && Object.keys(PLACEHOLDER).map(key => (
                    <SectionedGridView
                        key={key}
                        paddingTop={4}
                        title={t(key)}>
                        {PLACEHOLDER[key].map(id => formulaCaskData.find(ingredient => ingredient.id === id.substring(id.indexOf('/') + 1) && ingredient.source === id.substring(0, id.indexOf('/')))!).map(ingredient => (
                            <IngredientView
                                key={ingredient.id}
                                ingredient={ingredient} />
                        ))}
                    </SectionedGridView>
                ))}
            </Stack>
            <Loading show={!caskData || !formulaData || !!caskError || !!formulaError || !!searchError}>
                {t('packages.loading')}
            </Loading>
        </>
    );
};
