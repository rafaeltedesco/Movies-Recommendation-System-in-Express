const { getMoviesAvaliationByPerson } = require("../moviesAvaliation.service")


const calculateSimilarity = async (userId, usersToCompare) => {
    const currentUserAvaliations = await getMoviesAvaliationByPerson(userId)
    return [
        {
          id: 1,
          name: "Rafael",
          prob: 0.39,
        },
        {
          id: 3,
          name: "Larissa",
          prob: 0.4,
        },
        {
          id: 4,
          name: "Jessica",
          prob: 0.3,
        },
        {
          id: 5,
          name: "Miguel",
          prob: 0.35,
        },
        {
          id: 6,
          name: "Leonardo",
          prob: 0,
        },
      ];

}

module.exports = {
    calculateSimilarity
}