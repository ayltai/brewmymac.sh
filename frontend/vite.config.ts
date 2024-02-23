/// <reference types="vitest" />
import { sentryVitePlugin, } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, } from 'vite';

export default defineConfig({
    plugins : [
        react(),
        sentryVitePlugin({
            org     : 'alantai',
            project : 'brewmymac',
        }),
    ],
    test    : {
        globals     : true,
        environment : 'jsdom',
        coverage    : {
            enabled  : true,
            provider : 'v8',
            reporter : [
                'text',
                'html',
                'json',
                'lcov',
            ],
            exclude  : [
                '.storybook/**',
                'html/**',
                'src/**/*.stories.tsx',
                'src/**/vite-env.d.ts',
                'src/**/*.types.ts',
                'src/components/**/index.ts',
                'src/routes/**/index.ts',
                'src/models/**/*.ts',
                'src/setupTests.ts',
                '.eslintrc.js',
            ],
        },
        reporters   : [
            'default',
            'html',
            'json',
            'junit',
        ],
    },
    build   : {
        sourcemap : true,
    },
});
