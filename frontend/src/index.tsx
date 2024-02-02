import { browserTracingIntegration, ErrorBoundary, init, reactRouterV6BrowserTracingIntegration, replayIntegration, } from '@sentry/react';
import React, { StrictMode, useEffect, } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType, } from 'react-router-dom';
import { Provider, } from 'react-redux';
import { PersistGate, } from 'redux-persist/integration/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import PackageInfo from '../package.json';
import { App, } from './App';
import { apply, } from './i18n';
import en from './i18n/en.json';
import './index.css';
import { persistor, store, } from './states';
import { handleError, } from './utils';

if (import.meta.env.REACT_APP_SENTRY_DSN) init({
    dsn              : import.meta.env.REACT_APP_SENTRY_DSN,
    environment      : import.meta.env.NODE_ENV || 'development',
    release          : PackageInfo.version,
    tracesSampleRate : 1,
    integrations     : [
        browserTracingIntegration(),
        reactRouterV6BrowserTracingIntegration({
            createRoutesFromChildren,
            matchRoutes,
            useEffect,
            useLocation,
            useNavigationType,
        }),
        replayIntegration(),
    ],
});

apply({
    language           : navigator.language.substring(0, 2),
    supportedLanguages : [
        'en',
    ],
    fallbackLanguage   : 'en',
    resources          : {
        en : {
            translation : en,
        },
    },
}).then(() => ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary showDialog>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    </StrictMode>
)).catch(handleError);
