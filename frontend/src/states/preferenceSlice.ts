import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import i18next from 'i18next';

import { handleError, } from '../utils';

type PreferenceState = {
    locale  : string,
    product : 'packages' | 'tweaks',
};

const initialState : PreferenceState = {
    locale  : i18next.language || 'en',
    product : 'packages',
};

export const preferenceSlice = createSlice({
    initialState,
    name   : 'preference',
    reducers : {
        setLocale  : (state, action : PayloadAction<string>) => {
            state.locale = action.payload;

            i18next.changeLanguage(action.payload).catch(handleError);
        },
        setProduct : (state, action : PayloadAction<'packages' | 'tweaks'>) => ({
            ...state,
            product : action.payload,
        }),
    },
});

export const { setLocale, setProduct, } = preferenceSlice.actions;

export const preferenceReducer = preferenceSlice.reducer;
