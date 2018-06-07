var express = require('express');
var server= express();

server.use('/static', express.static('public'));

//pointe vers index seul
server.get('/', function(request, response) {
    response.sendFile(__dirname + '/Front/index.html');
   });




server.listen(3766) 