import ButtonGroup from '@mui/material/ButtonGroup';
import React, { FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppSelector, useAppDispatch, useDesktopMode, } from '../../hooks';
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

    const isDesktopMode = useDesktopMode();

    const dispatch = useAppDispatch();

    const { t, } = useTranslation();

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
                variant={product === 'packages' ? 'contained' : 'outlined'}
                color={'primary'}
                onClick={selectPackages}>
                {t(isDesktopMode ? 'app.brewmymac' : 'app.brewmymac.small')}
            </StyledButton>
            <StyledButton
                variant={product === 'tweaks' ? 'contained' : 'outlined'}
                color={'secondary'}
                onClick={selectTweaks}>
                {t(isDesktopMode ? 'app.tweakmymac' : 'app.tweakmymac.small')}
            </StyledButton>
        </ButtonGroup>
    );
};
