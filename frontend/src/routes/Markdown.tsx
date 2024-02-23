import { AppBar, Box, Container, Toolbar, Typography, useScrollTrigger, } from '@mui/material';
import React, { cloneElement, Fragment, ReactElement, useEffect, } from 'react';
import { useTranslation, } from 'react-i18next';
import MarkdownRenderer from 'react-markdown';
import { Link, } from 'react-router-dom';

import { usePageQuery, } from '../apis';
import { Loading, ThemeModeToggle, } from '../components';
import SmallLogo from '../components/TopAppBar/SmallLogo.png';
import { PAGES_REFRESH_INTERVAL, } from '../constants';
import { handleError, } from '../utils';

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

const TopAppBar = ({
    title,
} : {
    title? : string,
}) => {
    const { t, } = useTranslation();

    return (
        <Fragment>
            <ElevationScroll>
                <AppBar color='inherit'>
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
                                variant='h5'
                                fontWeight='bold'>
                                {title || t('app.name')}
                            </Typography>
                            <Box flexGrow={1} />
                            <ThemeModeToggle />
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Fragment>
    );
};

export const Markdown = ({
    id,
} : {
    id : string,
}) => {
    const { data, error, } = usePageQuery(id, {
        pollingInterval : PAGES_REFRESH_INTERVAL,
    });

    useEffect(() => {
        if (error) handleError(error);
    }, [ error, ]);

    return (
        <Fragment>
            <TopAppBar title={data ? data[0] : undefined} />
            <Container maxWidth='lg'>
                <Box
                    paddingTop={4}
                    paddingBottom={8}>
                    <MarkdownRenderer>{data ? data[1] : undefined}</MarkdownRenderer>
                </Box>
                <Loading show={!data} />
            </Container>
        </Fragment>
    );
};
