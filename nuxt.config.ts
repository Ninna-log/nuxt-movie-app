// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-windicss"],
  runtimeConfig: {
    // env keys are gonna be populated at runtime
    apiKey: "",
    apiBaseUrl: "",
  },
});
