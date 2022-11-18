const { defineConfig } = require('cypress')
const dotenvPlugin = require('cypress-dotenv');

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;


async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".js"],
      },
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                options: config,

              },
            ],
          },
        ],
      },
      plugins: [
        new NodePolyfillPlugin()
      ],
    },

  };

  on('file:preprocessor', webpackPreprocessor(options));
  // Make sure to return the config object as it might have been modified by the plugin.
  config = dotenvPlugin(config)
  return config;
}


module.exports = defineConfig({
  env: {
    baseAPI: "https://api-staging.membranelabs.com",
  },
  e2e: {
    baseUrl: "https://app-staging.membranelabs.com",
    specPattern: "*/**/*.feature",
    watchForFileChanges: false,
    experimentalSessionAndOrigin: false,
    requestTimeout: 50000,
    responseTimeout:50000,
    viewportWidth: 1500,
    viewportHeight: 1000,
    //projectId: "9s68dt", (cypress)
    projectId: 'x0t9Vx', // current
    video: false,
    excludeSpecPattern: [
      "*.js",
      "*.md"
    ],
    //stepDefinitions: 'support/step_definitions/**.js',
    /*
        reporter: "junit",
        reporterOptions: {
          "mochaFile": "test-results/test-output-[hash].xml"
        }
    */
    chromeWebSecurity: false,
    //supportFile: 'cypress/support/e2e.js',
    setupNodeEvents
  }

})
