require('dotenv').config()
const logger = require("./utils/logger");
var pjson = require("./package.json");
var dashClient = require("./dashboard-client/index");
var socketServer = require("./socket-io-server/index");
var mqConsumer = require("./rabbit-mq-consumer/index");
var playerMap = new Map();

async function startup() {
    logger.primaryLog("Starting Phonics v" + pjson.version);
    if (!process.env.DASH_LEGACY | process.env.DASH_LEGACY === false) {
        await require("./mongo/index");
        socketServer.start();
        mqConsumer.startConsumer();
    } else {
        logger.warningLog("Phonics is running with Dashboard legacy mode! Did you mean to do this?")
        logger.warningLog("Halting for 5 seconds before booting")
        setTimeout(() => dashClient.dashConnect(), 5000)
    }
}

startup();

exports.playerMap = playerMap;
