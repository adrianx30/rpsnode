var db = require('../dbconnection');

var news = {

    getAllNews: function (callback) {
        return db.query("Select * from news", callback);
    },
    getNewsById: function (id, callback) {
        return db.query("select * from news where Id=?", [id], callback);
    },
    addNews: function (Data, callback) {
        return db.query("insert into news(new) values(?)", [Data.new], callback);
    },
    deleteNews: function (id, callback) {
        return db.query("delete from news where Id=?", [id], callback);
    },
};
module.exports = news;