const WebSocket = require('ws');
const logger = require('../utils/logger')
var wssServer = require('../wss-server/index')
var audioPackets = require('../utils/packetid').audioPackets;
var dashPackets = require('../utils/packetid').dashPackets;


const ws = new WebSocket('ws://pal-jfk2:7892');

ws.on('open', function open() {
  logger.clientLog("Connected to Dashboard")
  ws.send(JSON.stringify({"id":22,"type":"audioserver"}));
  wssServer.start()
});


ws.on('message', function incoming(data) {
  switch (JSON.parse(data).id) {
    case audioPackets.HEARTBEAT:
      logger.clientLog("Heartbeat")
      break;
    case audioPackets.LOGIN:
      logger.clientLog("Player Logged in")
      break;
    default:
      logger.clientLog("Unknown Packet! " + JSON.parse(data).id)
      break;
  }
});