var db = require('../dbconnection');

var instrument = {

    getAllUsers: function(callback) {
        return db.query("Select usuario, cedula from instrumento", callback);
    },
    /*getUserById:function(id,callback){

        return db.query("select * from instrumento where Id=?",[id],callback);
    },
    addUser:function(User,callback){
       console.log("inside service");
       console.log(User.Id);
    return db.query("Insert into instrumento values(?,?,?)",[User.Id,User.Title,User.Status],callback);
    //return db.query("insert into instrumento(Id,Title,Status) values(?,?,?)",[User.Id,User.Title,User.Status],callback);
    },
    deleteUser:function(id,callback){
        return db.query("delete from instrumento where Id=?",[id],callback);
    },
    updateUser:function(id,User,callback){
        return  db.query("update instrumento set Title=?,Status=? where Id=?",[User.Title,User.Status,id],callback);
    },
    deleteAll:function(item,callback){

    var delarr=[];
       for(i=0;i<item.length;i++){

           delarr[i]=item[i].Id;
       }
       return db.query("delete from instrumento where Id in (?)",[delarr],callback);
    }*/
};
module.exports = instrument;