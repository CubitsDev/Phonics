var logger = require("../utils/logger");
const audioPackets = require("../utils/packetid").audioPackets;
const audioPacketModels = require("../models/audio");
const dashFuncs = require("../dashboard-client/funcs");

const serverPort = process.env.WSS_PORT,
  http = require("http"),
  express = require("express"),
  app = express(),
  server = http.createServer(app),
  WebSocket = require("ws"),
  websocketServer = new WebSocket.Server({ server });
let authMap = new Map();

websocketServer.on("connection", (webSocketClient) => {
  webSocketClient.on("message", (message) => {
    logger.serverLog(message);
    let packet = JSON.parse(message);
    switch (packet.id) {
      case audioPackets.LOGIN:
        let login = new audioPacketModels.PacketLogin(
          packet.version,
          packet.token
        );
        authMap.set(login.getToken(), webSocketClient);
        dashFuncs.RequestPlayer(login.getToken());
        break;
      case audioPackets.HEARTBEAT:
        break;
      default:
        logger.serverLog("Unrecognised Packet ID: " + packet.id);
        break;
    }
    //for each websocket client
    // websocketServer
    // .clients
    // .forEach( client => {
    //     //send the client the current message
    //     client.send(`{ "message" : ${message} }`);
    // });
  });
});

//start the web server
server.listen(serverPort, () => {
  logger.serverLog(`Websocket server started on port ` + serverPort);
});

exports.authMap = authMap;
exports.websocketServer = websocketServer;
