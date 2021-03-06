const WebSocket = require("ws");
var ReconnectingWebSocket = require('rws').ReconnectingWebSocket;
const logger = require("../utils/logger");
var wssServer = require("../wss-server/index");
var audioPackets = require("../utils/packetid").audioPackets;
var dashPackets = require("../utils/packetid").dashPackets;
var audioPacketModels = require("../models/audio");
var audioFuncs = require("../wss-server/funcs");

global.ws = new ReconnectingWebSocket(process.env.DASH_WSS);

global.ws.onopen = function open() {
  logger.clientLog("Connected to Dashboard");
  ws.send(JSON.stringify({ id: 22, type: "audioserver" }));
  wssServer.start();
};

global.ws.onmessage = function incoming(event) {
  let data = event.data
  let packet = JSON.parse(data);
  switch (packet.id) {
    case audioPackets.HEARTBEAT:
      logger.clientLog("Heartbeat");
      break;
    case audioPackets.CONTAINER:
      logger.clientLog("Container Packet");
      let containerPack = new audioPacketModels.PacketContainer(packet.uuid, packet.container);
      audioFuncs.SendContainer(containerPack);
      break;
    case audioPackets.PLAYERINFO:
      logger.clientLog("PlayerInfo Packet");
      let playerInfo = new audioPacketModels.PacketPlayerInfo(
        packet.uuid,
        packet.username,
        packet.token,
        packet.server
      );
      audioFuncs.VerifyPlayer(
        playerInfo.getUniqueId(),
        playerInfo.getUsername(),
        playerInfo.getToken(),
        playerInfo.getServer()
      );
      break;
    default:
      logger.clientLog("Unknown Packet! " + packet.id);
      break;
  }
};
