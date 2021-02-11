const { ShowModel } = require('../models');
require('../models');
var socketFuncs = require('../../socket-io-server/funcs/index')
var logger = require('../../utils/logger');

exports.getTodaysSchedule = function (socket) {
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    ShowModel.find({day: dayName}, function (err, res) {
        if (err) {
            logger.mongoLog('Error running getTodaysSchedule: ' + err);
        }
        socketFuncs.SendShows(socket, res);
    })
}