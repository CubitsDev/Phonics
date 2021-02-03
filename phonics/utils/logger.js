const chalk = require("chalk");

exports.primaryLog = function (text) {
  console.log(chalk.green("[Phonics Main] " + text + ""));
};

exports.serverLog = function (text) {
  console.log(chalk.magenta("[Phonics WSS] " + text + ""));
};

exports.clientLog = function (text) {
  console.log(chalk.blue("[Phonics Dashboard] " + text + ""));
};

exports.mqLog = function (text) {
  console.log(chalk.blue("[Phonics MQ Consumer] " + text + ""));
};

exports.warningLog = function (text) {
  console.log(chalk.yellow("[WARNING]" + text + ""));
};
