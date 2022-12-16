const userService = require("../user.service");
const { calculateSimilarity } = require("./similarityCalculator.service");

const calculateUsersSimilarity = async (userId) => {
  const users = await userService.findAll();
  const usersExceptCurrent = users.filter(({id}) => id !== Number(userId))
  const usersSimilarity = await calculateSimilarity(userId, usersExceptCurrent);
  return usersSimilarity
}

const getSimilarPersons = async (userId, limit = 3) => {
    const usersSimilarity = await getSimilarity(userId)
    usersSimilarity.sort((firstUser, secondUser) => secondUser.id - firstUser.id)
    const topUsers = usersSimilarity.slice(0, limit);
    return topUsers;
  
    // return [
    //   {
    //     id: 3,
    //     name: "Larissa",
    //     prob: 0.40
    //   },
    //   {
    //     id: 1,
    //     name: "Rafael",
    //     prob: 0.38
    //   },
    //   {
    //     id: 5,
    //     name: "Miguel",
    //     prob: 0.27
    //   }
    // ]
}
  

module.exports = {
  calculateUsersSimilarity,
  getSimilarPersons
};
