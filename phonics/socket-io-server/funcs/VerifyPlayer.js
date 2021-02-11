var audioPacketModels = require("../../models/audio");
var authMap = require("../server");
var logger = require("../../utils/logger");
var ClientModel = require("../../models/ClientModel").ClientModel;
var clientStore = require("../../utils/ClientStore").ClientStore;

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
  authMap.authMap.delete(token);
};