const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ["**/e2e/1-getting-started/**", "**/e2e/2-advanced-examples/**"],
    baseUrl: "http://localhost:3000"
  },
});
