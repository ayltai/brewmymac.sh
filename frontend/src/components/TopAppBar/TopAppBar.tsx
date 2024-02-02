import { AppBar, Box, Container, Toolbar, useScrollTrigger, } from '@mui/material';
import React, { cloneElement, FC, Fragment, ReactElement, } from 'react';
import { useNavigate, } from 'react-router-dom';

import { ProductSelection, } from '../ProductSelection';
import { ShoppingCart, } from '../ShoppingCart';
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
                            <ProductSelection onChange={handleChange} />
                            <Box flexGrow={1} />
                            <ShoppingCart onClick={handleClick} />
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Fragment>
    );
};
