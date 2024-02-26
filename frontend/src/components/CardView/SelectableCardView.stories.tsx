import { Settings, } from '@mui/icons-material';
import { Box, Link, Stack, Typography, } from '@mui/material';
import type { Meta, StoryObj, } from '@storybook/react';
import React, { useState, } from 'react';

import { SelectableCardView, } from './SelectableCardView';
import { SelectableCardViewProps, } from './SelectableCardView.types';

const meta : Meta<typeof SelectableCardView> = {
    component : SelectableCardView,
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        selected   : {
            description : 'Whether the card is selected.',
        },
        color      : {
            description : 'Color of the card. Defaults to `inherit`.',
        },
        action     : {
            description : 'The primary action to show in the action area.',
        },
        actionText : {
            description : 'Text to show in the action area.',
        },
        actionIcon : {
            description : 'Icon to show in the action area.',
        },
        children   : {
            description : 'The detailed content of the component',
        },
        onChange   : {
            description : 'Function to call when the card selection state is changed.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof SelectableCardView>;

const StatefulSelectableCardView = (props : SelectableCardViewProps) => {
    const [ selected, setSelected, ] = useState(false);

    const handleChange = (newValue : boolean) => setSelected(newValue);

    return (
        <SelectableCardView
            {...props}
            selected={selected}
            onChange={handleChange} />
    );
};

const description : string = 'Explain more about the topic shown in the headline and subheader through supporting text.';
const infoUrl     : string = 'https://nodejs.org';

export const Default : Story = {
    args   : {
        description,
        color    : 'primary',
        title    : 'Headline',
        subtitle : 'Subheader',
        children : (
            <Stack spacing={2}>
                <Box>
                    <Typography
                        variant='h5'
                        fontWeight='bold'>
                        Description
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant='h5'
                        fontWeight='bold'>
                        Website
                    </Typography>
                    <Link
                        href={infoUrl}
                        target='_blank'>
                        <Typography>
                            {infoUrl}
                        </Typography>
                    </Link>
                </Box>
            </Stack>
        ),
    },
    render : args => <StatefulSelectableCardView {...args} />,
};

export const WithAction : Story = {
    args : {
        ...Default.args,
        actionText : 'Configure',
        actionIcon : <Settings />,
    },
};
