const router = require('express').Router();
const Task = require('../db/models').Task;

router.get('/', function (req, res, next) {
    Task.findAll({ where: req.query })
    .then(tasks => res.json(tasks))
    .catch(next);
});

router.get('/:taskId', function (req, res, next) {
    Task.findById(req.params.taskId)
    .then(task => {
        if (!task) {
            const err = Error('Task not found');
            err.status = 404;
            next(err)
        }else{
            res.json(task)
        }
    })
    .catch(next);
});

router.post('/', function (req, res, next) {
    Task.create(req.body)
    .then((task) => {
        res.status(201).json(task)
    })
    .catch(err => {
        next(err)
    })
});

router.put('/:taskId', function (req, res, next) {
    Task.update(req.body,{where:{id:req.params.taskId}})
        .then((task) => {
            res.status(201).json(task);
        })
        .catch(err => {
            next(err)
        })
});


router.delete('/:taskId', function (req, res, next) {
    Task.destroy({where:{id:req.params.taskId}})
        .then((task) => {
            res.status(200);
        })
        .catch(err => {
            next(err)
        })
});




module.exports = router;