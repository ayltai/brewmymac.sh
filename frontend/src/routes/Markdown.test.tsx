import React from 'react';
import createFetchMock from 'vitest-fetch-mock';

import { render, } from '../utils/test';
import disclaimer from './disclaimer.json';
import { Markdown, } from './Markdown';

const fetch = createFetchMock(vi);
fetch.enableMocks();

describe('<Markdown />', () => {
    it('renders correctly', () => {
        fetch.mockIf(request => request.url.startsWith('https://cdn.contentful.com'), request => {
            if (request.method === 'GET') return {
                status  : 200,
                body    : JSON.stringify(disclaimer),
                headers : {
                    'Content-Type' : 'application/json',
                },
            };

            return {
                status : 501,
            };
        });

        expect(render(<Markdown id='5JIZ4p8HrhBkuF5NI5F0dH' />)).toMatchSnapshot();
    });
});
