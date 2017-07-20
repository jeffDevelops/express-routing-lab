var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

//Our pretend candies "database"
var candies = [
  {id: 1, name: 'Milk Duds', color: 'brown'},
  {id: 2, name: 'Chocolate-covered Espresso Beans', color: 'brown'},
  {id: 3, name: 'Sour Patch Kids', color: 'multi-colored'},
  {id: 4, name: 'Pop Rocks', color: 'pink'}
];

//What would need to go into candies
//in order to pass our first test?

//INDEX ROUTE
router.get('/', function(req,res) {
  res.json(candies);
});

// Fill out the rest of the routes here

//SHOW ROUTE
router.get('/:id', function(req, res) {
  var candyNumber = req.params.id;
  console.log(candies[candyNumber]);
  res.json(candies[candyNumber]);
});

//CREATE ROUTE
router.post('/', function(req, res) {
  candies.push(req.body);
  res.send('You added ' + req.body + 'to the "database."');
});

//UPDATE
router.put('/:id', function(req, res) {
  var which = req.params.id;
  candies[which].name = req.body.name;
  candies[which].color = req.body.color;
  console.log(candies[which]);
  res.send('You updated ' + candies[which]);
});

//DESTROYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
router.delete('/:id', function(req, res) {
  var which = req.params.id;
  candies[which] = null;
  res.send({message: "deleted"});
});







module.exports = router;