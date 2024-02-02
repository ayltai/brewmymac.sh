import { Box, Drawer, } from '@mui/material';
import React, { useEffect, useState, } from 'react';
import { Outlet, } from 'react-router-dom';

import { Footer, Recipe, Spellbook, TopAppBar, } from '../components';
import { useAppSelector, } from '../hooks';
import type { Ingredient, Tweak, } from '../models';

export const Root = () => {
    const [ expanded , setExpanded , ] = useState(false);
    const [ onboarded, setOnboarded, ] = useState(false);

    const { product, } : { product : 'packages' | 'tweaks', } = useAppSelector(state => state.preference);

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const { tweaks, } : { tweaks : Tweak[], } = useAppSelector(state => state.spellbook);

    const handleExpand = () => setExpanded(!expanded);

    const handleClose = () => setExpanded(false);

    useEffect(() => {
        if (!onboarded && ((product === 'packages' && ingredients.length === 1) || (product === 'tweaks' && tweaks.length === 1))) {
            setOnboarded(true);
            setExpanded(true);
        }
    }, [ ingredients, onboarded, product, tweaks, ]);

    return (
        <Box width='100%'>
            <TopAppBar onExpand={handleExpand} />
            <Outlet />
            <Drawer
                open={expanded}
                anchor='right'
                onClose={handleClose}>
                {product === 'packages' && <Recipe />}
                {product === 'tweaks' && <Spellbook />}
            </Drawer>
            <Footer />
        </Box>
    );
};
