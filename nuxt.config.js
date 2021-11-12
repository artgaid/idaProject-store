export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "idaProject-store",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["normalize.css", "~assets/scss/colors.scss", "~assets/scss/font.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
