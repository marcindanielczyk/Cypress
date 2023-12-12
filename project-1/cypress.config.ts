import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    excludeSpecPattern: ["**/e2e/1-getting-started/**", "**/e2e/2-advanced-examples/**"],
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
