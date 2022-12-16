const movies = require('../database/movies.json')

const findAll = async () => movies;

const findById = async (id) => movies.find((movie) => movie.id === Number(id));

module.exports = {
    findAll,
    findById
}
