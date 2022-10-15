
// llamar la data
const movies = require("./movies.seed")
const moviesModel = require('../models/Movie.model')


// connect db
require("../db")


// withdraw model
const MoviesModel = require("../models/Movie.model")

// add data to db

MoviesModel.insertMany(movies)
.then(()=> {
    console.log("added to db")
})
.catch((error) => {
    error
})

