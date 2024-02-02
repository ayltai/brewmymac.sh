import React from 'react';

import { fireEvent, render, } from '../utils/test';
import { ThemeModeToggle, } from './ThemeModeToggle';

const useDispatchMock = vi.fn();

vi.mock('react-redux', async () => ({
    ...(await vi.importActual('react-redux')),
    useDispatch : () => useDispatchMock,
}));

describe('<ThemeModeToggle />', () => {
    beforeEach(() => useDispatchMock.mockClear());

    it('renders correctly', () => expect(render(<ThemeModeToggle />)).toMatchSnapshot());

    it('toggles theme mode', () => {
        const { getByRole, } = render(<ThemeModeToggle />, {
            preference : {
                themeMode : 'light',
            },
        });

        fireEvent.click(getByRole('button'));

        expect(useDispatchMock).toHaveBeenCalledTimes(1);
        expect(useDispatchMock).toHaveBeenCalledWith({
            type    : 'preference/setThemeMode',
            payload : 'dark',
        });
    });
});
