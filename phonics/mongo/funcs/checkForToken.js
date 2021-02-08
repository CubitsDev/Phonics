const { PlayerModel } = require('../models');

require('../models');
var socketFuncs = require('../../socket-io-server/funcs/index')
var logger = require('../../utils/logger');
exports.checkForToken = function (token) {
    PlayerModel.findOne({online: true, "onlineData.audioToken": token}, function (err, res) {
        if (err) {
            logger.mongoLog('Error running checkForToken: ' + err);
        }
        if (res == null) {
            logger.mongoLog("This person is not online or token is wrong.")
            return
        }
        if (res.online === true && res.onlineData.audioToken === token) {
            socketFuncs.VerifyPlayer(res.uuid, res.username, token, res.onlineData.server)
        } else {
            logger.mongoLog("This person is not online or token is wrong.")
        }
    })
}