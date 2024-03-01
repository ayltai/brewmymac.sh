import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React, { cloneElement, type FC, type ReactElement, } from 'react';
import { Link, } from 'react-router-dom';

import { useDesktopMode, } from '../../hooks';
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
 * @param logo The logo to show at the start of the top app bar
 * @param title The title to show at the start of the top app bar and after the logo
 * @param actions The actions to show at the end of the top app bar
 * @param children The content to show at the middle of the top app bar
 * @param rest Other props
 */
export const TopAppBar : FC<TopAppBarProps> = ({
    logo,
    title,
    actions,
    children,
    ...rest
}) => {
    const isDesktopMode = useDesktopMode();

    return (
        <>
            <ElevationScroll>
                <AppBar
                    style={{
                        backdropFilter : 'blur(16px)',
                    }}
                    color='transparent'
                    {...rest}>
                    <Container
                        sx={{
                            paddingLeft : 0,
                        }}
                        maxWidth='lg'>
                        <Toolbar disableGutters>
                            <Link to='/'>
                                {logo}
                            </Link>
                            {isDesktopMode && title}
                            <Box flexGrow={1} />
                            {children}
                            <Box flexGrow={1} />
                            {actions}
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </>
    );
};
