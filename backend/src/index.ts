import { http, HttpFunction, Request, Response, } from '@google-cloud/functions-framework';
import { StatusCodes, } from 'http-status-codes';

import { createRecipe, deleteRecipe, getRecipe, } from './models';

const ALLOWED_ORIGIN : string = process.env.NODE_ENV === 'production' ? 'https://*-brewmymac.cloudfunctions.net' : 'http://localhost:3000';

const handleGet = async (request : Request, response : Response) => {
    if (request.query.recipeId) {
        const recipe = await getRecipe(request.query.recipeId as string);
        if (recipe) {
            response.status(StatusCodes.OK).send(recipe);
        } else {
            response.status(StatusCodes.NOT_FOUND).send();
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

const handlePost = async (request : Request, response : Response) => {
    if (request.body) {
        response.status(StatusCodes.CREATED).send(await createRecipe(request.body));
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

const handleDelete = async (request : Request, response : Response) => {
    if (request.query.days) {
        const result = await deleteRecipe(parseInt(request.query.days as string, 10));

        response.status(result ? StatusCodes.OK : StatusCodes.INTERNAL_SERVER_ERROR).send();
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const index : HttpFunction = async (request, response) => {
    response.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);

    switch (request.method) {
        case 'GET':
            await handleGet(request, response);
            break;

        case 'POST':
            await handlePost(request, response);
            break;

        case 'DELETE':
            await handleDelete(request, response);
            break;

        case 'OPTIONS':
            response.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
                .set('Access-Control-Allow-Methods', 'GET, POST, DELETE')
                .set('Access-Control-Allow-Headers', 'Content-Type')
                .set('Access-Control-Max-Age', '300')
                .status(StatusCodes.NO_CONTENT)
                .send();

            break;

        default:
            response.status(StatusCodes.METHOD_NOT_ALLOWED).send();

            break;
    }
};

http('index', index);
