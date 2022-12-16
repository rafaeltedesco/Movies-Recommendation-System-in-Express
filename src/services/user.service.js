const users = require('../database/users.json')

const findAll = async ()=> {
    return users;
}

const findById = async (id) => users.find((user) => user.id === Number(id));

module.exports = {
    findAll,
    findById
}