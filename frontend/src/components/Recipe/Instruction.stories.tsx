import type { Meta, StoryObj, } from '@storybook/react';

import { Instruction, } from './Instruction';

const meta : Meta<typeof Instruction> = {
    component : Instruction,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        open    : {
            description : 'Whether the dialog is open',
        },
        onClose : {
            description : 'Function to call when the close button is clicked',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Instruction>;

export const Default : Story = {
    args : {
        open : true,
    },
};
