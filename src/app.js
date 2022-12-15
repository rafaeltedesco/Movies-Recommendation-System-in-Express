const express = require("express");
const { OK } = require("./utils/httpResponse/httpStatusCode");
const users = require("./database/users.json");
const movies = require("./database/movies.json");

const app = express();

app.get("/users", (_req, res) => {
  res.status(OK).json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  res.status(OK).json(user);
});

app.get("/movies", (_req, res) => {
  res.status(OK).json(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === Number(id));
  res.status(OK).json(movie);
});

module.exports = app;
