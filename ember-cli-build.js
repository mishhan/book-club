"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

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
  app.import("node_modules/progressbar.js/dist/progressbar.js");
  app.import("vendor/datetimepicker/bootstrap-datetimepicker.css");
  app.import("vendor/datetimepicker/bootstrap-datetimepicker.js");

  return app.toTree();
};
