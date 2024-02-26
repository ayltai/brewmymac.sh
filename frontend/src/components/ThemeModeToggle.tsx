import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppDispatch, useAppSelector, } from '../hooks';
import { setThemeMode, } from '../states';

export const ThemeModeToggle = ({
    ...rest
} : {
    [ rest : string ] : any,
}) => {
    const { themeMode, } = useAppSelector(state => state.preference);

    const dispatch = useAppDispatch();

    const { t, } = useTranslation();

    const handleClick = () => dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'));

    return (
        <IconButton
            aria-label={t('action.theme_toggle')}
            onClick={handleClick}
            {...rest}>
            {themeMode === 'dark' ? <DarkMode /> : <LightMode />}
        </IconButton>
    );
};
