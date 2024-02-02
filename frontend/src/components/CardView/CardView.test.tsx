import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { StyledButton, } from '../StyledButton';
import { CardView, } from './CardView';

const TITLE       = 'Headline';
const SUBTITLE    = 'Subheader';
const DESCRIPTION = 'Explain more about the topic shown in the headline and subheader through supporting text.';

describe('<CardView />', () => {
    it('renders without buttons correctly', () => expect(render(
        <CardView
            title={TITLE}
            subtitle={SUBTITLE}
            description={DESCRIPTION} />
    )).toMatchSnapshot());

    it('renders with buttons correctly', () => expect(render(
        <CardView
            title={TITLE}
            subtitle={SUBTITLE}
            description={DESCRIPTION}>
            <StyledButton key="1">Action 1</StyledButton>
            <StyledButton key="2">Action 2</StyledButton>
        </CardView>
    )).toMatchSnapshot());

    it('triggers onClick when the card is clicked', () => {
        const handleClick = vi.fn();

        const { getByRole, } = render(
            <CardView
                title={TITLE}
                subtitle={SUBTITLE}
                description={DESCRIPTION}
                onClick={handleClick} />
        );

        fireEvent.click(getByRole('button'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
