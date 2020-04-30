const ProjectsService = {
    getAllProjects(knex) {
        return knex
        .select('*')
        .from('projects')
    },


deleteProjects(knex, id) {
    return knex('projects')
        .where({ id })
        .delete()
        
},

getByWeaverId(knex, weaver_id) {
    return knex.from('projects').select('*').where('weaver_id', weaver_id)
    
},

insertProject(knex, newProject) {
    return knex
        .insert(newProject)
        .into('project')
        .returning('*')
        .then(rows => {
            return rows[0]
        })
},


getByProjectId(knex, project_id){
    return knex('projects')
        .where({ id: project_id})
        .first()

},

updateProjects(knex, id, newProjectFields) {
    return knex('projects')
        .where({ id })
        .update(newProjectFields)
    },

}


module.exports = { ProjectsService }