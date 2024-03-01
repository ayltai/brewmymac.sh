import ButtonGroup from '@mui/material/ButtonGroup';
import React, { type FC, useCallback, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppSelector, useAppDispatch, useDesktopMode, } from '../../hooks';
import { setProduct, } from '../../states';
import { MaterialButton, } from '../Button';
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

    const selectPackages = useCallback(() => {
        dispatch(setProduct('packages'));

        if (onChange) onChange('packages');
    }, [ dispatch, onChange, ]);

    const selectTweaks = useCallback(() => {
        dispatch(setProduct('tweaks'));

        if (onChange) onChange('tweaks');
    }, [ dispatch, onChange, ]);

    return (
        <ButtonGroup
            size='large'
            {...rest}>
            <MaterialButton
                variant={product === 'packages' ? 'contained' : 'outlined'}
                color={'primary'}
                onClick={selectPackages}>
                {t(isDesktopMode ? 'app.brewmymac' : 'app.brewmymac.small')}
            </MaterialButton>
            <MaterialButton
                variant={product === 'tweaks' ? 'contained' : 'outlined'}
                color={'secondary'}
                onClick={selectTweaks}>
                {t(isDesktopMode ? 'app.tweakmymac' : 'app.tweakmymac.small')}
            </MaterialButton>
        </ButtonGroup>
    );
};
