import { ButtonGroup, } from '@mui/material';
import React, { FC, } from 'react';

import { useAppSelector, useAppDispatch, } from '../../hooks';
import { setProduct, } from '../../states';
import { StyledButton, } from '../StyledButton';
import type { ProductSelectionProps, } from './ProductSelection.types';

/**
 * A button group that displays the product selection.
 * @param onChange Function to call when the button is clicked
 * @param rest Other props
 */
export const ProductSelection : FC<ProductSelectionProps> = ({
    onChange,
    ...rest
}) => {
    const { product, } = useAppSelector(state => state.preference);

    const dispatch = useAppDispatch();

    const selectPackages = () => {
        dispatch(setProduct('packages'));

        if (onChange) onChange('packages');
    };

    const selectTweaks = () => {
        dispatch(setProduct('tweaks'));

        if (onChange) onChange('tweaks');
    };

    return (
        <ButtonGroup
            size='large'
            {...rest}>
            <StyledButton
                variant={product === 'packages' ? 'contained' : 'text'}
                color={'primary'}
                onClick={selectPackages}>
                Brew My Mac
            </StyledButton>
            <StyledButton
                variant={product === 'tweaks' ? 'contained' : 'text'}
                color={'secondary'}
                onClick={selectTweaks}>
                Tweak My Mac
            </StyledButton>
        </ButtonGroup>
    );
};
