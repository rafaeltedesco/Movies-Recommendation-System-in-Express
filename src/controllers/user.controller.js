const { OK } = require("../utils/httpResponse/httpStatusCode");
const userService = require("../services/user.service");

const getAllUsers = async (_req, res) => {
  const users = await userService.findAll();
  res.status(OK).json(users);
};

const getUsersById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(Number(id));
  res.status(OK).json(user);
};

module.exports = {
    getAllUsers,
    getUsersById
}
