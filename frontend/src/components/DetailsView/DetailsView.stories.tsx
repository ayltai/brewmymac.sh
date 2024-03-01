import type { Meta, StoryObj, } from '@storybook/react';

import { DetailsView, } from './DetailsView';

const meta : Meta<typeof DetailsView> = {
    component : DetailsView,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        description : {
            description : 'The description of the component',
        },
        infoUrl     : {
            description : 'The info URL of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof DetailsView>;

export const Default : Story = {
    args : {
        description : 'The description of the component',
        infoUrl     : 'https://example.com',
    },
};
