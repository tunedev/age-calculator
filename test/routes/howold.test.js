"use strict";

const { test } = require("tap");
const { build } = require("../helper");
const supertest = require("supertest");
const { convertTimeStampToAge } = require("../../helper/convertTimestampToAge");

test(
  "endpoint returns error if dob is not passed",
  { only: true },
  async (t) => {
    const app = await build(t);

    const res = await supertest(app.server)
      .get("/howold")
      .expect(400)
      .expect("Content-Type", "application/json; charset=utf-8");

    const payload = res.body;

    t.equal(payload.message, "querystring must have required property 'dob'");
    t.equal(payload.statusCode, 400);
    t.equal(payload.error, "Bad Request");
  }
);

test("endpoint returns correct age", async (t) => {
  const app = await build(t);

  const timeStamp = new Date("2000-01-01").getTime();

  const res = await supertest(app.server)
    .get("/howold")
    .query({ dob: `${timeStamp}` })
    .expect(200)
    .expect("Content-Type", "application/json; charset=utf-8");

  const payload = res.body;

  t.equal(payload.age, convertTimeStampToAge(timeStamp));
});

test("endpoint handles for future date", async (t) => {
  const app = await build(t);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();
  const futureDateStamp = new Date(currentYear + 5, currentMonth, currentDay);

  const timeStamp = futureDateStamp.getTime();

  const res = await supertest(app.server)
    .get("/howold")
    .query({ dob: `${timeStamp}` })
    .expect(400)
    .expect("Content-Type", "application/json; charset=utf-8");

  const payload = res.body;
  console.log(payload);

  t.equal(
    payload.error,
    "Seems you were born in the future, comeback then and i'd calculate your age :)"
  );
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
