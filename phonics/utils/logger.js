const chalk = require('chalk');

exports.primaryLog = function (text) {
    console.log(chalk.green("[Phonics Main] " + text + ""));
}

exports.serverLog = function (text) {
    console.log(chalk.magenta("[Phonics WSS] " + text + ""));
}

exports.clientLog = function (text) {
    console.log(chalk.cyan("[Phonics Dashboard] " + text + ""));
}