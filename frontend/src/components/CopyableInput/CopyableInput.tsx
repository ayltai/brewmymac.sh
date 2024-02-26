import ContentCopy from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import styled from '@mui/material/styles/styled';
import React, { FC, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { CopyableInputProps, } from './CopyableInput.types';

const MonospaceInput = styled(OutlinedInput)({
    paddingLeft  : '0.5rem',
    paddingRight : '1.5rem',
    borderRadius : '2rem',
    fontFamily   : 'monospace',
});

/**
 * An input field where the value can be copied to the clipboard.
 * @param value The value to copy
 * @param onCopy Function to call when the copy button is clicked
 * @param rest Other props
 */
export const CopyableInput : FC<CopyableInputProps> = ({
    value,
    onCopy,
    ...rest
}) => {
    const [ open, setOpen, ] = useState(false);

    const { t, } = useTranslation();

    const handleCopy = async () => {
        if (value) await navigator.clipboard.writeText(value);

        setOpen(true);

        if (onCopy) onCopy();
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <MonospaceInput
                {...rest}
                value={value}
                endAdornment={
                    <InputAdornment position='end'>
                        <Tooltip title={t('action.copy')}>
                            <IconButton
                                edge='end'
                                onClick={handleCopy}>
                                <ContentCopy />
                            </IconButton>
                        </Tooltip>
                    </InputAdornment>
                } />
            <Snackbar
                open={open}
                anchorOrigin={{
                    horizontal : 'center',
                    vertical   : 'bottom',
                }}
                onClose={handleClose}
                autoHideDuration={2500}
                message={t('common.copied')} />
        </>
    );
};
