import { createTheme, CssBaseline, ThemeProvider, } from '@mui/material';
import React, { Fragment, } from 'react';
import { RouterProvider, } from 'react-router-dom';

import { appTheme, } from './styles';
import { router, } from './routes';

// @ts-ignore
const theme = createTheme(appTheme);

export const App = () => (
    <Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Fragment>
);
