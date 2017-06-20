var db = require('../dbconnection');

var week = {
    //DATE - format YYYY-MM-DD
    getAllWeeks: function (callback) {
        return db.query("Select * from Semana", callback);
    },
    getWeekById: function (id, callback) {

        return db.query("select * from Semana where Id=?", [id], callback);
    },
    getWeekByBegining: function (begin, callback) {

        return db.query("select * from Semana where inicio=?", [begin], callback);
    },
    getWeekByFinal: function (final, callback) {

        return db.query("select * from Semana where final=?", [final], callback);
    },

    addWeek: function (Week, callback) {
        return db.query("insert into Semana(inicio,final) values(?,?)", [Week.inicio, Week.final], callback);
    },

};
module.exports = week;