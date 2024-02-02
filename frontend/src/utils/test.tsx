import { createTheme, ThemeProvider, } from '@mui/material';
import { configureStore, Store, } from '@reduxjs/toolkit';
import { render, } from '@testing-library/react';
import React, { ReactNode, } from 'react';
import { Provider, } from 'react-redux';
import { MemoryRouter, } from 'react-router-dom';

import { appStoreApi, homebrewApi, } from '../apis';
import { cookbookReducer, preferenceReducer, spellbookReducer, } from '../states';
import { appTheme, } from '../styles';

export const createStore = (preloadedState? : unknown) => configureStore({
    preloadedState,
    reducer    : {
        cookbook                    : cookbookReducer,
        preference                  : preferenceReducer,
        spellbook                   : spellbookReducer,
        [ appStoreApi.reducerPath ] : appStoreApi.reducer,
        [ homebrewApi.reducerPath ] : homebrewApi.reducer,
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(appStoreApi.middleware, homebrewApi.middleware),
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

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

export { customRender as render, };
