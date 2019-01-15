const express = require('express');

const dbHelpers = require('./data/dbHelpers.js');

const server = express();
const PORT = 5507;

server.use(express.json());

server.get('/api/dishes', (req, res) => {
  dbHelpers.getDishes()
  .then(dishes => {
    res.send(dishes);
  })
  .catch(err => {
    res.send(err);
  })
});

server.post('/api/dishes', (req, res) => {
    const dish = req.body;
    dbHelpers.addDish(dish)
    .then(dish => {
        res.send(dish);
    })
    .catch(err => {
        res.send(err);
    })
})

server.get('/api/dishes/:id', (req, res) => {
    const {id} = req.params;
    dbHelpers.getDish(id)
    .then(arr => {
      if (arr.length > 0) {
      res.status(200).json(arr)
      } else {
        res.status(404).json({ error: 'No data for given id.'})
      }
    })
    .catch(err => {
     res.status(500).json({ error: 'Failed to get info.'})
     }) 
   });

server.get('/api/recipes', (req, res) => {
    dbHelpers.getRecipes()
    .then(recipes => {
        res.send(recipes);
    })
    .catch(err => {
        res.send(err);
    })
})

server.post('/api/recipes', (req, res) => {
    const recipe = req.body;
    dbHelpers.addRecipe(recipe)
    .then(recipe => {
        res.send(recipe);
    })
    .catch(err => {
        res.send(err);
    })
})

server.get('/api/recipes/:id', (req, res) => {
    const {id} = req.params;
    dbHelpers.getDirections(id)
    .then(arr => {
      if (arr.length > 0) {
      res.status(200).json(arr)
      } else {
        res.status(404).json({ error: 'No data for given id.'})
      }
    })
    .catch(err => {
     res.status(500).json({ error: 'Failed to get info.'})
     }) 
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});