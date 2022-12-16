const moviesService = require("../services/movie.service");
const moviesAvaliationService = require('../services/moviesAvaliation.service')
const { OK } = require("../utils/httpResponse/httpStatusCode");

const getAllMovies = async (req, res) => {
  const { userId, movieId } = req.query;
  if (!userId) {
    const movies = await moviesService.findAll();
    return res.status(OK).json(movies);
  }
  const userMovies = await moviesAvaliationService.getMoviesByPerson(userId);

  if (movieId) {
    const movie = await moviesAvaliationService.getPersonAvaliationByMovieId(userId, movieId)
    
    return res.status(OK).json(movie);
  }

  return res.status(OK).json(userMovies);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await moviesService.findById(id);
  res.status(OK).json(movie);
};

module.exports = {
    getAllMovies,
    getMovieById
}
