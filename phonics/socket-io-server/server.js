const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);
const logger = require("../utils/logger");
const audioPackets = require("../utils/packetid").audioPackets;
const audioPacketModels = require("../models/audio");
const mongoFuncs = require('../mongo/funcs/index');
const mc_direct_channel = require('../rabbit-mq-consumer/worker').mc_direct_channel;
let authMap = new Map();

io.on("connection", (socket) => {
  socket.on("packet", async (message) => {
    let packet = JSON.parse(message);
    logger.serverLog(JSON.stringify(message));
    switch (packet.id) {
      case audioPackets.LOGIN:
        let login = new audioPacketModels.PacketLogin(
          packet.version,
          packet.token
        );
        authMap.set(login.getToken(), socket);
        mongoFuncs.checkForToken(packet.token);
        mc_direct_channel.publish('mc_direct', 'WDW1', Buffer.from(JSON.stringify({response:true})));
        break;
      case audioPackets.HEARTBEAT:
        break;
      default:
        logger.serverLog("Unrecognised Packet ID: " + packet.id);
        break;
    }
  })
  socket.on("shows", (msg) => {
    mongoFuncs.getTodaysSchedule(socket);
  })
});
httpServer.listen(process.env.WSS_PORT);

exports.authMap = authMap;
