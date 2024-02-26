/// <reference types="vitest" />
import { sentryVitePlugin, } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { visualizer, } from 'rollup-plugin-visualizer';
import { defineConfig, splitVendorChunkPlugin, } from 'vite';

export default defineConfig({
    plugins : [
        react(),
        splitVendorChunkPlugin(),
        sentryVitePlugin({
            org       : 'alantai',
            project   : 'brewmymac',
            telemetry : false,
        }),
        visualizer(),
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
        rollupOptions : {
            output : {
                manualChunks : (alias : string) => {
                    if (alias.includes('@remix-run') || alias.includes('react-router') || alias.includes('react-router-dom')) return 'react-router';

                    if (alias.includes('@sentry')) return 'sentry';

                    if (alias.includes('firebase')) return 'firebase';

                    if (alias.includes('i18next')) return 'i18next';

                    if (alias.includes('redux')) return 'redux';
                },
            },
        },
    },
});
