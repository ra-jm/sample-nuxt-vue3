import { createVuetify, ThemeDefinition } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import {
  mdiAccount,
  mdiHome,
  mdiMapMarker,
  mdiEmail,
  mdiCart,
  mdiTransitDetour,
  mdiCalendar,
  mdiPencil,
  mdiPlus,
  mdiMinus,
  mdiFilter,
  mdiCampfire,
  mdiEarth,
  mdiBike,
  mdiAirplane,
  mdiSwim,
  mdiHiking,
  mdiCurrencyUsd,
  mdiFaceAgent,
  mdiFacebook,
  mdiInstagram,
  mdiSend,
  mdiPhone,
  mdiChevronDownCircleOutline,
  mdiMenuDown,
} from "@mdi/js";

const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#63AB45",
  },
};

export default defineNuxtPlugin((app) => {
  app.vueApp.use(
    createVuetify({
      ssr: true,
      theme: {
        defaultTheme: "defaultTheme",
        themes: {
          defaultTheme,
        },
      },
      display: {
        mobileBreakpoint: "sm",
        thresholds: {
          xs: 0,
          sm: 340,
          md: 540,
          lg: 800,
          xl: 1280,
        },
      },
      icons: {
        defaultSet: "mdi",
        aliases: {
          ...aliases,
          account: mdiAccount,
          home: mdiHome,
          marker: mdiMapMarker,
          email: mdiEmail,
          cart: mdiCart,
          tour: mdiTransitDetour,
          date: mdiCalendar,
          pencil: mdiPencil,
          plus: mdiPlus,
          minus: mdiMinus,
          filter: mdiFilter,
          camp: mdiCampfire,
          world: mdiEarth,
          bike: mdiBike,
          travel: mdiAirplane,
          swim: mdiSwim,
          hike: mdiHiking,
          currency: mdiCurrencyUsd,
          agent: mdiFaceAgent,
          facebook: mdiFacebook,
          instagram: mdiInstagram,
          send: mdiSend,
          call: mdiPhone,
          chevDown: mdiMenuDown,
        },
        sets: {
          mdi,
        },
      },
    })
  );
});
