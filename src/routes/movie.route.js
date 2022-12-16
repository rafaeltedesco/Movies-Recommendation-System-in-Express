const { Router } = require("express");

const movieController = require("../controllers/movie.controller");

const router = Router();

router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovieById);

module.exports = router;
