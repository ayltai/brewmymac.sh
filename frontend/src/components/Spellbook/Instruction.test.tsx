import React from 'react';

import { render, } from '../../utils/test';
import { Instruction, } from './Instruction';

describe('<Instruction />', () => {
    it('renders correctly', () => expect(render(
        <Instruction
            open
            spellbookId='dummy' />
    )).toMatchSnapshot());

    it('renders instructions correctly', () => expect(render(
        <Instruction
            open
            spellbookId='dummy' />,
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
