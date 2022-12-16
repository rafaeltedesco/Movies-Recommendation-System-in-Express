const moviesAvaliation = require("../database/movies_avaliation.json");

const findAll = async () => moviesAvaliation;

const getMoviesByPerson = async (userId) => moviesAvaliation.filter(({user_id}) => user_id === Number(userId));

const findById = async (id) =>
  moviesAvaliation.find((movieAvaliation) => movieAvaliation.id === Number(id));

const getPersonAvaliationByMovieId = async (personId, movieId) => {
    const userMovies = await getMoviesByPerson(personId);
    return userMovies.find(({movie_id}) => movie_id === Number(movieId))
}

module.exports = {
  findAll,
  findById,
  getMoviesByPerson,
  getPersonAvaliationByMovieId
};
