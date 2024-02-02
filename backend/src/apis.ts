import { promises, } from 'fs';
import path from 'path';
import { Request, Response, } from '@google-cloud/functions-framework';
import { render, } from 'ejs';
import { StatusCodes, } from 'http-status-codes';

import { createRecipe, createSpellbook, getRecipe, getSpell, getSpellbook, getSpells, } from './models';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getHealthApi = (request : Request, response : Response) => response.set('Content-Type', 'text/plain').status(StatusCodes.OK).send('UP');

export const createRecipeApi = async (request : Request, response : Response) => {
    if (request.body) {
        response.set('Content-Type', 'text/plain').status(StatusCodes.CREATED).send(await createRecipe(request.body));
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const getRecipeApi = async (request : Request, response : Response) => {
    const { id, } : { id? : string, } = request.params;

    if (id) {
        const recipe = await getRecipe(id);
        if (recipe) {
            response.set('Content-Type', 'application/json').status(StatusCodes.OK).send(recipe);
        } else {
            response.status(StatusCodes.NOT_FOUND).send();
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const getRecipeScriptApi = async (request : Request, response : Response) => {
    const { id, } : { id? : string, } = request.params;

    if (id) {
        const recipe = await getRecipe(id);
        if (recipe) {
            const template = (await promises.readFile(path.join(process.cwd(), 'data/recipe.sh.ejs'))).toString();

            const script = render(template, {
                ingredients : recipe.ingredients,
            });

            response.set('Content-Type', 'text/plain').status(StatusCodes.OK).send(script);
        } else {
            response.status(StatusCodes.NOT_FOUND).send();
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const createSpellbookApi = async (request : Request, response : Response) => {
    if (request.body) {
        response.set('Content-Type', 'text/plain').status(StatusCodes.CREATED).send(await createSpellbook(request.body));
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const getSpellbookApi = async (request : Request, response : Response) => {
    const { id, } : { id? : string, } = request.params;

    if (id) {
        const spellbook = await getSpellbook(id);
        if (spellbook) {
            response.set('Content-Type', 'application/json').status(StatusCodes.OK).send(spellbook);
        } else {
            response.status(StatusCodes.NOT_FOUND).send();
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getSpellsApi = async (request : Request, response : Response) => response.set('Content-Type', 'application/json').status(StatusCodes.OK).send(await getSpells());

export const getSpellApi = async (request : Request, response : Response) => {
    const { id, } : { id? : string, } = request.params;

    if (id) {
        const spell = await getSpell(id);
        if (spell) {
            response.set('Content-Type', 'application/json').status(StatusCodes.OK).send(spell);
        } else {
            response.status(StatusCodes.NOT_FOUND).send();
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const getSpellbookScriptApi = async (request : Request, response : Response) => {
    const { id, } : { id? : string, } = request.params;

    if (id) {
        const spellbook = await getSpellbook(id);
        if (spellbook) {
            const template = (await promises.readFile(path.join(process.cwd(), 'data/spellbook.sh.ejs'))).toString();

            const script = render(template, {
                tweaks : spellbook.tweaks,
            });

            response.set('Content-Type', 'text/plain').status(StatusCodes.OK).send(script);
        } else {
            response.status(StatusCodes.NOT_FOUND).send();
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};
