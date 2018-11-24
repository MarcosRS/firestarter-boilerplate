const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Test Route');
})

module.exports = router;