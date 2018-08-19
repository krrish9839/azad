var express = require('express');
var app = express();

var port = 8002;

// below statement is to execute index.html by default. 
// If your html name is different, then put your html name. for ex. (__dirname + '/demo.html')
app.use(express.static(__dirname + '/'));

// start a server on given port
app.listen(port);

console.log('Server started at : ' + port);