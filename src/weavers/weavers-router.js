const express = require('express')
const weaversRouter = express.Router()
const { WeaversService } = require('./weavers-service')


weaversRouter.route('/')
    .get((req, res) => {
        const knexInstance = req.app.get('db')
        WeaversService.getAllWeavers(knexInstance)
            .then(weavers => {
                res.json(weavers.map())
            })
            .catch(next)
    })

module.exports = weaversRouter

//get the crud working completely in one