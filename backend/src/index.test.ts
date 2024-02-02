import { Request, Response, } from '@google-cloud/functions-framework';
import { StatusCodes, } from 'http-status-codes';

import { index, } from './index';

const TIMEOUT : number = 30000;

describe('recipe', () => {
    beforeEach(async () => await import('./index'));

    it('returns status code 400 if recipeId is missing', async () => {
        const request = {
            method : 'GET',
            query  : {},
        } as Request;

        let statusCode : number | undefined;
        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);

    });

    it('returns status code 404 if recipe is not found', async () => {
        const request = {
            method : 'GET',
            query  : {
                recipeId : '1',
            },
        } as unknown as Request;

        let statusCode : number | undefined;
        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.NOT_FOUND);
    }, TIMEOUT);

    it('returns status code 400 if body is missing', async () => {
        const request = {
            method : 'POST',
        } as unknown as Request;

        let statusCode : number | undefined;
        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 201 if recipe is created', async () => {
        const request = {
            method : 'POST',
            body   : [],
        } as unknown as Request;

        let statusCode : number | undefined;
        let result     : string | undefined;
        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : (value : string) => {
                result = value;

                return response;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.CREATED);
        expect(result).not.toBeUndefined();
        expect(result!.length).toBeGreaterThan(0);

        request.method = 'GET';

        request.query = {
            recipeId : result!,
        };

        let recipe : Record<any, any> | undefined;

        response.send = (value : object | undefined) => {
            recipe = value;

            return response;
        };

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
        expect(recipe).not.toBeUndefined();
        expect(recipe!.id).toEqual(result);
    });

    it('returns status code 400 when days is missing', async () => {
        const request = {
            method : 'DELETE',
            query  : {},
        } as unknown as Request;

        let statusCode : number | undefined;
        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 200 when recipe is deleted', async () => {
        const request = {
            method : 'DELETE',
            query  : {
                days : '0',
            },
        } as unknown as Request;

        let statusCode : number | undefined;
        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
    });

    it('returns status code 204 when HTTP method is OPTIONS', async () => {
        const request = {
            method : 'OPTIONS',
        } as unknown as Request;

        let statusCode : number | undefined;
        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.NO_CONTENT);
    });

    it('returns status code 405 when HTTP method is not GET, POST, DELETE or OPTIONS', async () => {
        const request = {
            method : 'PATCH',
        } as unknown as Request;

        let statusCode : number | undefined;
        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await index(request, response);

        expect(statusCode).toBe(StatusCodes.METHOD_NOT_ALLOWED);
    });
});
