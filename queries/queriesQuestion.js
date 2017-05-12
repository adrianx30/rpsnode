var db = require('../dbconnection');

var question = {

    getAllQuestion: function(callback) {
        return db.query("Select * from preguntas", callback);
    },
    getQuestionById:function(id,callback){

        return db.query("select * from preguntas where Id=?",[id],callback);
    },
/*    getUserByUsername:function(username,callback){

        return db.query("select * from pregunta where username=?",[username],callback);
    },*/
    
    addQuestion:function(Question,callback){
        // return db.query("Insert into pregunta values(?,?,?)",[Question.Id,Question.Title,Question.Status],callback);
        return db.query("insert into preguntas(pregunta,hint,respuesta) values(?,?,?)",[Question.pregunta,Question.hint,Question.respuesta],callback);
    },
    deleteQuestion:function(id,callback){
            return db.query("delete from preguntas where Id=?",[id],callback);
    },
/*
    
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
module.exports = question;