var db = require('../dbconnection');

var week = {
//DATE - format YYYY-MM-DD
    getAllWeeks: function(callback) {
        return db.query("Select * from Semana", callback);
    },
    getWeekById:function(id,callback){

        return db.query("select * from Semana where Id=?",[id],callback);
    },
    getWeekByBegining:function(begin,callback){

        return db.query("select * from Semana where inicio=?",[begin],callback);
    },
    getWeekByFinal:function(final,callback){

        return db.query("select * from Semana where final=?",[final],callback);
    },
    
    addWeek:function(Week,callback){
    // return db.query("Insert into Semana values(?,?)",[Week.inicio,Week.final],callback);
    return db.query("insert into Semana(inicio,final) values(?,?)",[Week.inicio,Week.final],callback);
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
module.exports = week;