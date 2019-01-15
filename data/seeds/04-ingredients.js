
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {amount: 3, amount_unit: 'Tblsp', item: 'Peanut Butter', recipe_id: 3},
        {amount: 3, amount_unit: 'Tblsp', item: 'Jelly', recipe_id: 3},
        {amount: 2, amount_unit: 'Slices', item: 'Bread', recipe_id: 3}
      ]);
    });
};
