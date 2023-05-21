import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: "assets/vuetify.scss",
            },
          })
        );
      });
    },
  ],
  css: ["vuetify/dist/vuetify.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  sourcemap: {
    server: false,
    client: true,
  },
  typescript: {
    shim: false,
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
});
