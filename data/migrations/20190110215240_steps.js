
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', table => {
        table.increments();
        table.integer('step_number').notNullable().unique();;
        table.string('directions').notNullable();
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').on('recipe');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};
