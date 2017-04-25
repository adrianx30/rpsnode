var db = require('../dbconnection');

var user = {

    getAllUsers: function(callback) {
        return db.query("Select username from usuario", callback);
    },
/*    getUserById:function(id,callback){

        return db.query("select * from usuario where Id=?",[id],callback);
    },*/
    getUserByUsername:function(username,callback){

        return db.query("select * from usuario where username=?",[username],callback);
    },
    
    addUser:function(User,callback){
    // return db.query("Insert into usuario values(?,?,?)",[User.Id,User.Title,User.Status],callback);
    return db.query("insert into usuario(username,password) values(?,?)",[User.username,User.password],callback);
    },
/*
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
module.exports = user;