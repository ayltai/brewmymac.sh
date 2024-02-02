/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig, } from 'vite';

export default defineConfig({
    plugins : [
        react(),
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
});
