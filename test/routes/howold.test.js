"use strict";

const { test } = require("tap");
const { build } = require("../helper");

test("example is loaded", async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: "/howold",
  });
  t.equal(res.payload.message, "bad request");
});

// inject callback style:
//
// test('example is loaded', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/example'
//   }, (err, res) => {
//     t.error(err)
//     t.equal(res.payload, 'this is an example')
//   })
// })