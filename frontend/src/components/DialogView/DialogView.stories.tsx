import { Typography, } from '@mui/material';
import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';

import { DialogView, } from './DialogView';

const meta : Meta<typeof DialogView> = {
    component : DialogView,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        title   : {
            description : 'The title of the dialog',
        },
        action  : {
            description : 'The primary action of the dialog',
        },
        onClose : {
            description : 'Function to call when the close button is clicked',
        },
    },
};

export default meta;

type Story = StoryObj<typeof DialogView>;

export const Default : Story = {
    args : {
        open     : true,
        title    : 'Dialog title',
        children : (
            <Typography>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Typography>
        ),
    },
};
