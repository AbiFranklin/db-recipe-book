
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', table => {
      table.increments();
      table.string('name').notNullable();
      table.integer('dish_id').unsigned();
      table.foreign('dish_id').references('id').on('dish')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};
