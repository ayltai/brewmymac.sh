import React from 'react';

import { render, } from '../utils/test';
import { StyledButton, } from './StyledButton';

describe('<StyledButton />', () => {
    it('renders correctly', () => expect(render(<StyledButton />)).toMatchSnapshot());
});
