
const express = require('express');
const app = require('./app')
const knex = require('knex')
const PORT = process.env.PORT || 3000;

 app.get('/api/*', (req, res) => {
   res.json({ok: true});
 });


 app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {app};