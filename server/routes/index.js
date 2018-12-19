const router = require('express').Router();

router.use('/users', require('./users'))
router.use('/tasks', require('./tasks'))
;
// No routes matched? 404.
api.use((req, res, next) => {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;