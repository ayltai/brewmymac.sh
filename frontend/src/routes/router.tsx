import React from 'react';
import { createBrowserRouter, Navigate, } from 'react-router-dom';

import { RouteError, } from './RouteError';
import { Packages, } from './Packages';
import { Root, } from './Root';
import { Tweaks, } from './Tweaks';

export const router = createBrowserRouter([
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
]);
