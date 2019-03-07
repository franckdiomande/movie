const bcrypt = require('bcryptjs');
const express = require('express');
const createToken = require('../libs/auth').createToken;
const router = express.Router();
const User = require('../models/user');

router.post('/login_check', (req, res) => {
    User.findOne({
            username: req.body.username
        })
        .then(result => {
            if (bcrypt.compareSync(req.body.password, result.password)) {
                const token = createToken({
                    username: result.username
                });

                res.send({
                    token
                })
            } else {
                res.status(400).send({
                    error: 'Invalid Credentials1'
                });
            }
        })
        .catch(error => {
            res.status(400).send({
                error: 'Invalid Credentials'
            });
        })
});

module.exports = router;