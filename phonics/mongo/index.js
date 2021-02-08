var mongoose = require('mongoose');
var logger = require('../utils/logger');

const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    auth: {
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASS
    },
    authSource: process.env.MONGO_DB
};

const MONGO_URI = `mongodb://${process.env.MONGO_ADDRESS}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

mongoose.connect(MONGO_URI, connectOptions);
//Get the default connection
var db = mongoose.connection;

db.on('connecting', () => {
    logger.mongoLog("Connecting");
});

db.on('error', (error) => {
    logger.mongoLog(`Error! ${error}`);
    mongoose.disconnect();
});

db.on('connected', () => {
    logger.mongoLog('Connected');
});

db.once('open', () => {
    logger.mongoLog('Connection opened');
});

db.on('reconnected', () => {
    logger.mongoLog('Reconnected');
});

db.on('reconnectFailed', () => {
    logger.mongoLog('Failed to Reconnect');
});

db.on('disconnected', () => {
    logger.mongoLog('Disconnected!');
});