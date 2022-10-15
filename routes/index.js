const express = require('express');
const router = express.Router();
const MoviesModel = require("../models/Movie.model");
const movies = require('../seeds/movies.seed');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {

    MoviesModel.find()
    .then((response) => {
        res.render(("movies.hbs"), {
            moviesList: response
        })
        
    })
    .catch((err)=> {
        next(err)
    })
})

router.get("/movies/:movieId", (req, res, next) =>  {
    const { movieId } = req.params

    MoviesModel.findById(movieId)
    .then((response) => {
        res.render("selected-movie.hbs", {
            selectedMovie: response
        })
    })
    .catch((err)=> {
        next(err)
    })
})

module.exports = router;
