var db = require('../dbconnection');

var score = {

    getScoresWeek: function(week, callback) {
        return db.query("Select usuario.username, puntajeprueba.score from usuario, puntajeprueba where puntajeprueba.idSemana=?",[week], callback);
    },

    addUser:function(Data,callback){
        // return db.query("Insert into instrumento values(?,?,?)",[Data.Id,Data.Title,Data.Status],callback);
        return db.query("insert into puntaje(iduser,idsemana) values(?,?)",[Data.iduser,Data.idsemana],callback);
    },

    updateScore:function(week,User,callback){
        return  db.query("update puntaje set score=? where iduser=? and idsemana=?",[User.puntaje,User.iduser,week],callback);
    },
    getUserById:function(id,callback){
        return db.query("select score from puntaje where iduser=?",[id],callback);
    },
    /*
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
module.exports = score;