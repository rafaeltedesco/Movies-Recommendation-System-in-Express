const { OK } = require("../utils/httpResponse/httpStatusCode");
const userService = require("../services/user.service");

const getAllUsers = async (_req, res) => {
  const users = await userService.findAll();
  res.status(OK).json(users);
};

const getUsersById = async (req, res) => {
  const userId  = req.userId;
  const user = await userService.findById(Number(userId));
  res.status(OK).json(user);
};

module.exports = {
    getAllUsers,
    getUsersById
}
