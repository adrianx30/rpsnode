var db = require('../dbconnection');

var instrument = {
    getAllUsers: function (callback) {
        return db.query("Select usuario, cedula from instrumento", callback);
    },
};
module.exports = instrument;