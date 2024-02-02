import { Box, Container, Drawer, Theme, useMediaQuery,  } from '@mui/material';
import React, { useState, } from 'react';
import { Outlet, } from 'react-router-dom';

import { Recipe, TopAppBar, } from '../components';

export const Root = () => {
    const [ expanded, setExpanded, ] = useState(false);

    const isDesktop = useMediaQuery((theme : Theme) => theme.breakpoints.up('lg'));

    const handleExpand = () => setExpanded(!expanded);

    const handleClose = () => setExpanded(false);

    return (
        <Box width='100%'>
            <TopAppBar onExpand={handleExpand} />
            <Container maxWidth={isDesktop ? 'lg' : 'sm'}>
                <Outlet />
                <Drawer
                    open={expanded}
                    anchor='right'
                    onClose={handleClose}>
                    <Recipe />
                </Drawer>
            </Container>
        </Box>
    );
};
