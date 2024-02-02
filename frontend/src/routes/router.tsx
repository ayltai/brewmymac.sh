import React from 'react';
import { createBrowserRouter, } from 'react-router-dom';

import { RouteError, } from './RouteError';
import { Home, } from './Home';
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
                element : <Home />,
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
