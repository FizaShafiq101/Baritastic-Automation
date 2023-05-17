const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
   chromeWebSecurity : false,
  // "integrationFolder": "cypress/integration",
    
   env:{

      "Baseurl": "https://baritastic-smile.bariapps.com"

   },

    setupNodeEvents(on, config) {

       return require('./cypress/plugins/index.js')(on, config)  
   
    },
   
    specPattern: 'cypress/integration/Examples/allspecs.spec.cy.js',

    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 50000,
 },
  
});
