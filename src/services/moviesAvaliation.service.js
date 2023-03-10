const { readFile } = require("../utils/io");
const path = require("path");

const MOVIESAVALIATION_PATH = path.resolve(
  __dirname,
  "..",
  "database",
  "movies_avaliation.json"
);

const findAll = async () => await readFile(MOVIESAVALIATION_PATH)

const getMoviesAvaliationByPerson = async (userId) => {
  const [moviesAvaliation] = await findAll()
  return moviesAvaliation.filter(({ user_id }) => user_id === Number(userId));
}
  

const findById = async (id) => {
  const [moviesAvaliation] = await findAll()
  return moviesAvaliation.find((movieAvaliation) => movieAvaliation.id === Number(id));
}
  

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
    otherUsers: usersAvaliations,
  };
};

module.exports = {
  findAll,
  findById,
  getMoviesAvaliationByPerson,
  getMovieAvaliationByMovieId,
  getAllMoviesAvaliations,
};
