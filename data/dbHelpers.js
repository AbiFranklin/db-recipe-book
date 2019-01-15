const knex = require('knex');

const db_config = require('../knexfile.js');

const db = knex(db_config.development);

module.exports = {
    getDishes: () => {
        return db('dish')
    },

    addDish: (dish) => {
        return db('dish').insert(dish)
    },

    getDish: (id) => {
        return db('dish').where('id', id);
    },

    getRecipes: () => {
        return db('recipe').leftJoin('dish', 'recipe.dish_id', 'dish.id');
    },

    addRecipe: (recipe) => {
        return db('recipe').insert(recipe);
    },

    getDirections: (id) => {
        return db.select('recipe_name', 'step_number', 'directions').where('recipe.id', id)
        .from('recipe').innerJoin('steps', 'recipe.id', 'steps.recipe_id');
    }
}

