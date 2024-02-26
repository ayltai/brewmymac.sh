import Close from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import React, { FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { DialogViewProps, } from './DialogView.types';

/**
 * A dialog that can be used to inform users about a task or show critical information, or requires decisions.
 * @param open Whether the dialog is open
 * @param title The title of the dialog
 * @param action The primary action of the dialog
 * @param children The content of the component
 * @param onClose Function to call when the close button is clicked
 * @param rest Other props
 */
export const DialogView : FC<DialogViewProps> = ({
    open = false,
    title,
    action,
    children,
    onClose,
    ...rest
}) => {
    const { t, } = useTranslation();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            {...rest}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <IconButton
                sx={{
                    position : 'absolute',
                    right    : 8,
                    top      : 8,
                    color    : theme => theme.palette.grey[500],
                }}
                onClick={onClose}>
                <Close />
            </IconButton>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                {action}
                <Button onClick={onClose}>
                    {t('action.close')}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
