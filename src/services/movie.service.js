const movies = require('../database/movies.json');
const path = require('path')

const { writeFile } = require('../utils/io/writeFile');
const { readFile } = require('../utils/io/readFile');

const MOVIE_PATH = path.resolve(__dirname, '..', 'database', 'movies.json')

const findAll = async () => readFile(MOVIE_PATH);

const findById = async (id) => {
    const [movies] = await findAll()
    return movies.find((movie) => movie.id === Number(id));
}

const create = async ({ name }) => {
    const [result] = await writeFile({name}, MOVIE_PATH)
    const newMovie = {
        id: result.insertedId,
        name
    }
    return newMovie
}

module.exports = {
    findAll,
    findById,
    create
}
