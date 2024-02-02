import type { Meta, StoryObj, } from '@storybook/react';

import { TopAppBar, } from './TopAppBar';

const meta : Meta<typeof TopAppBar> = {
    component : TopAppBar,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        onExpand : {
            description : 'Function to call when the expand button is clicked',
        },
    },
};

export default meta;

type Story = StoryObj<typeof TopAppBar>;

export const Default : Story = {
    args : {
    },
};
