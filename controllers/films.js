//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

const express = require('express');
const filmRouter = new express.Router();

// SHOW
filmRouter.get('/:id', function (req, res) {
  res.json({data: films[req.params.id]});
})

// INDEX
filmRouter.get('/', function (req, res) {
  res.json({data: films});
})


filmRouter.post('/', function(req, res) {
  // const review1 = new Review({
  //   comment: req.body.comment,
  //   rating: req.body.rating,
  //   author: req.body.author
  // })
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors,
    reviews: req.body.reviews
  });
  films.push(film);
  res.json({data: films});
});

filmRouter.put('/:id', function (req, res) {
  films[req.params.id] = {
    title: req.body.title,
    actors: req.body.actors,
    reviews: req.body.reviews
  }
  res.json({data: films});
})

filmRouter.delete('/:id', function (req, res) {
  films.splice(req.params.id, 1);
  res.json({data: films});
})

module.exports = filmRouter;
