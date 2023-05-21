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
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;300;400;500;600;700;900&display=swap",
        },
      ],
    },
  },
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
