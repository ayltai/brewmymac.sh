import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import React, { type FC, } from 'react';

import { useAppSelector, } from '../../hooks';
import type { LoadingProps, } from './Loading.types';

/**
 * An indicator that shows a loading state.
 * @param show Whether to show the component
 * @param size The size of the component
 * @param children Additional content to show below the component
 * @param rest Other props
 */
export const Loading : FC<LoadingProps> = ({
    show = false,
    size,
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
                <CircularProgress
                    size={size}
                    color={product === 'packages' ? 'primary' : 'secondary'} />
                {children}
            </Stack>
        </Backdrop>
    );
};
