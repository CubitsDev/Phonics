const logger = require('./utils/logger');
var pjson = require('./package.json');
var wssServer = require('./wss-server/index')
var dashClient = require('./dashboard-client/index')

logger.primaryLog("Starting Phonics v" + pjson.version)
wssServer.start()
dashClient.dashConnect()