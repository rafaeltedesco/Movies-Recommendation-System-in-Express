const express = require("express");
const { OK } = require("./utils/httpResponse/httpStatusCode");
const users = require("./database/users.json");

const app = express();

app.get("/", (_req, res) => {
  res.status(OK).json(users);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  res.status(OK).json(user);
});

module.exports = app;
