import colors from "vuetify/es5/util/colors";

const metaHeaders = require("./meta-headers.json");

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | COVID Watch",
    title: metaHeaders.title,
    meta: [
      metaHeaders,
      ...Object.entries(metaHeaders).map(([key, value]) => ({
        hid: key,
        name: key,
        content: value
      })),
      ...Object.entries(metaHeaders).map(([key, value]) => ({
        hid: `og:${key}`,
        name: `og:${key}`,
        content: value
      }))
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */ loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/google-maps", mode: "client" },
    { src: "@/plugins/vue-plotly", mode: "client" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  router: {
    base: "/"
  },
  axios: {
    baseURL: "/"
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      icons: "mdi"
    },
    theme: {
      options: {
        customProperties: true
      },
      light: true, //you don't actually need this line as it's for default
      themes: {
        light: {
          primary: "#BF3F4A",
          secondary: "#779f98",
          secondaryLight: "#ccdbd8", // TODO: Use Vuetify theme's existing capabilities for light variants.
          info: "#779f98",
          warning: "#BF3F4A"

          //accent: '#82B1FF',
          //error: '#FF5252',
          //success: '#4CAF50',
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
