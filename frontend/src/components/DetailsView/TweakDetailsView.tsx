import { Divider, Stack, } from '@mui/material';
import React, { ComponentType, } from 'react';

import { DynamicTypedInput, } from '../DynamicTypedInput';
import { DetailsView, } from './DetailsView';
import type { DetailsViewProps, } from './DetailsView.types';
import type { TweakDetailsViewProps, } from './TweakDetailsView.types';

const withDynamicTypedInputs = (Component : ComponentType<DetailsViewProps>) => {
    const ComponentWithDynamicTypedInputs : (props : TweakDetailsViewProps) => JSX.Element = (props : TweakDetailsViewProps) => {
        const { parameters, types, values, onChange, ...rest } = props;

        return (
            <Component {...rest}>
                <Divider />
                <Stack
                    width='100%'
                    spacing={2}>
                    {parameters.map((parameter, index) => {
                        const handleChange = (value? : string | number | boolean) => {
                            if (onChange) onChange(parameter, value);
                        };

                        return (
                            <DynamicTypedInput
                                key={parameter}
                                title={parameter}
                                type={types[index]}
                                value={values[index]}
                                onChange={handleChange} />
                        );
                    })}
                </Stack>
            </Component>
        );
    };

    return ComponentWithDynamicTypedInputs;
};

export const TweakDetailsView = withDynamicTypedInputs(DetailsView);
