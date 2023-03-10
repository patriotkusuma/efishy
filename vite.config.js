import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const host = 'efishy.my.id';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/mail.css'
            ],
            refresh: true,
        }),
    ],
    // server:{
    //     host,
    //     hmr: {host},
    // }
});
