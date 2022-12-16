const { Router } = require("express");

const moviesService = require("../services/movie.service");
const moviesAvaliation = require("../database/movies_avaliation.json");
const { OK } = require("../utils/httpResponse/httpStatusCode");

const router = Router();

router.get("/", async (req, res) => {
  const { userId, movieId } = req.query;
  if (!userId) {
    const movies = await moviesService.findAll();
    return res.status(OK).json(movies);
  }
  const userMovies = moviesAvaliation.filter(
    ({ user_id }) => user_id === Number(userId)
  );

  if (movieId) {
    const movie = userMovies.find(
      ({ movie_id }) => movie_id === Number(movieId)
    );
    return res.status(OK).json(movie);
  }

  return res.status(OK).json(userMovies);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await moviesService.findById(id);
  res.status(OK).json(movie);
});

module.exports = router;
