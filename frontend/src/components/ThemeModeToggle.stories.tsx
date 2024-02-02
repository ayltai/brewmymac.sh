import type { Meta, StoryObj, } from '@storybook/react';

import { ThemeModeToggle, } from './ThemeModeToggle';

const meta : Meta<typeof ThemeModeToggle> = {
    component : ThemeModeToggle,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
    },
};

export default meta;

type Story = StoryObj<typeof ThemeModeToggle>;

export const Default : Story = {
    args : {
    },
};
