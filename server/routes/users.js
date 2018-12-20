const router = require('express').Router();
const User = require('../db/models').User;

router.get('/', function (req, res, next) {
  User.findAll({ where: req.query })
  .then(users => res.json(users))
  .catch(next);
});

router.get('/:userId', function (req, res, next) {
    User.findById(req.params.userId)
    .then(user => {
        if (!user) {
            const err = Error('User not found');
            err.status = 404;
            next(err)
        }else{
            res.json(user)
        }
    })
    .catch(next);
});

router.get('/:userId/tasks', function (req, res, next) {
    //Nested Eager Loading 
    User.findById(req.params.userId, {
        include: [{
            all: true,
            nested: true
        }]
    })
    .then(user => {
        if (!user) {
            const err = Error('User not found');
            err.status = 404;
            next(err)
        } else {
            res.json(user)
        }
    })
    .catch(next);
});

router.post('/', function (req, res, next) {
    User.create(req.body)
    .then((user) => {
        res.status(201).json(user)
    })
    .catch(err => {
        next(err)
    })
});

router.put('/:userId', function (req, res, next) {
    User.update(req.body,{where:{id:req.params.userId}})
        .then((user) => {
            res.status(201).json(user);
        })
        .catch(err => {
            next(err)
        })
});


router.delete('/:userId', function (req, res, next) {
    User.destroy({where:{id:req.params.userId}})
        .then((user) => {
            res.status(200);
        })
        .catch(err => {
            next(err)
        })
});




module.exports = router;