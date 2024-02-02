import type { Meta, StoryObj, } from '@storybook/react';

import { Loading, } from './Loading';

const meta : Meta<typeof Loading> = {
    component : Loading,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        show     : {
            description : 'Whether to show the component',
        },
        children : {
            description : 'The content of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default : Story = {
    args : {
        show     : true,
        children : 'Loading...',
    },
    parameters : {
        docs : {
            story : {
                inline       : false,
                iframeHeight : 200,
            },
        },
    },
};
