var db = require('../dbconnection');

var question = {

    getAllQuestion: function (callback) {
        return db.query("Select * from preguntas", callback);
    },
    getQuestionById: function (id, callback) {
        return db.query("select * from preguntas where Id=?", [id], callback);
    },
    addQuestion: function (Question, callback) {
        return db.query("insert into preguntas(pregunta,hint,respuesta) values(?,?,?)", [Question.pregunta, Question.hint, Question.respuesta], callback);
    },
    deleteQuestion: function (id, callback) {
        return db.query("delete from preguntas where Id=?", [id], callback);
    },
};
module.exports = question;