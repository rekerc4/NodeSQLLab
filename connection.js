"use strict";
const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "shoppingcart",
  ssl: false
});

module.exports = pool;