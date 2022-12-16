const { Router } = require("express");

const { OK } = require("../utils/httpResponse/httpStatusCode");
const userService = require("../services/user.service");

const router = Router();

router.get("/", async (_req, res) => {
  const users = await userService.findAll();
  res.status(OK).json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(Number(id));
  res.status(OK).json(user);
});

module.exports = router;
