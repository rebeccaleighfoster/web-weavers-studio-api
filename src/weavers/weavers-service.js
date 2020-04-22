const WeaversService = {
    getAllWeavers(knex) {
        return knex
        .select('*')
        .from('weavers')
    }
}
   /*
    insertWeaver(knex, newWeaver) {
        return knex
            .insert(newWeaver)
            .into('weavers')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }
 
    getById(knex, id) {
        return knex.from('weavers').select('*').where('id', id).first()
    },

    deleteWeaver(knex, id) {
        return knex('weavers')
            .where({ id })
            .delete()
    },
    updateWeaver(knex, id, newWeaverFields) {
        return knex('weavers')
            .where({ id })
            .update(newWeaverFields)
    },
}*/

module.exports = { WeaversService }