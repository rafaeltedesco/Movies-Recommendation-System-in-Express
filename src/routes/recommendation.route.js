const { Router } = require("express");
const { userExists } = require("../middlewares/userExists");
const { getUsersSimilarity, sortSimilarity } = require("../services/recommendation/recommendation.service");

const router = Router();

router.get("/show-similar-users/:userId", userExists, async (req, res) => {
    const similarUsers = await getUsersSimilarity(req.userId);
    const { order } = req.query
    order === 'asc' ? sortSimilarity(similarUsers, false) : sortSimilarity(similarUsers, true)
    res.status(200).json(similarUsers)
});

module.exports = router;
