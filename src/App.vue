<template>
  <v-app id="vue-app">
    <v-app-bar app color="primary">
      <v-toolbar-title>
        <v-btn color="black" size="x-large" variant="plain" to="/">
          Benjamin Michaelis
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-divider class="px-3 py-1 mr-3" vertical />

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-divider class="px-3 py-1 mr-3" vertical />

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-divider class="px-3 py-1 mr-3" vertical />
      <v-btn
        @click="toggleTheme"
        :icon="
          theme.global.current.value.dark
            ? 'mdi-weather-sunny'
            : 'mdi-moon-waning-crescent'
        "
      ></v-btn>
    </v-app-bar>
    <v-main>
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in footerLinks"
          :key="link.name"
          :href="link.uri"
          :prepend-icon="link.icon"
          stacked
          variant="text"
          color="white"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-2"
          >{{ link.name }}</v-btn
        >
        <v-col class="text-center mt-4" cols="12">
          <v-icon size="small" icon="mdi-copyright"></v-icon>
          , Made with ❤️, & <a href="/uses">various technologies</a> by © <a color="white" href="https://benjamin.michaelis.net" target="_blank" rel="noopener noreferrer"> Benjamin Michaelis</a> {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import { DARK_THEME } from "@/lib/symbols";
import { onMounted } from "vue";
onMounted(() => {
  const storedTheme = localStorage.getItem(DARK_THEME);

  if (storedTheme) {
    if (storedTheme === "true") {
      theme.global.name.value = "dark";
    } else {
      theme.global.name.value = "light";
    }
  } else
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
});
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  localStorage.setItem(DARK_THEME, theme.global.current.value.dark.toString());
}
type Link = {
  name: string;
  uri: string;
  icon: string;
};
const footerLinks: Link[] = [
  {
    name: "Github",
    uri: "https://github.com/BenjaminMichaelis/JobSherpa",
    icon: "mdi-github",
  },
];
</script>
