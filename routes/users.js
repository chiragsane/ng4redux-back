var express = require('express');
var router = express.Router();

// var moment = require('moment');

var User = require('../models/user');

router.use((req, res, next) => {
    console.log('Someone hit api/users');
    next();
});

router.route('/')
    .get((req, res) => {
        User.find((err, users) => {
            if (err)
                res.send(err);
            res.json(users);
        });
    })
    .post((req, res) => {
        var user = new User();
        user.name = req.body.name;
        user.username = req.body.username;
        user.password = req.body.password;
        user.save((err) => {
            if (err)
                res.send(err);
            res.json({ reply: 'User created!' });
        });
    });

router.route('/:user_id')
    .get((req, res) => {
        User.findById(req.params.user_id, (err, user) => {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    .put((req, res) => {
        User.findById(req.params.user_id, (err, user) => {
            if (err)
                res.send(err);
            user.name = req.body.name;
            user.username = req.body.username;
            user.password = req.body.password;
            user.save((err) => {
                if (err)
                    res.send(err);
                res.json({ reply: 'User updated!' });
            });
        });
    })
    .delete((req, res) => {
        User.remove({
            _id: req.params.user_id
        }, (err, user) => {
            if (err)
                res.send(err);
            res.json({ reply: 'Successfully deleted' });
        });
    });

module.exports = router;