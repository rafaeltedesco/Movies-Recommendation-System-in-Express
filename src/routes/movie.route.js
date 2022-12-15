const { Router } = require("express");

const movies = require("../database/movies.json");
const moviesAvaliation = require("../database/movies_avaliation.json");
const { OK } = require("../utils/httpResponse/httpStatusCode");

const router = Router();

router.get("/", (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(OK).json(movies);
  }
  const userMovies = moviesAvaliation.filter(
    ({ user_id }) => user_id === Number(userId)
  );

  return res.status(OK).json(userMovies);
  
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === Number(id));
  res.status(OK).json(movie);
});

module.exports = router;
