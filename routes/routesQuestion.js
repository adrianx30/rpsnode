var express = require('express');
var router = express.Router();
var Question = require('../queries/queriesQuestion');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        Question.getQuestionById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {

        Question.getAllQuestion(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function (req, res, next) {

    Question.addQuestion(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
router.delete('/delete/:id', function (req, res, next) {

    Question.deleteQuestion(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});

module.exports = router;