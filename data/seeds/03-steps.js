
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, directions: 'Spread peanut butter on one slice of bread.', recipe_id: 3},
        {step_number: 2, directions: 'Spread jelly on other slice of bread.', recipe_id: 3},
        {step_number: 3, directions: 'Put the two slices together and enjoy!.', recipe_id: 3}
      ]);
    });
};
