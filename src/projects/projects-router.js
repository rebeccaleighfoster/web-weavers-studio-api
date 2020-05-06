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

projectsRouter.get("/:weaver_id", (req, res, ) => {
    ProjectsService.getByWeaverId(
        req.app.get('db'),
        req.params.weaver_id,
    )
        .then(weaversById => {
            res.json(weaversById)
        }
        )
});

projectsRouter.get("/project/:project_id", (req, res) => {
    ProjectsService.getByProjectId(
        req.app.get('db'),
        req.params.project_id,
    )
        .then(projectById => {
            res.json(projectById)
        }
        )
});


projectsRouter.post("/", (req, res) => {
    const newProject = req.body;
    console.log("MNP", newProject)

    // for (const [key, value] of Object.entries(newWeaver))
    // if (value == null)
    //     return res.status(400).json({
    //         error: { message: `Missing '${key}' in request body` }
    //     })
    ProjectsService.insertProject(
        req.app.get('db'),
        newProject
    )
        .then(project => {
            res.json(project)

        })
        .catch((err) => {
            console.log(err)
            res.json(err);
        });
});


projectsRouter.patch('/edit/:project_id', (req, res) => {
    const updatedProject = req.body;
    delete updatedProject.id;
    console.log(updatedProject, req.params.project_id)
    // const numberOfValues = Object.values(sightingToUpdate).filter(Boolean).length
    // if (numberOfValues === 0)
    //     return res.status(400).json({
    //         error: {
    //             message: `Request body must contain 'title', 'species', 'brief_description', 'detailed_description', 'sighting_date', or 'sighting_location'`
    //         }
    //     })
    ProjectsService.updateProjects(
        req.app.get('db'),
        parseInt(req.params.project_id),
        updatedProject
    )
        .then(updatedProject => {
            res.json(updatedProject)
        })
        .catch((err) => {
            console.log(err)
            res.json(err);
        });
});
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