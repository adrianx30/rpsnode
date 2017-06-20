var db = require('../dbconnection');

var user = {

    getAllUsers: function (callback) {
        return db.query("Select username from usuario", callback);
    },
    getUserByUsername: function (username, callback) {

        return db.query("select * from usuario where username=?", [username], callback);
    },

    addUser: function (User, callback) {
        return db.query("insert into usuario(username,password) values(?,?)", [User.username, User.password], callback);
    },

};
module.exports = user;