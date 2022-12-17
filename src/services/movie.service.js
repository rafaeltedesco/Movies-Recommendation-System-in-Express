const movies = require('../database/movies.json')

const findAll = async () => movies;

const findById = async (id) => movies.find((movie) => movie.id === Number(id));

const create = async ({ name }) => {
    const newMovie = {
        id: 8,
        name
    }
    return newMovie
}

module.exports = {
    findAll,
    findById,
    create
}
