import React from 'react';
import { createHashRouter, Navigate, } from 'react-router-dom';

import { Markdown, } from './Markdown';
import { RouteError, } from './RouteError';
import { Packages, } from './Packages';
import { Page, } from './Page';
import { Root, } from './Root';
import { Tweaks, } from './Tweaks';

export const router = createHashRouter([
    {
        path         : '/',
        element      : <Root />,
        errorElement : <RouteError />,
        children     : [
            {
                path    : '/',
                element : <Navigate to='/packages' />,
            },
            {
                path    : '/packages',
                element : <Packages />,
            },
            {
                path    : '/tweaks',
                element : <Tweaks />,
            },
        ],
    },
    {
        path         : '/pages',
        element      : <Page />,
        errorElement : <RouteError />,
        children     : [
            {
                path    : '/pages/about',
                element : <Markdown id='63gOEykAJI6Sp5ZYYC9NO2' />,
            },
            {
                path    : '/pages/terms',
                element : <Markdown id='7rGcIumbIVDuu0KZqVauvH' />,
            },
            {
                path    : '/pages/privacy',
                element : <Markdown id='kirxbfcCbtRcCaGlxLZFE' />,
            },
            {
                path    : '/pages/disclaimer',
                element : <Markdown id='5JIZ4p8HrhBkuF5NI5F0dH' />,
            },
        ],
    },
]);
