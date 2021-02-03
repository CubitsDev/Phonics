require('dotenv').config()
const logger = require("./utils/logger");
var pjson = require("./package.json");
var dashClient = require("./dashboard-client/index");
var mqConsumer = require("./rabbit-mq-consumer/index");
var playerMap = new Map();

logger.primaryLog("Starting Phonics v" + pjson.version);

if (!process.env.DASH_LEGACY) {
    mqConsumer.startConsumer();
} else {
    logger.warningLog("Phonics is running with Dashboard legacy mode! Did you mean to do this?")
    logger.warningLog("Halting for 5 seconds before booting")
    setTimeout(dashClient.dashConnect(), 5000)
}

exports.playerMap = playerMap;
