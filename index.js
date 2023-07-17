var express = require('express');
var app = express();
app.get('/will', function(req,res){
    res.send('{"response": hello world"}');
});
app.get('/ready', function(req,res){
    res.send('{"response": "it works"}');
});
app.listen(process.env.PORT || 3000);
module.exports = app;