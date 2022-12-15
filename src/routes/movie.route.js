const { Router } = require("express");

const movies = require("../database/movies.json");
const { OK } = require("../utils/httpResponse/httpStatusCode");

const router = Router();

router.get("/", (_req, res) => {
  res.status(OK).json(movies);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === Number(id));
  res.status(OK).json(movie);
});

module.exports = router;
