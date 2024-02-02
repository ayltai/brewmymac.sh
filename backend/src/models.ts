import * as admin from 'firebase-admin';
import { Collection, getRepository, initialize, } from 'fireorm';
import { nanoid, } from 'nanoid';

admin.initializeApp();
initialize(admin.firestore());

@Collection()
class Recipe {
    id           : string       = nanoid();
    creationDate : Date         = new Date();
    ingredients  : Ingredient[] = [];
}

type Ingredient = {
    id     : string,
    source : 'Homebrew' | 'Homebrew (Cask)' | 'App Store',
};

const recipeRepository = getRepository(Recipe);

export const createRecipe = async (ingredients : Ingredient[]) => {
    const recipe = new Recipe();
    recipe.ingredients = ingredients;

    const recipeDocument = await recipeRepository.create(recipe);
    return recipeDocument.id;
};

export const getRecipe = async (recipeId : string) => {
    try {
        return await recipeRepository.findById(recipeId);
    } catch (error) {
        console.error(error);

        return Promise.resolve();
    }
};

export const deleteRecipe = async (days : number) => {
    const recipes = await recipeRepository.whereLessThan('creationDate', new Date(new Date().getTime() - days * 24 * 60 * 60 * 1000)).find();
    return recipes.every(async recipe => {
        try {
            await recipeRepository.delete(recipe.id);

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    });
};
