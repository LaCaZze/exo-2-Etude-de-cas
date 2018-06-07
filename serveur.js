var express = require('express');
var server = express();


server.use(express.static('public'));

//pointe vers index seul
server.get('/', function (request, response) {
    response.sendFile(__dirname + '/Front/index.html');
});

server.get('/liste', function (request, response) {
    response.sendFile(__dirname + '/competences.json');
});


// server.get('/script', function (request, response) {
// response.sendFile(__dirname + '/public/script.js');
// }); 



server.listen(3766) 