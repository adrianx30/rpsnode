var express = require('express');
var router = express.Router();
var Score = require('../queries/queriesScore');

router.get('/week/:id', function (req, res, next) {

    Score.getScoresWeek(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});

router.get('/get/user/:id', function (req, res, next) {

    Score.getUserById(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});

router.post('/add/user', function (req, res, next) {

    Score.addUser(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

router.put('/update/week/:id', function (req, res, next) {

    Score.updateScore(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;