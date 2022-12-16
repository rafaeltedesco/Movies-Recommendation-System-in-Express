const { Router } = require("express");

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

router.get("/show-similar-users", async (req, res) => {
    res.status(200).json([
        {
          user_id: 3,
          prob: "0.40",
        },
        {
          user_id: 1,
          prob: "0.39",
        },
        {
          user_id: 5,
          prob: "0.35",
        },
        {
          user_id: 4,
          prob: "0.33",
        },
        {
          user_id: 6,
          prob: "0.00",
        },
      ])
});

module.exports = router;
