const { getMoviesAvaliationByPerson, getAllMoviesAvaliations } = require("../moviesAvaliation.service");

const calculateSimilarity = async (userId, usersToCompare) => {
  const allAvaliations = await getAllMoviesAvaliations(userId, usersToCompare)
  const similarities = [];
  allAvaliations.otherUsers.forEach((user) => {
    let accumulator = 0;
    let temp_id = -1;
    user.forEach((avaliation) => {
      const matchedAvaliation = allAvaliations.currentUser.find(
        (userAvaliation) => avaliation.movie_id === userAvaliation.movie_id
      );
      temp_id = avaliation.user_id;
      if (!matchedAvaliation) return;
      accumulator += Math.pow(avaliation.stars - matchedAvaliation.stars, 2);
    });
    similarities.push({
      user_id: temp_id,
      prob:
        accumulator > 0
          ? (1 / (1 + Math.sqrt(accumulator))).toFixed(2)
          : (0).toFixed(2),
    });
  });

  return similarities;
};

module.exports = {
  calculateSimilarity,
};
