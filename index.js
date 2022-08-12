"use strict";

const path = require("path");
const AutoLoad = require("@fastify/autoload");

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  fastify.register(require("@fastify/rate-limit"), {
    max: 3,
    timeWindow: 1000,
  });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });

  fastify.setErrorHandler(function (error, request, reply) {
    console.log(
      "===============================================>>>>>>>>>>>>>>>>>>>>"
    );
    if (reply.statusCode === 400) {
      console.log("Does it get here self");
      error.message =
        "Ensure dob is added as a query parameter, in format YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS";
    }
    reply.send(error);
  });
};
