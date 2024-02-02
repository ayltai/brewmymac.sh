import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

import type { Tweak, } from '../models';

export interface SpellbookState {
    tweaks : Tweak[],
};

const initialState : SpellbookState = {
    tweaks : [],
};

export const spellbookSlice = createSlice({
    initialState,
    name     : 'spellbook',
    reducers : {
        addTweak    : (state, action : PayloadAction<Tweak>) => ({
            ...state,
            tweaks : [
                ...state.tweaks,
                action.payload,
            ].sort((a, b) => a.name.localeCompare(b.name)),
        }),
        removeTweak : (state, action : PayloadAction<Tweak>) => ({
            ...state,
            tweaks : state.tweaks.filter(tweak => tweak.id !== action.payload.id),
        }),
        resetTweaks : () => initialState,
        setTweaks   : (state, action : PayloadAction<Tweak[]>) => ({
            ...state,
            tweaks : action.payload,
        }),
        updateTweak : (state, action : PayloadAction<Tweak>) => ({
            ...state,
            tweaks : state.tweaks.filter(tweak => tweak.id !== action.payload.id).concat(action.payload).sort((a, b) => a.name.localeCompare(b.name)),
        }),
    },
});

export const { addTweak, removeTweak, resetTweaks, setTweaks, updateTweak, } = spellbookSlice.actions;

export const spellbookReducer = spellbookSlice.reducer;
