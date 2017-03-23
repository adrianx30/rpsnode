var express = require('express');
// var bodyParser = require('body-parser');
var routesInstrument = require('./routes/routesInstrument');
/*var routesScore = require('./routes/routesScore');*/

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
    res.send('Holaaaaaaaaa');
});

app.listen(app.get('port'), function() {
	console.log('Puerto ' + app.get('port') + ' escuchando');
});

// app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/instrument/', routesInstrument);
// app.use('/api/score/', routesScore);

module.exports = app;
