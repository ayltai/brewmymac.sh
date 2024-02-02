import SwaggerParser from '@apidevtools/swagger-parser';
import { ErrorReporting, } from '@google-cloud/error-reporting';
import cors from 'cors';
import express from 'express';
import { connector, } from 'swagger-routes-express';
import swaggerUi from 'swagger-ui-express';

import { createRecipeApi, createSpellbookApi, getRecipeApi, getRecipeScriptApi, getSpellApi, getSpellbookScriptApi, getSpellbookApi, getSpellsApi, } from './apis';
import { createSpell, getSpell, } from './models';
import { spellbook, } from './spellbook';

const app = express();

if (process.env.NODE_ENV !== 'production') app.use(cors());

if (process.env.NODE_ENV === 'production') {
    const errors = new ErrorReporting();

    app.use(errors.express);
}

new SwaggerParser()
    .validate('./docs/openapi.yaml')
    .then(async definition => {
        const connect = connector({
            createRecipeApi,
            createSpellbookApi,
            getRecipeApi,
            getRecipeScriptApi,
            getSpellApi,
            getSpellbookApi,
            getSpellbookScriptApi,
            getSpellsApi,
        }, definition);

        app.use('/docs', swaggerUi.serve, swaggerUi.setup(definition));

        connect(app);

        for (const tweak of spellbook.filter(async tweak => (await getSpell(tweak.id)) === undefined)) await createSpell(tweak);
    })
    .catch(console.error);

export default app;
