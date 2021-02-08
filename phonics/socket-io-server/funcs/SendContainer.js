var logger = require("../../utils/logger");
var clientStore = require("../../utils/ClientStore").ClientStore;

exports.SendContainer = function (containerPack) {
  let client;
  if (containerPack == null) {
    logger.serverLog("No UUID/Container Sent for SendContainer! Aborting!");
    return;
  }
  try {
    client = clientStore.get(containerPack.getUniqueId()).socket;
  } catch (error) {
    return;
  }
  if (client == null) {
    logger.serverLog("No Client found for SendContainer! Aborting!");
    return;
  }
  client.emit("message", JSON.stringify(JSON.parse(containerPack.getJSON().container)));
};
