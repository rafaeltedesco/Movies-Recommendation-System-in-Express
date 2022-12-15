const express = require("express");
const { OK } = require("./utils/httpResponse/httpStatusCode");
const userRouter = require('./routes/user.route');
const movies = require("./database/movies.json");

const app = express();

app.use('/users', userRouter);

app.get("/movies", (_req, res) => {
  res.status(OK).json(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === Number(id));
  res.status(OK).json(movie);
});

module.exports = app;
