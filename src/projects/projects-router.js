const express = require('express')
const { ProjectsService } = require('./projects-service')

const projectsRouter = express();

projectsRouter.get("/", (req, res) => {
    const knexInstance = req.app.get("db");
    ProjectsService.getAllProjects(knexInstance)
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.json(err);
        });
});

projectsRouter.get("/:weaver_id", (req,res,) =>{
    ProjectsService.getByWeaverId(
        req.app.get('db'),
        req.params.weaver_id,
    )
    .then(weaversById => {
        res.json(weaversById)
    }
    )
});


//projectsRouter.post("/", (req, res) => {
//     const newWeaver = req.body;
    
//     for (const [key, value] of Object.entries(newWeaver))
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
// });

projectsRouter.delete("/:id", (req, res, next) => {
    ProjectsService.deleteProjects(
        req.app.get('db'),
        req.params.id
    )
        .then(() => {
            res.status(204).end()
        })
        .catch(next)
})
module.exports = projectsRouter;