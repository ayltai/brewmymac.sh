import React from 'react';

import { render, } from '../../utils/test';
import { SpellbookInstruction, } from './Instruction';

describe('<Instruction />', () => {
    it('renders correctly', () => expect(render(
        <SpellbookInstruction
            open={true}
            transactionId='dummy' />
    )).toMatchSnapshot());

    it('renders instructions correctly', () => expect(render(
        <SpellbookInstruction
            open={true}
            transactionId='dummy' />,
        {
            spellbook : {
                tweaks : [
                    {
                        id         : '1',
                        name       : 'Magic',
                        parameters : [
                            'Disable',
                        ],
                        types      : [
                            'boolean',
                        ],
                        values     : [
                            true,
                        ],
                    },
                ],
            },
        }
    )).toMatchSnapshot());
});
