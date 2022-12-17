const moviesAvaliation = require("../database/movies_avaliation.json");

const findAll = async () => moviesAvaliation;

const getMoviesAvaliationByPerson = async (userId) =>
  moviesAvaliation.filter(({ user_id }) => user_id === Number(userId));

const findById = async (id) =>
  moviesAvaliation.find((movieAvaliation) => movieAvaliation.id === Number(id));

const getMovieAvaliationByMovieId = async (userId, movieId) => {
  const userMovies = await getMoviesAvaliationByPerson(userId);
  return userMovies.find(({ movie_id }) => movie_id === Number(movieId));
};

const getAllMoviesAvaliations = async (userId, usersToCompare) => {
  const currentUserAvaliations = await getMoviesAvaliationByPerson(userId);
  const usersAvaliations = await Promise.all(
    usersToCompare.map(({ id }) => getMoviesAvaliationByPerson(id))
  );
  return {
    currentUser: currentUserAvaliations,
    otherUsers: usersAvaliations
  }
};

module.exports = {
  findAll,
  findById,
  getMoviesAvaliationByPerson,
  getMovieAvaliationByMovieId,
  getAllMoviesAvaliations,
};
