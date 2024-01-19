const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  plugins: [],
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        article: resolve(__dirname, "article.html"),
      },
    },
  },
});
