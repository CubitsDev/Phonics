const logger = require("../utils/logger");

exports.start = function () {
  logger.serverLog("Starting the Sockets Server");
  const server = require("./server");
};
