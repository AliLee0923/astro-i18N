import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-i18next.yassinedoghri.com/",
  experimental: {
    integrations: true,
  },
  integrations: [
    sitemap(),
    tailwind(),
    astroI18next({
      resourcesPath: "./src/locales/",
      i18nextConfig: {
        debug: true,
        fallbackLng: ["en", "fr"],
        supportedLngs: ["en", "fr"],
      },
    }),
  ],
});
