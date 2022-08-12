"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
  fastify.register(require("@fastify/rate-limit"), {
    max: 3,
    timeWindow: 1000,
    keyGenerator: function (request) {
      return (
        request.headers["x-real-ip"] || // nginx
        request.headers["x-client-ip"] || // apache
        request.headers["x-forwarded-for"] || // use this only if you trust the header
        request.session.username || // you can limit based on any session value
        request.ip
      );
    },
  });
});
