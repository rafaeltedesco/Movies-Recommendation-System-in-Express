const moviesService = require("../services/movie.service");
const moviesAvaliationService = require('../services/moviesAvaliation.service')
const { OK, NOT_FOUND } = require("../utils/httpResponse/httpStatusCode");
const userService = require('../services/user.service')

const getAllMovies = async (req, res) => {
  const { userId, movieId } = req.query;
  if (!userId) {
    const movies = await moviesService.findAll();
    return res.status(OK).json(movies);
  }

  if (!await userService.exists(userId)) return res.status(404).json({
    message: 'User not found'
  })
  const userMovies = await moviesAvaliationService.getMoviesAvaliationByPerson(userId);

  if (movieId) {
    const movie = await moviesAvaliationService.getMovieAvaliationByMovieId(userId, movieId)
    if (!movie) return res.status(NOT_FOUND).json({
        message: 'Movie not found'
    })
    
    return res.status(OK).json(movie);
  }

  return res.status(OK).json(userMovies);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await moviesService.findById(id);
  if (!movie) {
    return res.status(NOT_FOUND).json({message: 'User not found'})
  }
  return res.status(OK).json(movie);
};

const createNewMovie = async (req, res)=> {
  res.status(201).json({
      id: 8,
      name: 'Black Adam'
  })
}

module.exports = {
    getAllMovies,
    getMovieById,
    createNewMovie
}
