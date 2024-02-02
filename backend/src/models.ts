import * as admin from 'firebase-admin';
import { Collection, getRepository, initialize, } from 'fireorm';
import { nanoid, } from 'nanoid';

import { handleError, } from './utils';

admin.initializeApp({
    credential : admin.credential.applicationDefault(),
});

initialize(admin.firestore());

type Ingredient = {
    id     : string,
    source : 'Homebrew' | 'Homebrew (Cask)' | 'App Store',
};

@Collection()
class Recipe {
    id           : string       = nanoid();
    creationDate : Date         = new Date();
    ingredients  : Ingredient[] = [];
}

@Collection()
export class Spell {
    id           : string                              = '';
    name         : string                              = '';
    description? : string;
    imageUrl?    : string;
    infoUrl?     : string;
    author?      : string;
    parameters   : string[]                            = [];
    types        : ('boolean' | 'number' | 'string')[] = [];
    values       : (boolean | number | string)[]       = [];
    impact?      : 'Dock' | 'Finder' | 'SystemUIServer';
    privileged?  : boolean                             = false;
    sipInvolved? : boolean                             = false;
    category?    : string;
}

type Tweak = {
    id : string,
};

@Collection()
export class Spellbook {
    id           : string       = nanoid();
    creationDate : Date         = new Date();
    tweaks       : Tweak[]      = [];
}

const recipeRepository = getRepository(Recipe);

export const createRecipe = async (ingredients : Ingredient[]) => {
    const recipe = new Recipe();
    recipe.ingredients = ingredients.map(ingredient => ({
        ...ingredient,
        id : ingredient.id.substring(ingredient.id.indexOf('/') + 1),
    }));

    const recipeDocument = await recipeRepository.create(recipe);
    return recipeDocument.id;
};

export const getRecipe = async (recipeId : string) => {
    try {
        return await recipeRepository.findById(recipeId);
    } catch (error) {
        handleError(error);

        return Promise.resolve();
    }
};

const spellRepository = getRepository(Spell);

export const createSpell = async (spell : Spell) => await spellRepository.create(spell);

export const getSpell = async (spellId : string) => {
    try {
        return await spellRepository.findById(spellId);
    } catch (error) {
        handleError(error);

        return Promise.resolve();
    }
};

export const getSpells = async () => {
    try {
        return await spellRepository.find();
    } catch (error) {
        handleError(error);

        return Promise.resolve([]);
    }
};

const spellbookRepository = getRepository(Spellbook);

export const createSpellbook = async (tweaks : Tweak[]) => {
    const spellbook = new Spellbook();
    spellbook.tweaks = tweaks;

    const spellbookDocument = await spellbookRepository.create(spellbook);
    return spellbookDocument.id;
};

export const getSpellbook = async (spellbookId : string) => {
    try {
        return await spellbookRepository.findById(spellbookId);
    } catch (error) {
        handleError(error);

        return Promise.resolve();
    }
};
