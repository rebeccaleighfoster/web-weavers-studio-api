const WeaversService = {
    getAllWeavers(knex) {
        return knex.select('*').from('weavers')
    },
}

module.exports = { WeaversService }