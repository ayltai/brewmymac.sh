import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { FC, useContext, } from 'react';
import { useTranslation, } from 'react-i18next';

import { API_ENDPOINT, } from '../../constants';
import { FirebaseContext, } from '../../contexts';
import { useAppSelector, } from '../../hooks';
import type { Tweak, } from '../../models';
import { logShare, } from '../../utils';
import { CopyableInput, } from '../CopyableInput';
import { DialogView, } from '../DialogView';
import type { InstructionProps, } from './Instruction.types';

/**
 * An instruction dialog that informs users about how to apply the selected tweaks.
 * @param open Whether the dialog is open
 * @param spellbookId The ID of the spellbook
 * @param onClose Function to call when the close button is clicked
 * @param rest Other props
 */
export const Instruction : FC<InstructionProps> = ({
    open,
    spellbookId,
    onClose,
    ...rest
}) => {
    const { tweaks,    } : { tweaks    : Tweak[],          } = useAppSelector(state => state.spellbook);
    const { themeMode, } : { themeMode : 'light' | 'dark', } = useAppSelector(state => state.preference);

    const app  = useContext(FirebaseContext);

    const { t, } = useTranslation();

    const handleCopy = () => {
        if (app) logShare(app, {
            product : 'packages',
            itemId  : spellbookId,
        });
    };

    return (
        <DialogView
            open={open}
            title={t('tweaks.checkout.title')}
            onClose={onClose}
            {...rest}>
            <Stack spacing={1}>
                {tweaks.some(tweak => tweak.sipInvolved) && (
                    <>
                        <Box paddingBottom={2}>
                            <Typography>
                                {t('tweaks.checkout.instructions.1')}
                            </Typography>
                            <Box
                                sx={{
                                    borderRadius    : '1rem',
                                    backgroundColor : themeMode === 'light' ? '#fbe9e7' : '#bf360c',
                                }}
                                padding={2}>
                                {tweaks.filter(tweak => tweak.sipInvolved).map(tweak => (
                                    <Typography key={tweak.id}>
                                        {`- ${tweak.name}`}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                        <Box paddingBottom={2}>
                            <Typography>
                                {t('tweaks.checkout.instructions.2')}
                            </Typography>
                            <Link
                                href='https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection'
                                target='_blank'>
                                https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection
                            </Link>
                        </Box>
                    </>
                )}
                <Typography>
                    {t('tweaks.checkout.copy')}
                </Typography>
                <Link
                    href='https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac'
                    target='_blank'>
                    https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac
                </Link>
                <CopyableInput
                    value={`bash -c "$(curl -fsSL '${import.meta.env.DEV ? `http://${window.location.hostname}:8080` : API_ENDPOINT}/spellbooks/install/${spellbookId}')"`}
                    onCopy={handleCopy} />
            </Stack>
        </DialogView>
    );
};
