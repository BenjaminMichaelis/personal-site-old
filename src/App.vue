<template>
  <v-app id="vue-app">
    <v-app-bar app color="primary">
      <v-toolbar-title>
        <v-btn color="black" size="x-large" variant="plain" to="/">
          Benjamin Michaelis
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <span v-for="(link, i) in sidebarLinks" :key="i" class="fill-height">
        <span v-if="link.isVisible">
          <v-btn
            class="border-e border-s fill-height text-center"
            link
            :to="link.route"
          >
            <v-icon v-if="link.icon"> {{ link.icon }} </v-icon>
            {{ link.name }}
          </v-btn>
        </span>
      </span>
      <v-btn
        density="comfortable"
        class="border-s fill-height mr-0"
        @click="toggleTheme"
      >
        <v-icon size="x-large">{{
          theme.global.current.value.dark
            ? "mdi-weather-sunny"
            : "mdi-moon-waning-crescent"
        }}</v-icon></v-btn
      >
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
          , Made with ❤️, & <a href="/uses">various technologies</a> by ©
          <a
            color="white"
            href="https://benjamin.michaelis.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Benjamin Michaelis</a
          >
          {{ new Date().getFullYear() }}
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
    uri: "https://github.com/BenjaminMichaelis/personal-site",
    icon: "mdi-github",
  },
];

const sidebarLinks = [
  {
    route: "/blog",
    icon: null,
    name: "Blog",
    isVisible: true,
  },
  {
    route: "/about",
    icon: null,
    name: "About",
    isVisible: true,
  },
  {
    route: "/contact",
    icon: null,
    name: "Contact",
    isVisible: true,
  },
];
</script>
