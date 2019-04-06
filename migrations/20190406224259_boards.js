
exports.up = function(knex, Promise) {
    return knex.schema.createTable('boards', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('description')
        table.string('columns').defaultTo('TODO, DOING, DONE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('boards')
};
