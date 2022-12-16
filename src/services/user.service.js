const users = require('../database/users.json')

const findAll = async ()=> {
    return users;
}

const findById = async (id) => users.find((user) => user.id === Number(id));

const exists = async (id) => {
    const user = await findById(id)
    return user ? true : false
}

module.exports = {
    findAll,
    findById,
    exists
}