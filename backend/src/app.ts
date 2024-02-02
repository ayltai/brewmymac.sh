import SwaggerParser from '@apidevtools/swagger-parser';
import { ErrorReporting, } from '@google-cloud/error-reporting';
import cors from 'cors';
import express from 'express';
import { connector, } from 'swagger-routes-express';
import swaggerUi from 'swagger-ui-express';

import { createRecipeApi, createSpellbookApi, getHealthApi, getRecipeApi, getRecipeScriptApi, getSpellApi, getSpellbookScriptApi, getSpellbookApi, getSpellsApi, } from './apis';
import { createSpell, getSpells, } from './models';
import { spellbook, } from './spellbook';

const app = express().disable('x-powered-by');

if (process.env.NODE_ENV === 'production') {
    const errors = new ErrorReporting();

    app.use(errors.express);
}

app.use(cors({
    origin         : process.env.NODE_ENV === 'production' ? 'https://brewmymac.sh' : '*',
    methods        : [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'OPTIONS',
        'HEAD',
    ],
    allowedHeaders : [
        'Content-Type',
        'Content-Length',
        'Accept',
        'Origin',
    ],
}));

new SwaggerParser()
    .validate('./docs/openapi.yaml')
    .then(async definition => {
        const connect = connector({
            createRecipeApi,
            createSpellbookApi,
            getHealthApi,
            getRecipeApi,
            getRecipeScriptApi,
            getSpellApi,
            getSpellbookApi,
            getSpellbookScriptApi,
            getSpellsApi,
        }, definition);

        app.use('/docs', swaggerUi.serve, swaggerUi.setup(definition));

        connect(app);

        if ((await getSpells()).length === 0) {
            for (const tweak of spellbook) await createSpell(tweak);
        }
    })
    .catch(console.error);

export default app;
