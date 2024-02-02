import { Stack, Switch, TextField, Typography, } from '@mui/material';
import React, { FC, } from 'react';

import type { DynamicTypedInputProps, } from './DynamicTypedInput.types';

/**
 * An input that can be used to enter a boolean, number, or string value.
 * @param title Title of the input
 * @param type Type of the input
 * @param value Value of the input
 * @param onChange Function to call when the input is changed
 * @param rest Other props
 */
export const DynamicTypedInput : FC<DynamicTypedInputProps> = ({
    title,
    type,
    value,
    onChange,
    ...rest
}) => {
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            switch (type) {
                case 'boolean':
                    onChange(event.target.checked);
                    break;

                case 'number':
                    onChange(Number(event.target.value));
                    break;

                case 'string':
                    onChange(event.target.value);
                    break;

                default:
                    break;
            }
        }
    };

    return (
        <Stack
            spacing={1}
            display='flex'
            direction='row'
            alignItems='center'
            {...rest}>
            <Typography flexGrow={1}>
                {title}
            </Typography>
            {type === 'boolean' && (
                <Switch
                    checked={value as boolean}
                    onChange={handleChange} />
            )}
            {type === 'number' && (
                <TextField
                    value={value as number}
                    onChange={handleChange} />
            )}
            {type === 'string' && (
                <TextField
                    value={value as string}
                    onChange={handleChange} />
            )}
        </Stack>
    );
};
