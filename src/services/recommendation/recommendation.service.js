const userService = require("../user.service");
const { calculateSimilarity } = require("./similarityCalculator.service");

const calculateUsersSimilarity = async (userId) => {
  const users = await userService.findAll();
  const usersExceptCurrent = users.filter(({id}) => id !== Number(userId))
  const usersSimilarity = await calculateSimilarity(userId, usersExceptCurrent);
  return usersSimilarity
}

module.exports = {
  calculateUsersSimilarity
};
