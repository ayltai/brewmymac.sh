import React from 'react';
import { createHashRouter, Navigate, } from 'react-router-dom';

import { RouteError, } from './RouteError';
import { Root, } from './Root';

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
                path : '/packages',
                lazy : async () => {
                    const { Packages, } = await import('./Packages');
                    return {
                        Component : Packages,
                    };
                },
            },
            {
                path : '/tweaks',
                lazy : async () => {
                    const { Tweaks, } = await import('./Tweaks');
                    return {
                        Component : Tweaks,
                    };
                },
            },
        ],
    },
    {
        path         : '/pages/:page',
        lazy         : async () => {
            const { Page, } = await import('./Page');
            return {
                Component : Page,
            };
        },
        errorElement : <RouteError />,
    },
    {
        path         : '*',
        element      : <RouteError />,
        errorElement : <RouteError />,
    },
]);
