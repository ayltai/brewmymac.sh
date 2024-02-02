import type { Meta, StoryObj, } from '@storybook/react';

import { DynamicTypedInput, } from './DynamicTypedInput';

const meta : Meta<typeof DynamicTypedInput> = {
    component : DynamicTypedInput,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        title : {
            description : 'The title of the component',
        },
        type  : {
            description : 'The type of the component',
        },
        value : {
            description : 'The value of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof DynamicTypedInput>;

export const Default : Story = {
    args : {
        title : 'Dynamic Typed Input',
        type  : 'boolean',
        value : true,
    },
};
