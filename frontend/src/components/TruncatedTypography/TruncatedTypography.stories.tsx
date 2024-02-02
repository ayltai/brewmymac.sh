import type { Meta, StoryObj, } from '@storybook/react';

import { TruncatedTypography, } from './TruncatedTypography';

const meta : Meta<typeof TruncatedTypography> = {
    component : TruncatedTypography,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        lines : {
            description : 'Number of lines to show',
        },
    },
};

export default meta;

type Story = StoryObj<typeof TruncatedTypography>;

export const Default : Story = {
    args : {
    },
};
