var mysql=require('mysql');
var connection=mysql.createPool({
 
    host: 'rpsudeadatabase.crximte8q0u2.us-west-2.rds.amazonaws.com', 
    database: 'rpsudeadatabase',
    user: 'rpsudea',
    password: 'rpsudea123',
    port: 3306
 
});
 module.exports=connection;