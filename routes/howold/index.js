const { convertTimeStampToAge } = require("../../helper/convertTimestampToAge");

module.exports = async function (fastify, opts) {
  fastify.get(
    "/",
    {
      schema: {
        query: {
          type: "object",
          required: ["dob"],
          properties: {
            dob: {
              type: "string",
              anyOf: [
                {
                  format: "date-time",
                },
                {
                  format: "date",
                },
              ],
            },
          },
        },
      },
    },
    async (request, reply) => {
      const { dob } = request.query;
      const age = convertTimeStampToAge(dob);
      reply.send({ age });
    }
  );
};