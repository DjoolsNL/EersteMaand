module.exports = {
    chromeWebSecurity: false,
    defaultCommandTimeout: 4000,
    requestTimeout: 5000,
    viewportHeight: 750,
    viewportWidth: 800,
    e2e: {
        experimentalSessionAndOrigin: false,
        specPattern: "./cypress/tests/**/*.cy.js",
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require("./cypress/plugins/index.js")(on, config)
        },
    },
}
