import { defineConfig } from 'vite';

import tailwindcss from 'tailwindcss';
//import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [vue()],
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                //      autoprefixer,
            ],
        },
    },

});
