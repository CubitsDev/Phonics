const audioPacketModels = require("../../models/audio");

exports.RequestPlayer = function (token) {
  let packet = new audioPacketModels.PacketGetPlayer(token);
  global.ws.send(JSON.stringify(packet.getJSON()));
};
