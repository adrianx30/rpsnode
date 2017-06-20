var db = require('../dbconnection');

var score = {

    getScoresWeek: function (week, callback) {
        return db.query("Select usuario.username, puntaje.score from usuario, puntaje where usuario.id=puntaje.iduser and puntaje.idSemana=?", [week], callback);
    },

    addUser: function (Data, callback) {
        return db.query("insert into puntaje(iduser,idsemana) values(?,?)", [Data.iduser, Data.idsemana], callback);
    },

    updateScore: function (week, User, callback) {
        return db.query("update puntaje set score=? where iduser=? and idsemana=?", [User.puntaje, User.iduser, week], callback);
    },
    getUserById: function (id, callback) {
        return db.query("select score from puntaje where iduser=?", [id], callback);
    },

};
module.exports = score;