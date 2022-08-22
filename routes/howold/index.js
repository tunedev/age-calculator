const { convertTimeStampToAge } = require("../../helper/convertTimestampToAge");

module.exports = async function (fastify) {
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
                {
                  pattern: "^(0|[1-9][0-9]*)$",
                },
              ],
            },
          },
        },
      },
    },
    async (request, reply) => {
      let { dob } = request.query;
      if (/^(0|[1-9][0-9]*)$/.test(dob)) {
        dob = Number(dob);
      }
      const age = convertTimeStampToAge(dob);
      if (age < 0) {
        reply.code(400).send({
          error:
            "Seems you were born in the future, comeback then and i'd calculate your age :)",
        });
      }
      reply.send({ age });
    }
  );
};
