var db = require('../dbconnection');

var news = {

    getAllNews: function(callback) {
        return db.query("Select * from news", callback);
    },
    getNewsById:function(id,callback){

        return db.query("select * from news where Id=?",[id],callback);
    },
    
    addNews:function(Data,callback){
    // return db.query("Insert into usuario values(?,?,?)",[Data.Id,Data.Title,Data.Status],callback);
    return db.query("insert into news(new) values(?)",[Data.new],callback);
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
module.exports = news;