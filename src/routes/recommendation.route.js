const { Router } = require('express')

const router = Router()

router.get('/user/:id', (req, res) => {
    res.status(200).json({
        prob: 4.658883227,
        movie: {
          id: 7,
          name: "Jurassic Park",
        },
    })
})


module.exports = router