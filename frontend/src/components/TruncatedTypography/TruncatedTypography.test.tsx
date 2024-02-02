import React from 'react';

import { render, } from '../../utils/test';
import { TruncatedTypography, } from './TruncatedTypography';

describe('<TruncatedTypography />', () => {
    it('renders correctly', () => expect(render(<TruncatedTypography />)).toMatchSnapshot());
});
