import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
    const { ingredients, } : { ingredients : Ingredient[],     } = useAppSelector(state => state.recipe);
    const { themeMode,   } : { themeMode   : 'light' | 'dark', } = useAppSelector(state => state.preference);

    const app  = useContext(FirebaseContext);

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
                        <Box
                            sx={{
                                borderRadius    : '1rem',
                                backgroundColor : themeMode === 'light' ? '#e1f5fe' : '#01579b',
                            }}
                            padding={2}>
                            {ingredients.filter(ingredient => ingredient.source === 'App Store').map(ingredient => (
                                <Typography key={ingredient.id}>
                                    {`- ${ingredient.name}`}
                                </Typography>
                            ))}
                        </Box>
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
