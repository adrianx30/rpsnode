var sql = require('mssql');

var config = {
    server: 'rpsudeadatabase.crximte8q0u2.us-west-2.rds.amazonaws.com', 
    database: 'rpsudeadatabase',
    user: 'rpsudea',
    password: 'rpsudea123',
    port: 3306
}

function getUser(){
    console.log('asssssssssssssssssssssssss')
    sql.Connection.connect().then(function(){
         new sql.Request()
    .query('select usuario, cedula from instrumento').then(function(recordset) {
        return recordset
        console.dir(recordset);
    }).catch(function(err) {
        // ... error checks 
    });
 
    // Stored Procedure 
    
   /* new sql.Request()
    .input('input_parameter', sql.Int, value)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name').then(function(recordsets) {
        console.dir(recordsets);
    }).catch(function(err) {
        // ... error checks 
    });*/
    }).catch(function(err) {
    // ... error checks 
    });
    /*var conn = new sql.Connection(config);
    
    conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query("SELECT usuario, cedula FROM instrumento").then(function (recordset) {
            console.log(recordset);
            return recordset;
            conn.close();
        })
        .catch(function (err) {
            console.log(err);
            conn.close();
        });        
    })
    .catch(function (err) {
        console.log(err);
    });*/
}