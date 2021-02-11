const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);
const logger = require("../utils/logger");
const audioPackets = require("../utils/packetid").audioPackets;
const audioPacketModels = require("../models/audio");
const mongoFuncs = require('../mongo/funcs/index');
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
        await authMap.set(login.getToken(), socket);
        mongoFuncs.checkForToken(packet.token)
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
