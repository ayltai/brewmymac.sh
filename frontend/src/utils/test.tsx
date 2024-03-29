import { createTheme, ThemeProvider, } from '@mui/material';
import { configureStore, type Store, } from '@reduxjs/toolkit';
import { render, } from '@testing-library/react';
import React, { type ReactNode, } from 'react';
import { Provider, } from 'react-redux';
import { MemoryRouter, } from 'react-router-dom';

import { appStoreApi, brewMyMacApi, contentfulApi, homebrewApi, } from '../apis';
import { recipeReducer, preferenceReducer, spellbookReducer, } from '../states';
import { appTheme, } from '../styles';

export const createStore = (preloadedState? : unknown) => configureStore({
    preloadedState,
    reducer    : {
        recipe                        : recipeReducer,
        preference                    : preferenceReducer,
        spellbook                     : spellbookReducer,
        [ appStoreApi.reducerPath  ]  : appStoreApi.reducer,
        [ brewMyMacApi.reducerPath ]  : brewMyMacApi.reducer,
        [ contentfulApi.reducerPath ] : contentfulApi.reducer,
        [ homebrewApi.reducerPath  ]  : homebrewApi.reducer,
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(appStoreApi.middleware, brewMyMacApi.middleware, contentfulApi.middleware, homebrewApi.middleware),
});

export const defaultStore = createStore();

export type RootState = ReturnType<typeof defaultStore.getState>;

// @ts-ignore
const theme = createTheme(appTheme);

const customRender = (ui : any, {
    preloadedState,
    store = createStore(preloadedState),
    ...rest
} : {
    preloadedState?   : Record<string, any>,
    store?            : Store<RootState>,
    [ rest : string ] : any,
} = {}) => render(ui, {
    wrapper : ({
        children,
    } : {
        children : ReactNode,
    }) => (
        <Provider store={store}>
            <MemoryRouter>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </MemoryRouter>
        </Provider>
    ),
    ...rest,
});

export * from '@testing-library/react';

export { customRender as render, };
