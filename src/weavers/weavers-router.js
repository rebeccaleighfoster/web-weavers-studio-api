const express = require('express')
const weaversRouter = express.Router()
const { WeaversService } = require('./weavers-service')

const serializeWeavers = weaver => ({
    id: weaver.id,
    first_name: xss(weaver.first_name),
    last_name:xss(weaver.last_name),
    email:xss(weaver.email),
    password:xss(weaver.password),
    experience_level:xss(weaver.experience_level),
    loom_type:xss(weaver.loom_type),
    state:xss(weaver.state),
    bio: xss(weaver.bio),
})


weaversRouter.route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        WeaversService.getAllWeavers(knexInstance)
            .then(weavers => {
                res.json(weavers.map(serializeWeavers))
            })
            .catch(next)
    })
    /*
    .post(jsonParser, (req, res, next) => {
        const { weaver_info } = req.body
        const newWeaver = { weaver_info }
        folders.push(newWeaver)

        for (const [key, value] of Object.entries(newWeaver))
            if (value == null)
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })
        WeaversService.insertWeaver(
            req.app.get('db'),
            newWeaver
        )
        .then(weaver => {
            res.json(weaver)
               
        })
        .catch(next)
    })

    weaversRouter
    .route('/:weaver_id')
    .get((req, res, next) => {
        WeaversService.getById(
            req.app.get('db'),
            req.params.weaver_id
        )
        .then(weaver => {
            console.log(weaver)
            if (!weaver) {
                return res.status(404).json({
                    error: { message: `Weaver doesn't exist` }
                })
            }
            res.json(weaver)
        })
        .catch(next)
    })
    .delete((req, res, next) => {
        WeaverService.deleteWeaver(
            req.app.get('db'),
            req.params.weaver_id
        )
            .then(() => {
                res.status(204).end()
            })
            .catch(next)
    })*/

module.exports = weaversRouter