const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register
router.post('/register', (req, res) => {
    User.create(req.body)
        .then(data => {
            res.sendStatus(201);
        }).catch(error => {
            res.status(400).send(error);
        })
});

module.exports = router;