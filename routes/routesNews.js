var express = require('express');
var router = express.Router();
var News = require('../queries/queriesNews');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        News.getNewsById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {

        News.getAllNews(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function (req, res, next) {

    News.addNews(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
router.delete('/delete/:id', function (req, res, next) {

    News.deleteNews(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
module.exports = router;