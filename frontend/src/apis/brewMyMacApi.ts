import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

import { API_ENDPOINT, API_MAX_RETRIES, } from '../constants';
import type { Ingredient, Tweak, } from '../models';

export const brewMyMacApi = createApi({
    reducerPath : 'brewMyMacApi',
    baseQuery   : fetchBaseQuery({
        baseUrl : import.meta.env.DEV ? 'http://localhost:8080' : API_ENDPOINT,
    }),
    endpoints   : build => ({
        addRecipe    : build.mutation<string, Ingredient[]>({
            query             : ingredients => ({
                url             : '/recipes',
                method          : 'POST',
                body            : ingredients,
                responseHandler : response => response.text(),
            }),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
        addSpellbook : build.mutation<string, Tweak[]>({
            query             : tweaks => ({
                url             : '/spellbooks',
                method          : 'POST',
                body            : tweaks,
                responseHandler : response => response.text(),
            }),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
        getSpells    : build.query<Tweak[], void>({
            query             : () => '/spells',
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
    }),
});

export const { useAddRecipeMutation, useAddSpellbookMutation, useGetSpellsQuery, } = brewMyMacApi;
