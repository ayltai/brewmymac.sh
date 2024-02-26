import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation, } from 'react-i18next';
import { isRouteErrorResponse, useNavigate, useRouteError, } from 'react-router-dom';

import { StyledButton, } from '../components/StyledButton';

export const RouteError = () => {
    const error        = useRouteError();
    const navigate     = useNavigate();
    const isRouteError = isRouteErrorResponse(error);

    const { t, } = useTranslation();

    const handleClick = () => navigate('/');

    return (
        <Stack
            spacing={2}
            alignItems='center'>
            <Typography
                variant='h1'
                fontWeight='bold'>
                {t('error.route_not_found.title')}
            </Typography>
            {isRouteError && (
                <>
                    <Typography variant='h5'>
                        {`${error.status} - ${error.statusText}`}
                    </Typography>
                    <Typography>
                        {t('error.route_not_found.description')}
                    </Typography>
                </>
            )}
            <StyledButton
                variant='contained'
                onClick={handleClick}>
                {t('error.route_not_found.action')}
            </StyledButton>
        </Stack>
    );
};
