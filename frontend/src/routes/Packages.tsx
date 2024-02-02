import { Stack, } from '@mui/material';
import MiniSearch from 'minisearch';
import React, { useEffect, useRef, useState, useTransition, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useCaskQuery, useFormulaQuery, useSearchQuery, } from '../apis';
import { GridView, Loading, SearchInput, SelectableCardView, } from '../components';
import { HOMEBREW_REFRESH_INTERVAL, MIN_SEARCH_LENGTH, SEARCH_FUZZINESS, } from '../constants';
import { useAppDispatch, useAppSelector, } from '../hooks';
import { Ingredient, } from '../models';
import { addIngredient, removeIngredient, } from '../states';
import { handleError, } from '../utils';

export const Packages = () => {
    const [ query,              setQuery,              ] = useState('');
    const [ matchedIngredients, setMatchedIngredients, ] = useState<Ingredient[] | undefined>();

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.cookbook);

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
                <SearchInput
                    loading={!caskData || !formulaData || !!caskError || !!formulaError || !!searchError || isPending}
                    hint={t('search.hint')}
                    onSearch={handleSearch} />
                {matchedIngredients && (
                    <GridView>
                        {matchedIngredients.map(ingredient => {
                            const handleChange = (selected : boolean) => dispatch(selected ? addIngredient(ingredient) : removeIngredient(ingredient));

                            return (
                                <SelectableCardView
                                    key={ingredient.id}
                                    selected={ingredients.some((selected : Ingredient) => selected.id === ingredient.id)}
                                    title={ingredient.name}
                                    subtitle={ingredient.author}
                                    description={ingredient.description}
                                    onChange={handleChange} />
                            );
                        })}
                    </GridView>
                )}
            </Stack>
            <Loading show={!caskData || !formulaData || !!caskError || !!formulaError || !!searchError}>
                {t('packages.loading')}
            </Loading>
        </>
    );
};
