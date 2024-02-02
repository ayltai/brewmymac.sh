import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { appStoreApi, homebrewApi, } from '../apis';
import { cookbookReducer, } from './cookbookSlice';
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
            homebrewApi.reducerPath,
        ],
    }, combineReducers({
        cookbook                    : cookbookReducer,
        preference                  : preferenceReducer,
        spellbook                   : spellbookReducer,
        [ appStoreApi.reducerPath ] : appStoreApi.reducer,
        [ homebrewApi.reducerPath ] : homebrewApi.reducer,
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
    }).concat(appStoreApi.middleware, homebrewApi.middleware),
    devTools   : process.env.NODE_ENV !== 'production',
});

export const store     = makeStore();
export const persistor = persistStore(store);

export type AppState    = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { addIngredient, cookbookReducer, removeIngredient, resetIngredients, setIngredients, } from './cookbookSlice';
export { preferenceReducer, setLocale, setProduct, } from './preferenceSlice';
export { addTweak, removeTweak, resetTweaks, setTweaks, spellbookReducer, } from './spellbookSlice';
