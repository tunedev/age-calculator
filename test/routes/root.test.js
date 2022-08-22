"use strict";

const { test } = require("tap");
const { build } = require("../helper");
const supertest = require("supertest");

test("app returns 200 in root", async (t) => {
  const app = await build(t);

  const res = await supertest(app.server)
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/plain; charset=utf-8");

  t.equal(res.text, "Hello World!");
});
