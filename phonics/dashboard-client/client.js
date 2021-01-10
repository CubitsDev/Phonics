const WebSocket = require('ws');
const logger = require('../utils/logger')

const ws = new WebSocket('ws://pal-jfk2:7892');
logger.clientLog("Connected to Dashboard")

ws.on('open', function open() {
  ws.send(JSON.stringify({"id":22,"type":"audioserver"}));
});

ws.on('message', function incoming(data) {
    logger.clientLog(data.toString())
});