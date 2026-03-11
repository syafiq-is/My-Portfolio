import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // Add Tailwind
  css: ["/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  // Add Font
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Poppins: [100, 300, 400, 500, 600, 700, 900],
      Exo: [100, 300, 400, 500, 600, 700, 900],
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
      ],
    },
  },
});
