import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
    server: {
        port: 8888,
    },
    build: {
        sourcemap: true,
        minify: mode === 'production',
    },
    resolve: {
        dedupe: ['svelte', 'svelte/transition', 'svelte/internal'],
    },
    plugins: [svelte()],
}));
