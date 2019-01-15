
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_name: 'Mexican Street Tacos', dish_id: 1},
        {recipe_name: 'Hawaiian Pizza', dish_id: 2},
        {recipe_name: 'PB&J', dish_id: 3}
      ]);
    });
};
