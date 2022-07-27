/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */

import dotenv from "dotenv";

dotenv.config();
const args = process.env;

export default (_on: Cypress.PluginEvents, config: Cypress.ConfigOptions): Partial<Cypress.ResolvedConfigOptions> => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  config.baseUrl = args.BASE_URL || "localhost:8080";
  config.video = Boolean(Number(args.CYPRESS_VIDEOS_RECORDER));
  config.videosFolder = args.CYPRESS_VIDEOS_FOLDER || "report/videos";
  config.screenshotsFolder = args.CYPRESS_SCREENSHOTS_FOLDER || "report/screenshots";

  /**
 * config.defaultCommandTimeout = Number(args.DEFAULT_COMMAND_TIMEOUT)
 */

  return config;
};