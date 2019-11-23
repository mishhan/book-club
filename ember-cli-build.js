"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import("node_modules/bootstrap/dist/css/bootstrap.css");
  app.import("node_modules/bootstrap/dist/js/bootstrap.js");

  app.import("node_modules/@fortawesome/fontawesome-free/css/all.css");
  app.import("vendor/webfonts/fa-solid-900.woff2");
  app.import("vendor/webfonts/fa-solid-900.woff");
  app.import("vendor/webfonts/fa-regular-400.ttf");

  app.import("vendor/webfonts/fa-regular-400.woff2");
  app.import("vendor/webfonts/fa-regular-400.woff");
  app.import("vendor/webfonts/fa-regular-400.ttf");

  app.import("vendor/webfonts/fa-brands-400.woff2");
  app.import("vendor/webfonts/fa-brands-400.woff");
  app.import("vendor/webfonts/fa-brands-400.ttf");

  app.import("node_modules/moment/moment.js");

  app.import("vendor/datetimepicker/bootstrap-datetimepicker.css");
  app.import("vendor/datetimepicker/bootstrap-datetimepicker.js");

  return app.toTree();
};
