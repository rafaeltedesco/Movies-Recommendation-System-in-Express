const path = require('path')

const { readFile, writeFile } = require('../utils/io');

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
