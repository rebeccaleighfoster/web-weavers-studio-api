const express = require('express')
const { WeaversService } = require('./weavers-service')

const weaversRouter = express();

weaversRouter.get("/", (req, res) => {
    const knexInstance = req.app.get("db");
    WeaversService.getAllWeavers(knexInstance)
        .then((weavers) => {
            res.json(weavers);
        })
        .catch((err) => {
            res.json(err);
        });
});

weaversRouter.get('/weaver/:weaver_id', (req, res) => {
    WeaversService.getOneWeaverByID(
        req.app.get('db'),
        req.params.weaver_id,
    )
        .then(weaverById => {
            res.json(weaverById)
        })
    })

weaversRouter.post("/", (req, res) => {
    const newWeaver = req.body;
    console.log(newWeaver)
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
        .catch((err) => {
            res.json(err);
        });
});

weaversRouter.delete("/", (req, res, next) => {
    WeaversService.deleteWeaver(
        req.app.get('db'),
    )
        .then(() => {
            res.status(204).end()
        })
        .catch(next)
})
module.exports = weaversRouter;