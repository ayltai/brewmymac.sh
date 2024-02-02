import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

import type { Ingredient, } from '../models';

export type CookbookState = {
    ingredients : Ingredient[],
};

const initialState : CookbookState = {
    ingredients : [],
};

const cookbookSlice = createSlice({
    initialState,
    name     : 'cookbook',
    reducers : {
        addIngredient    : (state, action : PayloadAction<Ingredient>) => ({
            ...state,
            ingredients : [
                ...state.ingredients,
                action.payload,
            ].sort((a, b) => a.name.localeCompare(b.name)),
        }),
        removeIngredient : (state, action : PayloadAction<Ingredient>) => ({
            ...state,
            ingredients : state.ingredients.filter(ingredient => ingredient.id !== action.payload.id || ingredient.source !== action.payload.source),
        }),
        setIngredients   : (state, action : PayloadAction<Ingredient[]>) => ({
            ...state,
            ingredients : action.payload,
        }),
        resetIngredients : () => initialState,
    },
});

export const { addIngredient, removeIngredient, resetIngredients, setIngredients, } = cookbookSlice.actions;

export const cookbookReducer = cookbookSlice.reducer;
