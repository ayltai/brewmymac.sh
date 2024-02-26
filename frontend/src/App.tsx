import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React, { Fragment, useEffect, useState, } from 'react';
import { RouterProvider, } from 'react-router-dom';

import { useAppSelector, } from './hooks';
import { router, } from './routes';
import { appTheme, } from './styles';

export const App = () => {
    // @ts-ignore
    const [ theme , setTheme , ] = useState(createTheme(appTheme));

    const { themeMode, } = useAppSelector(state => state.preference);

    useEffect(() => {
        // @ts-ignore
        setTheme(createTheme({
            ...appTheme,
            palette : {
                ...appTheme.palette,
                background : {
                    default : themeMode === 'light' ? '#eceff1' : '#263238',
                    paper   : themeMode === 'light' ? '#ffffff' : '#000000',
                },
                mode       : themeMode,
            },
        }));
    }, [ themeMode, ]);

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Fragment>
    );
};
