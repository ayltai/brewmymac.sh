import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider, } from '@mui/material';
import { withThemeFromJSXProvider, } from '@storybook/addon-themes';
import * as React from 'react';
import { Provider, } from 'react-redux';
import { withRouter, } from 'storybook-addon-react-router-v6';

import { store, } from '../src/states';
import { appTheme, } from '../src/styles';
import i18n from './i18next';

// @ts-ignore
const theme = createTheme(appTheme);

export const globals = {
    locale  : 'en',
    locales : {
        en : 'English',
    },
};

export const decorators = [
    withRouter,
    withThemeFromJSXProvider({
        themes       : {
            light : theme,
            dark  : theme,
        },
        defaultTheme : 'light',
        Provider     : ThemeProvider,
        GlobalStyles : CssBaseline,
    }),
    Story => (
        <Provider store={store}>
            <Story />
        </Provider>
    ),
];

export const parameters = {
    i18n,
    actions      : {
        argTypesRegex : '^on[A-Z].*',
    },
    controls     : {
        expanded : true,
        matchers : {
            color : /(background|color)$/i,
            date  : /Date$/,
        },
    },
};
