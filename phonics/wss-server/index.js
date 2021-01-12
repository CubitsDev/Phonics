const logger = require("../utils/logger");

exports.start = function () {
  logger.serverLog("Starting the WSS Server");
  const server = require("./server");
};
