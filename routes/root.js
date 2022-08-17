"use strict";

module.exports = async function (fastify, _opts) {
  fastify.get("/", async function (request, reply) {
    reply.send("Hello World!");
  });
};
