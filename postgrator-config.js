const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  NODE_ENV
} = require("./src/config");

console.log(DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD);



module.exports = {
  migrationDirectory: __dirname + "/migrations",
  driver: "pg",
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_NAME,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  validateChecksums: false,
  ssl: NODE_ENV !== "development"
};