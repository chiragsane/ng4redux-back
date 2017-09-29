var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.use((req, res, next) => {
    console.log('Someone hit api/authenticate');
    next();
});

router.route('/')
    .post((req, res) => {
        User.getUserByName(req.body.username, (err, user) => {
            if (err)
                res.send(err)
            if (user)
                if (user.password === req.body.password)
                    res.json(user)
                else
                    res.json({ reply: 'User invalid!' });
            if (!user)
                res.json({ reply: 'User not found!' });
        })
    })

module.exports = router;