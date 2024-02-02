import { ShoppingCart as ShoppingCartIcon, } from '@mui/icons-material';
import { Badge, IconButton, } from '@mui/material';
import React, { FC, } from 'react';

import { useAppSelector, } from '../../hooks';

import type { ShoppingCartProps, } from './ShoppingCart.types';

/**
 * An icon button that displays the number of items selected.
 * @param onClick Function to call when the button is clicked
 * @param rest Other props
 */
export const ShoppingCart : FC<ShoppingCartProps> = ({
    onClick,
    ...rest
}) => {
    const { product,     } = useAppSelector(state => state.preference);
    const { ingredients, } = useAppSelector(state => state.cookbook);
    const { tweaks,      } = useAppSelector(state => state.spellbook);

    const count = (product === 'packages' ? ingredients : tweaks).length;

    return (
        <IconButton
            onClick={onClick}
            {...rest}>
            <Badge
                badgeContent={count > 0 ? String(count) : undefined}
                color={product === 'packages' ? 'primary' : 'secondary'}>
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
};
