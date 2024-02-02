import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { ShoppingCart, } from './ShoppingCart';

const PRELOADED_STATE = {
    preference : {
        locale  : 'en',
        product : 'packages',
    },
    recipe     : {
        ingredients : [],
    },
    spellbook  : {
        tweaks : [],
    },
};

describe('<ShoppingCart />', () => {
    it('renders correctly', () => {
        const { getByText, } = render(<ShoppingCart />, {
            preloadedState : {
                ...PRELOADED_STATE,
                recipe : {
                    ...PRELOADED_STATE.recipe,
                    ingredients : [
                        {
                            id     : '1',
                            name   : 'dummy',
                            source : 'Homebrew',
                        },
                    ],
                },
            },
        });

        expect(getByText('1')).toBeDefined();
    });

    it('triggers onClick', () => {
        const onClick = vi.fn();

        const { getByRole, } = render(<ShoppingCart onClick={onClick} />, {
            preloadedState : PRELOADED_STATE,
        });

        fireEvent.click(getByRole('button'));

        expect(onClick).toHaveBeenCalled();
    });
});
