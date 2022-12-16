const { Router } = require("express");
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

router.get("/show-similar-users/:userId", async (req, res) => {
    const { userId } = req.params;
    const similarUsers = await getUsersSimilarity(userId);
    sortSimilarity(similarUsers)
    res.status(200).json(similarUsers)
});

module.exports = router;
