/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: "#f7fafc",
          surface: "#f7fafc",
          primary: "#6374d6",
          secondary: "#03dac6",
          error: "#f44336",
          info: "#2196F3",
          success: "#4caf50",
          warning: "#fb8c00",
        },
      },
      dark: {
        colors: {
          background: "#15202b",
          surface: "#15202b",
          primary: "#6374d6",
          secondary: "#03dac6",
          error: "#f44336",
          info: "#2196F3",
          success: "#4caf50",
          warning: "#fb8c00",
        },
      },
    },
  },
});
