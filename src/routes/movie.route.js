const { Router } = require("express");

const movies = require("../database/movies.json");
const moviesAvaliation = require("../database/movies_avaliation.json");
const { OK } = require("../utils/httpResponse/httpStatusCode");

const router = Router();

router.get("/", (_req, res) => {
  res.status(OK).json(movies);
});


router.get("/all", (req, res) => {
    const { userId } = req.query;
    const userMovies = moviesAvaliation.filter(({ user_id }) => user_id === Number(userId));
    res.status(200).json(userMovies);
  });
  
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === Number(id));
  res.status(OK).json(movie);
});

module.exports = router;
