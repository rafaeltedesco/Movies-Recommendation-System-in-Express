const { Router } = require("express");

const movieController = require("../controllers/movie.controller");

const router = Router();

router
    .get("/", movieController.getAllMovies)
    .post('/', (req, res)=> {
        res.status(201).json({
            id: 8,
            name: 'Black Adam'
        })
    });

router.get("/:id", movieController.getMovieById);

module.exports = router;
