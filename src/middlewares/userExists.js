
const userService = require('../services/user.service')

const userExists = async (req, res, next) => {
    const { userId } = req.params;
    if(!await userService.exists(userId)) {
        const err = new Error('User not found')
        err.status = 400
        next(err)
    }
    req.userId = userId
    next()
}

module.exports = {
    userExists
}