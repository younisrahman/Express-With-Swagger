const { createPool } = require("mysql2");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "127.0.0.1",
  user: "root",
  password: "Youniscse",
  database: "heroku_12f1937794459fe",
  connectionLimit: 10,
});
/** Connection pool creation - END */
module.exports = db;
