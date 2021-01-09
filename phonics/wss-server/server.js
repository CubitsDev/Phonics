var express = require('express');
var app = express();
var logger = require('../utils/logger')
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', function(socket){
    logger.serverLog("Client Connected")
  socket.on('test', function(msg){
    logger.serverLog("Message Recieved")
  });
});

http.listen(3000, function(){
    logger.serverLog('Socket Opened Up');
});