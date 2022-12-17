const { Router } = require("express");
const { userExists } = require("../middlewares/userExists");
const recommendationController = require('../controllers/recommendation.controller')

const router = Router();

router.get("/show-similar-users/:userId", userExists, recommendationController.getSimilarUsers);

module.exports = router;
