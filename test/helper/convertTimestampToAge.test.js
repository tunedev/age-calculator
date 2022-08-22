"use strict";

const { test } = require("tap");
const { convertTimeStampToAge } = require("../../helper/convertTimestampToAge");

test("convertTimestamp helper function", async (t) => {
  const actualAge = 20;

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();
  const futureDateStamp = new Date(
    currentYear - actualAge,
    currentMonth,
    currentDay
  );

  const timeStamp = futureDateStamp.getTime();

  t.equal(convertTimeStampToAge(timeStamp), actualAge);
});

test("convertTimestamp helper function", async (t) => {
  const actualAge = -20;

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();
  const futureDateStamp = new Date(
    currentYear - actualAge,
    currentMonth,
    currentDay
  );

  const timeStamp = futureDateStamp.getTime();

  t.equal(convertTimeStampToAge(timeStamp), actualAge);
});

test("convertTimestamp helper function returns null for invalid argument", async (t) => {
  const actualAge = 20;

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();
  const futureDateStamp = new Date(
    currentYear - actualAge,
    currentMonth,
    currentDay
  );

  const timeStamp = futureDateStamp.getTime();

  t.equal(convertTimeStampToAge(`${timeStamp}`), null);
});
