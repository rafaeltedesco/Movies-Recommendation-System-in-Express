const { Router } = require("express");
const { userExists } = require("../middlewares/userExists");
const { getUsersSimilarity, sortSimilarity } = require("../services/recommendation/recommendation.service");

const router = Router();

// router.get('/user/:id', (req, res) => {
//     res.status(200).json({
//         prob: 4.52656746,
//         movie: {
//           id: 6,
//           name: "Pulp Fiction",
//         },
//     })
// })

router.get("/show-similar-users/:userId", userExists, async (req, res) => {
    const similarUsers = await getUsersSimilarity(req.userId);
    sortSimilarity(similarUsers)
    res.status(200).json(similarUsers)
});

module.exports = router;
