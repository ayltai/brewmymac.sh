import { Backdrop, CircularProgress, Stack, } from '@mui/material';
import React, { FC, } from 'react';

import { useAppSelector, } from '../../hooks';
import type { LoadingProps, } from './Loading.types';

/**
 *
 * @param show Whether to show the component
 * @param children The content of the component
 * @param rest Other props
 */
export const Loading : FC<LoadingProps> = ({
    show = false,
    children,
    ...rest
}) => {
    const { product, } = useAppSelector(state => state.preference);

    return (
        <Backdrop open={show}>
            <Stack
                spacing={2}
                alignItems='center'
                {...rest}>
                <CircularProgress color={product === 'packages' ? 'primary' : 'secondary'} />
                {children}
            </Stack>
        </Backdrop>
    );
};
