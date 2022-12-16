const userService = require("../user.service");
const { calculateSimilarity } = require("./similarityCalculator.service");

const getUsersSimilarity = async (userId) => {
  const users = await userService.findAll();
  const usersExceptCurrent = users.filter(({id}) => id !== Number(userId))
  const usersSimilarity = await calculateSimilarity(userId, usersExceptCurrent);
  return usersSimilarity
}

const sortSimilarity = async (usersSimilarity, desc = true) => {
  usersSimilarity.sort(({prob}, user) => desc ? user.prob - prob : prob - user.prob)
  console.log(usersSimilarity)
}

module.exports = {
  getUsersSimilarity,
  sortSimilarity
};
