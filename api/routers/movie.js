const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const Comment = require('../models/comment');

// Get All
router.get('/', (req, res) => {
    Movie.find(req.query)
        .then(movies => {
            res.status(200).send(movies);
        })
});

// Get One
router.get('/:slug', (req, res) => {
    Movie.findOne({
            slug: req.params.slug
        })
        .then(movie => {
            if (movie) {
                res.status(200).send(movie);
            } else {
                res.sendStatus(404);
            }
        })
});

// Create One
router.post('/', (req, res) => {
    Movie.create(req.body)
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            res.status(400).send(error);
        })
});

// Update one
router.put('/:slug', (req, res) => {
    Movie.findOneAndUpdate({
            slug: req.params.slug
        }, req.body)
        .then(movie => {
            if (movie) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        })
});

// Delete One
router.delete('/:slug', (req, res) => {
    Movie.findOne({
            slug: req.params.slug
        })
        .then(movie => {
            if (movie) {
                movie.delete()
                    .then(result => {
                        res.sendStatus(200);
                    })
                    .catch(error => {
                        res.sendStatus(404);
                    })
            } else {
                res.sendStatus(404);
            }
        })
});

// Update one
router.post('/:slug/comment', (req, res) => {
    req.body.author = req.user.username;
    Movie.findOne({
            slug: req.params.slug
        })
        .then(movie => {
            if (movie) {
                Comment.create(req.body)
                    .then(comment => {
                        if (comment) {
                            movie.rating.push(req.body)
                            movie.save()
                            .then(result => {
                                res.sendStatus(200);
                            })
                            .catch(error => {
                                res.status(400).send(error);
                            })
                        } else {
                            res.sendStatus(400);
                        }
                    })
                    .catch(error => {
                        res.status(400).send(error);
                    })
            } else {
                res.sendStatus(404);
            }
        })
});

module.exports = router;