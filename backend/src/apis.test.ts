import { Request, Response, } from '@google-cloud/functions-framework';
import { StatusCodes, } from 'http-status-codes';

import { createRecipeApi, createSpellbookApi, getRecipeApi, getRecipeScriptApi, getSpellbookApi, getSpellbookScriptApi, getSpellApi, getSpellsApi, } from './apis';

const TIMEOUT : number = 30000;

describe('spellbook', () => {
    it('returns status code 400 if id is missing', async () => {
        const request = {
            method : 'GET',
            params : {},
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

        await getSpellbookApi(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 404 if spellbook is not found', async () => {
        const request = {
            method : 'GET',
            params : {
                id : '1',
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

        await getSpellbookApi(request, response);

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

        await createSpellbookApi(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 201 if spellbook is created', async () => {
        const request = {
            method : 'POST',
            body   : [],
        } as unknown as Request;

        let statusCode : number | undefined;
        let result     : string | Record<any, any> | undefined;

        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : (value : string | Record<any, any>) => {
                result = value;

                return response;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await createSpellbookApi(request, response);

        expect(statusCode).toBe(StatusCodes.CREATED);
        expect(result).not.toBeUndefined();

        request.method = 'GET';

        request.params = {
            id : result! as string,
        };

        await getSpellbookApi(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
        expect(result).not.toBeUndefined();
        expect((result! as Record<any, any>).id).toEqual(request.params.id);

        await getSpellbookScriptApi(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
        expect(result).not.toBeUndefined();
    }, TIMEOUT);
});

describe('spells', () => {
    it('returns status code 400 if id is missing', async () => {
        const request = {
            method : 'GET',
            params : {},
        } as Request;

        let statusCode : number | undefined;

        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set : (_key : string, _value : string) => response,
        } as Response;

        await getSpellApi(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 200 if spells are found', async () => {
        const request = {
            method : 'GET',
        } as unknown as Request;

        let statusCode : number | undefined;
        let result     : Record<any, any>[] | undefined;

        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : (value : Record<any, any>[] | undefined) => {
                result = value;

                return response;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set : (_key : string, _value : string) => response,
        } as Response;

        await getSpellsApi(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
        expect(result).not.toBeUndefined();
    }, TIMEOUT);
});

describe('recipe', () => {
    it('returns status code 400 if id is missing', async () => {
        const request = {
            method : 'GET',
            params : {},
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

        await getRecipeApi(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 404 if recipe is not found', async () => {
        const request = {
            method : 'GET',
            params : {
                id : '1',
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

        await getRecipeApi(request, response);

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

        await createRecipeApi(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 201 if recipe is created', async () => {
        const request = {
            method : 'POST',
            body   : [],
        } as unknown as Request;

        let statusCode : number | undefined;
        let result     : string | Record<any, any> | undefined;

        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : (value : string | Record<any, any>) => {
                result = value;

                return response;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await createRecipeApi(request, response);

        expect(statusCode).toBe(StatusCodes.CREATED);
        expect(result).not.toBeUndefined();
        expect(result!.length).toBeGreaterThan(0);

        request.method = 'GET';

        request.params = {
            id : result! as string,
        };

        await getRecipeApi(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
        expect(result).not.toBeUndefined();
        expect((result! as Record<any, any>).id).toEqual(request.params.id);

        await getRecipeScriptApi(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
        expect(result).not.toBeUndefined();
    }, TIMEOUT);
});
