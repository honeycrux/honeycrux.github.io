// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  modules: ["nuxt-icon", "@nuxt/image"],
  ssr: true,
  image: {
    dir: "assets/images"
  }
});
