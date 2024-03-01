import type { SearchResult, } from 'minisearch';
import React, { useCallback, useEffect, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useCaskQuery, useFormulaQuery, useIngredientsQuery, useSearchQuery, } from '../apis';
import { Catalogue, CatalogueItem, } from '../components/Catalogue';
import { DetailsView, } from '../components/DetailsView';
import { HOMEBREW_REFRESH_INTERVAL, INGREDIENT_CATEGORIES, MIN_SEARCH_LENGTH, RECIPE_COMMANDS, } from '../constants';
import { useAppDispatch, useAppSelector, } from '../hooks';
import type { Ingredient, } from '../models';
import { addIngredient, removeIngredient, } from '../states';
import { handleError, } from '../utils';

export const Packages = () => {
    const [ query,                 setQuery,                 ] = useState('');
    const [ downloadedIngredients, setDownloadedIngredients, ] = useState<Ingredient[]>([]);

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const { data : suggestedIngredients, error : ingredientsError, } = useIngredientsQuery(undefined, {
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

    const dispatch = useAppDispatch();

    const { t, } = useTranslation();

    const searchResultMapper = useCallback((result : SearchResult) => ({
        id          : result.id,
        name        : result.name,
        description : result.description,
        imageUrl    : result.imageUrl,
        infoUrl     : result.infoUrl,
        author      : result.author,
        source      : result.source,
    }), []);

    const handleSearch = (keywords? : string) => setQuery(keywords ?? '');

    const handleSelectionChange = useCallback((ingredient : Ingredient, selected : boolean) => dispatch(selected ? addIngredient(ingredient) : removeIngredient(ingredient)), [ dispatch, ]);

    const renderCatalogueItem = useCallback((ingredient : Ingredient) => (
        <CatalogueItem
            key={ingredient.id}
            selected={ingredients.some(item => item.id === ingredient.id)}
            item={ingredient}
            detailsView={
                <DetailsView
                    description={ingredient.description}
                    infoUrl={ingredient.infoUrl} />
            }
            onSelectionChange={handleSelectionChange} />
    ), [ handleSelectionChange, ingredients, ]);

    useEffect(() => {
        const newDownloadedIngredients : Ingredient[] = [];

        if (caskData) newDownloadedIngredients.push(...caskData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        if (formulaData) newDownloadedIngredients.push(...formulaData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        if (searchData) newDownloadedIngredients.push(...searchData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        setDownloadedIngredients(newDownloadedIngredients);
    }, [ caskData, formulaData, searchData, ]);

    useEffect(() => {
        if (ingredientsError) handleError(ingredientsError);
        if (caskError) handleError(caskError);
        if (formulaError) handleError(formulaError);
        if (searchError) handleError(searchError);
    }, [ ingredientsError, caskError, formulaError, searchError, ]);

    return (
        <Catalogue
            searching={isFetching || isLoading}
            suggestedItems={suggestedIngredients}
            downloadedItems={downloadedIngredients}
            tagLine={t('packages.tagline')}
            searchHint={t('packages.search.hint')}
            title={t('packages.about.title')}
            description={t('packages.about.description')}
            commands={RECIPE_COMMANDS}
            categories={INGREDIENT_CATEGORIES}
            itemFields={[
                'id',
                'name',
                'description',
                'imageUrl',
                'infoUrl',
                'author',
                'source',
            ]}
            loadingMessage={t('packages.loading')}
            renderCatalogueItem={renderCatalogueItem}
            searchResultMapper={searchResultMapper}
            onSearch={handleSearch} />
    );
};
