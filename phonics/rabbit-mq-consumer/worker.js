const logger = require("../utils/logger");
var amqp = require('amqplib/callback_api');
var audioFuncs = require("../socket-io-server/funcs");
var audioPacketModels = require("../models/audio");
var audioPackets = require("../utils/packetid").audioPackets;
var amqp_url = process.env.AMQP_URL
const opt = { credentials: require('amqplib').credentials.plain(process.env.AMQP_USER, process.env.AMQP_PASS) };

amqp.connect(amqp_url, opt, function (err, conn) {
    if (err) {
        logger.warningLog("Failed to connect to RabbitMQ. Exiting!");
        console.log(err)
        process.exit(22);
    }
  conn.createChannel(function (err, ch) {
    ch.consume('phonics_outbound', function (msg) {
      //logger.mqLog(JSON.stringify(JSON.parse(msg.content.toString())));
      let packet = JSON.parse(msg.content.toString());
      switch (packet.id) {
        case audioPackets.CONTAINER:
            logger.mqLog("Container Packet");
            let containerPack = new audioPacketModels.PacketContainer(packet.uuid, packet.container);
            audioFuncs.SendContainer(containerPack)
            break;
          default:
              break;
      }
      ch.ack(msg)
      },{ noAck: false }
    );
  });
});