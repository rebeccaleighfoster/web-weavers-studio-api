const knex = require('knex')
const app = require('./app')
const { 
  PORT
} = require("./config");
const knexConfig = require("./knexfile");
console.log(PORT)
const db = knex(knexConfig);


app.set('db', db)

app.listen(PORT);