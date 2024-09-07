// vite.config.js
import glsl from 'vite-plugin-glsl';

export default {
  plugins: [glsl()],
  build: {
    outDir: 'dist',
    ssrManifest: true,
    emptyOutDir: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main_js: 'src/app/index.js',
        main_css: 'src/styles/index.scss',
      },
      output: {
        entryFileNames: 'main.js',
        assetFileNames: ({ name }) =>
          name === 'main_css.css' ? 'main.css' : '[name].[ext]',
      },
    },
  },
};
