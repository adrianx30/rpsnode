var express = require('express');
var router = express.Router();
var User = require('../queries/queriesUser');

router.get('/:username?', function (req, res, next) {

    if (req.params.username) {

        User.getUserByUsername(req.params.username, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {

        User.getAllUsers(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function (req, res, next) {

    User.addUser(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = router;