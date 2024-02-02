import type { Meta, StoryObj, } from '@storybook/react';
import React, { useState, } from 'react';

import { StyledButton, } from '../StyledButton';
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

export const Default : Story = {
    args   : {},
    render : args => <StatefulSelectableCardView {...args} />,
};

Default.args = {
    title       : 'Headline',
    subtitle    : 'Subheader',
    description : 'Explain more about the topic shown in the headline and subheader through supporting text.',
};

export const WithButtons : Story = {
    args : {
        ...Default.args,
        children : [
            <StyledButton
                key='1'
                variant='outlined'>
                Action 1
            </StyledButton>,
            <StyledButton
                key='2'
                variant='contained'>
                Action 2
            </StyledButton>,
        ],
    },
};
