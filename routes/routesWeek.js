var express = require('express');
var router = express.Router();
var Week = require('../queries/queriesWeek');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        Week.getWeekById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {

        Week.getAllWeeks(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.get('/inicio/:inicio', function (req, res, next) {

    Week.getWeekByBegining(req.params.inicio, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/final/:final', function (req, res, next) {

    Week.getWeekByFinal(req.params.final, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/', function (req, res, next) {

    Week.addWeek(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = router;