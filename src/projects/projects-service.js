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

    

}


module.exports = { ProjectsService }