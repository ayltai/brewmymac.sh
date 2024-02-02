import React from 'react';
import { createHashRouter, Navigate, } from 'react-router-dom';

import { RouteError, } from './RouteError';
import { Packages, } from './Packages';
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
]);
