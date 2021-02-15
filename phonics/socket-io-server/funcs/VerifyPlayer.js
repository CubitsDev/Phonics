var audioPacketModels = require("../../models/audio");
var authMap = require("../server");
var logger = require("../../utils/logger");
var ClientModel = require("../../models/ClientModel").ClientModel;
var clientStore = require("../../utils/ClientStore").ClientStore;
const { default: mc_direct_channel } = require("../../rabbit-mq-consumer/worker");

exports.VerifyPlayer = function (uuid, username, token, server) {
  let client;
  try {
    client = authMap.authMap.get(token);
  } catch (error) {
    logger.serverLog("Error!" + error);
  }
  if (uuid == null || username == null || token == null) {
    logger.serverLog("No UUID/Username/Token Sent for VerifyPlayer! Aborting!");
    return;
  }

  let clientObj = new ClientModel(token, client, uuid, username);
  clientStore.set(uuid, clientObj);
  let acceptPack = new audioPacketModels.PacketClientAccept(server);
  client.emit("message", JSON.stringify(acceptPack.getJSON()));

  let response = {
    id: 36,
    uuid
  };
  mc_direct_channel.publish('mc_direct', server, Buffer.from(JSON.stringify(response)));

  authMap.authMap.delete(token);
};