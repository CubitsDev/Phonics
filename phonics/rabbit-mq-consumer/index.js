const logger = require("../utils/logger");

exports.startConsumer = function () {
    logger.mqLog("Starting up RabbitMQ consumer");
    // Start Consumer here
    const client = require('./worker')
};
