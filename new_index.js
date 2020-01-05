var express = require ('express');
var app = express();
var fs = require('fs');

app.post('/newUser', function(req, res){
var id = req.body.id;
var name = req.body.name;
var departemnt = req. body.departemnt;
var experience = req.body.experience; 

var data = JSON.stringify(req.body);

fs.appendFile('mynewfile1.json', data, function(err){
    if(err) throw err;
    console.log('Done posting data');
});
});

app.listen(8080, function(req, res){
    console.log("Server running"); 
})
