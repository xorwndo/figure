const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log("on server"); 
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/figure', function(req, res){
    res.send('피규어 팝니다')
});