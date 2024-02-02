import { Check, DeleteForever, } from '@mui/icons-material';
import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';

import { CheckButton, } from './CheckButton';

const meta : Meta<typeof CheckButton> = {
    component : CheckButton,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        checked       : {
            description : 'The checked state of the button',
        },
        checkedText   : {
            description : 'The text to show when the button is in the checked state',
        },
        checkedIcon   : {
            description : 'The icon to show when the button is in the checked state',
        },
        uncheckText   : {
            description : 'The text to show when the button is in the checked state and is hovered',
        },
        uncheckedText : {
            description : 'The text to show when the button is in the unchecked state',
        },
        uncheckedIcon : {
            description : 'The icon to show when the button is in the unchecked state',
        },
        onChange      : {
            description : 'Function to call when the checked state is changed',
        },
    },
};

export default meta;

type Story = StoryObj<typeof CheckButton>;

export const Default : Story = {
    args : {
        checkedText   : 'Selected',
        checkedIcon   : <Check />,
        uncheckText   : 'Remove',
        uncheckedText : 'Select',
        uncheckedIcon : <DeleteForever />,
    },
};
