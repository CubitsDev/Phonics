const WebSocket = require('ws');
const logger = require('../utils/logger')

const ws = new WebSocket('');
logger.clientLog("Connected to Dashboard")

ws.on('open', function open() {
  ws.send('test');
});

ws.on('message', function incoming(data) {
    logger.clientLog(data.toString())
});