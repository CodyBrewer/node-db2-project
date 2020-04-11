const router = require('express').Router();

router.get('/status', (req, res) => {
    res.json({status:"ka-chow"})
})

module.exports = router;
