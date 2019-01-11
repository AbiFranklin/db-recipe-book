
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
      table.increments();
      table.integer('amount').notNullable();
      table.string('amount_unit').notNullable();
      table.string('item').notNullable();
      table.integer('recipe_id').unsigned();
      table.foreign('recipe_id').references('id').on('recipe');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
