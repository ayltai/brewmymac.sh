import React from 'react';
import createFetchMock from 'vitest-fetch-mock';

import { fireEvent, render, waitFor, } from '../utils/test';
import cask from './cask.json';
import formula from './formula.json';
import { Packages, } from './Packages';

const fetch = createFetchMock(vi);
fetch.enableMocks();

describe('<Packages />', () => {
    it('renders correctly', () => expect(render(<Packages />)).toMatchSnapshot());

    it('searches packages', async () => {
        fetch.mockIf('https://formulae.brew.sh/api/formula.json', request => {
            if (request.method === 'GET') return {
                status  : 200,
                body    : JSON.stringify(formula),
                headers : {
                    'Content-Type' : 'application/json',
                },
            };

            return {
                status : 501,
            };
        }).mockIf('https://formulae.brew.sh/api/cask.json', request => {
            if (request.method === 'GET') return {
                status  : 200,
                body    : JSON.stringify(cask),
                headers : {
                    'Content-Type' : 'application/json',
                },
            };

            return {
                status : 501,
            };
        });

        const { getAllByText, getByRole, } = render(<Packages />);

        fireEvent.change(getByRole('textbox'), {
            target : {
                value : 'spotify',
            },
        });

        await waitFor(() => {
            expect(getAllByText(value => value.startsWith('spotify') || value.startsWith('Spotify')).length).toBeGreaterThan(1);
        }, {
            timeout : 10000,
        });
    });
});
