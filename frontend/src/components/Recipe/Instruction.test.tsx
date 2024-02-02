import React from 'react';

import { render, } from '../../utils/test';
import { Instruction, } from './Instruction';

describe('<Instruction />', () => {
    it('renders correctly', () => expect(render(
        <Instruction
            open
            recipeId='dummy' />
    )).toMatchSnapshot());

    it('renders instructions correctly', () => expect(render(
        <Instruction
            open
            recipeId='dummy' />,
        {
            recipe : {
                ingredients : [
                    {
                        id     : '1',
                        name   : 'Spotify',
                        source : 'App Store',
                    },
                ],
            },
        }
    )).toMatchSnapshot());
});
