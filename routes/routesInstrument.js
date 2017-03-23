var express = require("express");
// var router = express.Router();
var bookRouter = express.Router();
var sql = require('mssql');
/*
var config = {
    server: 'rpsudeadatabase.crximte8q0u2.us-west-2.rds.amazonaws.com', 
    database: 'rpsudeadatabase',
    user: 'rpsudea',
    password: 'rpsudea123',
    port: 3306
}


var dbInstrument = require('../queries/queriesInstrument');
router.get('/', function(req,res){
    console.log('asdfasdjfalkñsdjfalkdsjñfas')
    res.send(dbInstrument.getUser());
});

module.exports = router;*/

var router = function(){
    bookRouter.route('/')
    .get(function(req, res) {
        var request = new sql.Request();
        request.query('select usuario, cedula from instrumento', function(err, recordset){
            console.log(recordset);
        })
    });
}