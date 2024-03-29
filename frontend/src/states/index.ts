import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { appStoreApi, brewMyMacApi, contentfulApi, homebrewApi, } from '../apis';
import { recipeReducer, } from './recipeSlice';
import { preferenceReducer, } from './preferenceSlice';
import { spellbookReducer, } from './spellbookSlice';

const createNoopStorage = () => ({
    getItem    : () => Promise.resolve(null),
    setItem    : (_key : string, value : any) => Promise.resolve(value),
    removeItem : () => Promise.resolve(),
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const makeStore = () => configureStore({
    reducer    : persistReducer({
        storage,
        key       : 'root',
        blacklist : [
            appStoreApi.reducerPath,
            brewMyMacApi.reducerPath,
            homebrewApi.reducerPath,
        ],
    }, combineReducers({
        recipe                        : recipeReducer,
        preference                    : preferenceReducer,
        spellbook                     : spellbookReducer,
        [ appStoreApi.reducerPath  ]  : appStoreApi.reducer,
        [ brewMyMacApi.reducerPath ]  : brewMyMacApi.reducer,
        [ contentfulApi.reducerPath ] : contentfulApi.reducer,
        [ homebrewApi.reducerPath  ]  : homebrewApi.reducer,
    })),
    middleware : getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck : {
            ignoredActions : [
                FLUSH,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
                REHYDRATE,
            ],
        },
    }).concat(appStoreApi.middleware, brewMyMacApi.middleware, contentfulApi.middleware, homebrewApi.middleware),
    devTools   : import.meta.env.DEV,
});

export const store     = makeStore();
export const persistor = persistStore(store);

export type AppState    = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { preferenceReducer, setLocale, setProduct, setThemeMode, } from './preferenceSlice';
export { addIngredient, recipeReducer, removeIngredient, resetIngredients, setIngredients, } from './recipeSlice';
export { addTweak, removeTweak, resetTweaks, setTweaks, spellbookReducer, updateTweak, } from './spellbookSlice';
