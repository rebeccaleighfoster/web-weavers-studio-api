const express = require('express')
const weaversRouter = express.Router()
const { WeaversService } = require('./weavers-service')
//const jsonParser = express.json()

weaversRouter.route('/')
    .get((req, res, next) => {
       const knexInstance = req.app.get('db')
         WeaversService.getAllWeavers(knexInstance)
             .then(weavers => {
                 console.log('get all weavers ran')
                 res.json(weavers)
             })
             .catch(next)
    })
   
 
    .post(  (req, res, next) => {
        console.log(req.body)
        res.json({post: true})
        // weavers.push(newWeaver)
        // for (const [key, value] of Object.entries(newWeaver))
        //     if (value == null)
        //         return res.status(400).json({
        //             error: { message: `Missing '${key}' in request body` }
        //         })
        // WeaversService.insertWeaver(
        //     req.app.get('db'),
        //     newWeaver
        // )
        // .then(weaver => {
        //     res.json(weaver)
               
        // })
        // .catch(next)
    })
 /*
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