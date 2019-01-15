
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {dish_name: 'Tacos'},
        {dish_name: 'Pizzas'},
        {dish_name: 'Sandwiches'}
      ]);
    });
};
