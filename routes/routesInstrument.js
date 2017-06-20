var express = require('express');
var router = express.Router();
var Instrument = require('../queries/queriesInstrument');

router.get('/', function (req, res, next) {
    Instrument.getAllUsers(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});
module.exports = router;