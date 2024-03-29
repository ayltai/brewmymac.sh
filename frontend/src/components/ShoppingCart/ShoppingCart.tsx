import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import React, { type FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppSelector, } from '../../hooks';

import type { ShoppingCartProps, } from './ShoppingCart.types';

/**
 * An icon button displays the number of items selected.
 * @param onClick Function to call when the button is clicked
 * @param rest Other props
 */
export const ShoppingCart : FC<ShoppingCartProps> = ({
    onClick,
    ...rest
}) => {
    const { product,     } = useAppSelector(state => state.preference);
    const { ingredients, } = useAppSelector(state => state.recipe);
    const { tweaks,      } = useAppSelector(state => state.spellbook);

    const { t, } = useTranslation();

    const count = (product === 'packages' ? ingredients : tweaks).length;

    return (
        <IconButton
            aria-label={t('action.view_cart')}
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
