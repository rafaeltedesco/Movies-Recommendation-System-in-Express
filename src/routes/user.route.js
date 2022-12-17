const { Router } = require("express");

const userController = require('../controllers/user.controller');
const { userExists } = require("../middlewares/userExists");

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:userId', userExists, userController.getUsersById)

module.exports = router;
