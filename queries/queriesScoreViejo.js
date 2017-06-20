var db = require('../dbconnection');

var score = {

    getScoresWeek: function (week, callback) {
        var aux = "semana" + week;
        return db.query("Select username, " + aux + " from puntajes", callback);
    },

    addUser: function (User, callback) {
        return db.query("insert into puntajes(userID,username) values(?,?)", [User.id, User.name], callback);
    },

    updateScore: function (week, User, callback) {
        var aux = "semana" + week;
        return db.query("update puntajes set " + aux + "=? where userID=?", [User.puntaje, User.userID], callback);
    },

};
module.exports = score;