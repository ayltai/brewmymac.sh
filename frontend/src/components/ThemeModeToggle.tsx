import { DarkMode, LightMode, } from '@mui/icons-material';
import { IconButton, } from '@mui/material';
import React from 'react';

import { useAppDispatch, useAppSelector, } from '../hooks';
import { setThemeMode, } from '../states';

export const ThemeModeToggle = ({
    ...rest
} : {
    [ rest : string ] : any,
}) => {
    const { themeMode, } = useAppSelector(state => state.preference);

    const dispatch = useAppDispatch();

    const handleClick = () => dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'));

    return (
        <IconButton
            onClick={handleClick}
            {...rest}>
            {themeMode === 'dark' ? <DarkMode /> : <LightMode />}
        </IconButton>
    );
};