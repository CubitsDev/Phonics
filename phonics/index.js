require('dotenv').config()
const logger = require("./utils/logger");
var pjson = require("./package.json");
var dashClient = require("./dashboard-client/index");
var playerMap = new Map();

logger.primaryLog("Starting Phonics v" + pjson.version);
dashClient.dashConnect();

exports.playerMap = playerMap;
