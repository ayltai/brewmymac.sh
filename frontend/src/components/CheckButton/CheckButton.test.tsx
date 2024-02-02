import { CheckCircle, DeleteForever, } from '@mui/icons-material';
import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { CheckButton, } from './CheckButton';

describe('<CheckButton />', () => {
    it('renders correctly', () => expect(render(
        <CheckButton
            checkedIcon={<CheckCircle />}
            uncheckedIcon={<DeleteForever />} />
    )).toMatchSnapshot());

    it('triggers onChange when clicked', () => {
        const handleChange = vi.fn();

        const { getByRole, } = render(
            <CheckButton
                checkedIcon={<CheckCircle />}
                uncheckedIcon={<DeleteForever />}
                onChange={handleChange} />
        );

        fireEvent.click(getByRole('checkbox'));

        expect(handleChange).toBeCalledTimes(1);
        expect(handleChange).toBeCalledWith(true);
    });
});
