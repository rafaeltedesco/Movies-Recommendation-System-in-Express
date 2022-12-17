const {
  getMoviesAvaliationByPerson,
  getAllMoviesAvaliations,
} = require("../moviesAvaliation.service");
const { euclideanDistance } = require("./distanceCalculators");

const calculateSimilarity = async (userId, usersToCompare) => {
  const allAvaliations = await getAllMoviesAvaliations(userId, usersToCompare);
  const similarities = [];
  allAvaliations.otherUsers.forEach((otherUser) => {
    similarities.push(
      euclideanDistance(
        otherUser,
        allAvaliations.currentUser,
        'movie_id',
        'stars',
        'user_id'
      )
    );
  });

  return similarities;
};

module.exports = {
  calculateSimilarity,
};
