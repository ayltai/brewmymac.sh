import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { Outlet, useNavigate, } from 'react-router-dom';
import { DarkModeSwitch, } from '../components/DarkModeSwitch';
import { Footer, } from '../components/Footer';
import { ProductSelection, } from '../components/ProductSelection';
import { Recipe, } from '../components/Recipe';
import { ShoppingCart, } from '../components/ShoppingCart';
import { Spellbook, } from '../components/Spellbook';
import { TopAppBar, } from '../components/TopAppBar';
import { useAppSelector, useDesktopMode, } from '../hooks';
import type { Ingredient, Tweak, } from '../models';
import SmallLogo from '../components/TopAppBar/SmallLogo.webp';

export const Root = () => {
    const [ expanded , setExpanded , ] = useState(false);
    const [ onboarded, setOnboarded, ] = useState(false);

    const { product, themeMode, } : { product : 'packages' | 'tweaks', themeMode : 'light' | 'dark', } = useAppSelector(state => state.preference);

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const { tweaks, } : { tweaks : Tweak[], } = useAppSelector(state => state.spellbook);

    const isDesktopMode = useDesktopMode();

    const navigate = useNavigate();

    const { t, } = useTranslation();

    const handleChange = (value : 'packages' | 'tweaks') => navigate(`/${value}`);

    const handleClick = () => setExpanded(true);

    const handleClose = () => setExpanded(false);

    useEffect(() => {
        if (!onboarded && ((product === 'packages' && ingredients.length === 1) || (product === 'tweaks' && tweaks.length === 1))) {
            setOnboarded(true);
            setExpanded(true);
        }
    }, [ ingredients, onboarded, product, tweaks, ]);

    return (
        <Box width='100%'>
            <TopAppBar
                logo={
                    <img
                        style={{
                            marginRight : 8,
                        }}
                        src={SmallLogo}
                        alt={t('app.name')}
                        width={48}
                        height={48} />
                }
                title={
                    <Typography
                        variant='h4'
                        fontWeight='bold'>
                        {t('app.name')}
                    </Typography>
                }
                actions={
                    <>
                        <DarkModeSwitch />
                        <Box padding={1} />
                        <ShoppingCart onClick={handleClick} />
                    </>
                }>
                <ProductSelection
                    sx={{
                        marginLeft : isDesktopMode ? -16 : 6,
                    }}
                    onChange={handleChange} />
            </TopAppBar>
            <Box
                sx={{
                    backgroundImage      : themeMode === 'dark' ? 'url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgd2lkdGg9IjY0MCIKICAgIGhlaWdodD0iNjQwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgICAgICBpZD0ic3ctZ3JhZGllbnQiCiAgICAgICAgICAgIHgxPSIwIgogICAgICAgICAgICB4Mj0iMSIKICAgICAgICAgICAgeTE9IjEiCiAgICAgICAgICAgIHkyPSIwIj4KICAgICAgICAgICAgPHN0b3AKICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9InJnYmEoMzQsIDM2LCAzOCwgMSkiCiAgICAgICAgICAgICAgICBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgICAgc3RvcC1jb2xvcj0icmdiYSgzOCwgNTAsIDU2LCAxKSIKICAgICAgICAgICAgICAgIG9mZnNldD0iMTAwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgICBmaWxsPSJ1cmwoI3N3LWdyYWRpZW50KSIKICAgICAgICBkPSJNMjEuNywtMTEuOUMyMy42LC0xLjQsMTcuMyw2LjgsOC42LDEzLjVDMCwyMC4xLC0xMSwyNS4xLC0xOC45LDIwLjZDLTI2LjksMTYuMSwtMzEuOSwyLjEsLTI4LjIsLTEwLjlDLTI0LjYsLTIzLjksLTEyLjMsLTM1LjksLTEuMiwtMzUuNUMxMCwtMzUuMSwxOS45LC0yMi40LDIxLjcsLTExLjlaIgogICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSIgLz4KPC9zdmc+Cg==)' : 'url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgd2lkdGg9IjY0MCIKICAgIGhlaWdodD0iNjQwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgICAgICBpZD0ic3ctZ3JhZGllbnQiCiAgICAgICAgICAgIHgxPSIwIgogICAgICAgICAgICB4Mj0iMSIKICAgICAgICAgICAgeTE9IjEiCiAgICAgICAgICAgIHkyPSIwIj4KICAgICAgICAgICAgPHN0b3AKICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9InJnYmEoMjI4LCAyMzIsIDIzNCwgMSkiCiAgICAgICAgICAgICAgICBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgICAgc3RvcC1jb2xvcj0icmdiYSgyMzYsIDIzOSwgMjQxLCAxKSIKICAgICAgICAgICAgICAgIG9mZnNldD0iMTAwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgICBmaWxsPSJ1cmwoI3N3LWdyYWRpZW50KSIKICAgICAgICBkPSJNMjEuNywtMTEuOUMyMy42LC0xLjQsMTcuMyw2LjgsOC42LDEzLjVDMCwyMC4xLC0xMSwyNS4xLC0xOC45LDIwLjZDLTI2LjksMTYuMSwtMzEuOSwyLjEsLTI4LjIsLTEwLjlDLTI0LjYsLTIzLjksLTEyLjMsLTM1LjksLTEuMiwtMzUuNUMxMCwtMzUuMSwxOS45LC0yMi40LDIxLjcsLTExLjlaIgogICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSIgLz4KPC9zdmc+Cg==)',
                    backgroundPosition   : 'left -10vw center',
                    backgroundSize       : '125%',
                    backgroundAttachment : 'fixed',
                    backgroundRepeat     : 'no-repeat',
                }}
                paddingBottom={16}
                marginBottom='16rem'
                boxShadow={4}
                bgcolor={themeMode === 'light' ? '#eceff1' : '#263238'}>
                <Outlet />
            </Box>
            <Drawer
                open={expanded}
                anchor='right'
                onClose={handleClose}>
                {product === 'packages' && <Recipe />}
                {product === 'tweaks' && <Spellbook />}
            </Drawer>
            <Footer style={{
                position : 'fixed',
                bottom   : 0,
                zIndex   : -1,
            }} />
        </Box>
    );
};
