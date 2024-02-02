import React from 'react';

import { render, } from '../../utils/test';
import { Spellbook, } from './Spellbook';

describe('<Spellbook />', () => {
    it('renders correctly', () => expect(render(
        <Spellbook />,
        {
            spellbook : {
                tweaks : [
                    {
                        id          : '1',
                        name        : 'magic.1',
                        description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                        author      : 'BrewMyMac',
                        parameters  : [
                            'Disable',
                        ],
                        types       : [
                            'boolean',
                        ],
                        values      : [
                            'true',
                        ],
                    },
                    {
                        id          : '2',
                        name        : 'magic.2',
                        description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                        author      : 'BrewMyMac',
                        parameters  : [
                            'Name',
                            'Width',
                            'Height',
                        ],
                        types       : [
                            'string',
                            'number',
                            'number',
                        ],
                        values      : [
                            'Magic',
                            1920,
                            1024,
                        ],
                    },
                ],
            },
        }
    )).toMatchSnapshot());
});
