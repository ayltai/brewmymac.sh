import { AppBar, Box, Container, Toolbar, Typography, useScrollTrigger, } from '@mui/material';
import React, { cloneElement, FC, Fragment, ReactElement, } from 'react';
import { useTranslation, } from 'react-i18next';
import { Link, useNavigate, } from 'react-router-dom';

import { ProductSelection, } from '../ProductSelection';
import { ShoppingCart, } from '../ShoppingCart';
import { ThemeModeToggle, } from '../ThemeModeToggle';
import SmallLogo from './SmallLogo.png';
import type { TopAppBarProps, } from './TopAppBar.types';

const ElevationScroll = ({
    children,
} : {
    children : ReactElement,
}) => {
    const trigger = useScrollTrigger({
        disableHysteresis : true,
        threshold         : 0,
    });

    return cloneElement(children, {
        elevation : trigger ? 4 : 0,
    });
};

/**
 * A top app bar that displays the title and actions related to the currently displayed content.
 * @param onExpand Function to call when the button is clicked
 * @param rest Other props
 */
export const TopAppBar : FC<TopAppBarProps> = ({
    onExpand,
    ...rest
}) => {
    const navigate = useNavigate();

    const { t, } = useTranslation();

    const handleChange = (product : 'packages' | 'tweaks') => navigate(`/${product}`);

    const handleClick = () => {
        if (onExpand) onExpand();
    };

    return (
        <Fragment>
            <ElevationScroll>
                <AppBar
                    color='inherit'
                    {...rest}>
                    <Container
                        sx={{
                            paddingLeft : 0,
                        }}
                        maxWidth='lg'>
                        <Toolbar disableGutters>
                            <Link to='/'>
                                <img
                                    style={{
                                        marginRight : 8,
                                    }}
                                    src={SmallLogo}
                                    alt={t('app.name')}
                                    width={48}
                                    height={48} />
                            </Link>
                            <Typography
                                variant='h4'
                                fontWeight='bold'>
                                {t('app.name')}
                            </Typography>
                            <Box flexGrow={1} />
                            <ProductSelection
                                sx={{
                                    marginLeft : -16,
                                }}
                                onChange={handleChange} />
                            <Box flexGrow={1} />
                            <ThemeModeToggle />
                            <Box padding={1} />
                            <ShoppingCart onClick={handleClick} />
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Fragment>
    );
};
