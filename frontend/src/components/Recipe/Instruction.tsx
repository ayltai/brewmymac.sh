import { Link, Stack, Typography, } from '@mui/material';
import React, { FC, useContext, } from 'react';
import { useTranslation, } from 'react-i18next';

import { API_ENDPOINT, } from '../../constants';
import { FirebaseContext, } from '../../contexts';
import { useAppSelector, } from '../../hooks';
import type { Ingredient, } from '../../models';
import { logShare, } from '../../utils';
import { CopyableInput, } from '../CopyableInput';
import { DialogView, } from '../DialogView';
import type { InstructionProps, } from './Instruction.types';

/**
 * An instruction dialog that informs users about how to install the selected packages.
 * @param open Whether the dialog is open
 * @param recipeId The ID of the recipe
 * @param onClose Function to call when the close button is clicked
 * @param rest Other props
 */
export const Instruction : FC<InstructionProps> = ({
    open,
    recipeId,
    onClose,
    ...rest
}) => {
    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const app = useContext(FirebaseContext);

    const { t, } = useTranslation();

    const handleCopy = () => {
        if (app) logShare(app, {
            product : 'packages',
            itemId  : recipeId,
        });
    };

    return (
        <DialogView
            open={open}
            title={t('packages.checkout.title')}
            onClose={onClose}
            {...rest}>
            <Stack spacing={1}>
                {ingredients.some(ingredient => ingredient.source === 'App Store') && (
                    <>
                        <Typography>
                            {t('packages.checkout.instructions')}
                        </Typography>
                        <Link
                            href='https://support.apple.com/en-gb/guide/app-store/fir6253293d/mac'
                            target='_blank'>
                            https://support.apple.com/en-gb/guide/app-store/fir6253293d/mac
                        </Link>
                        {ingredients.filter(ingredient => ingredient.source === 'App Store').map(ingredient => (
                            <Typography key={ingredient.id}>
                                {`- ${ingredient.name}`}
                            </Typography>
                        ))}
                    </>
                )}
                <Typography>
                    {t('packages.checkout.copy')}
                </Typography>
                <Link
                    href='https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac'
                    target='_blank'>
                    https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac
                </Link>
                <CopyableInput
                    value={`bash -c "$(curl -fsSL '${import.meta.env.DEV ? `http://${window.location.hostname}:8080` : API_ENDPOINT}/recipes/install/${recipeId}')"`}
                    onCopy={handleCopy} />
            </Stack>
        </DialogView>
    );
};
