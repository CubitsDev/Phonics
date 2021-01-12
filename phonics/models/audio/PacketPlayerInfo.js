const { audioPackets } = require("../../utils/packetid");
const BasePacket = require("../BasePacket").BasePacket;

class PacketPlayerInfo extends BasePacket {
  constructor(uuid, username, token, server) {
    super();
    this.id = audioPackets.PLAYERINFO;
    this.uuid = uuid;
    this.username = username;
    this.token = token;
    this.server = server;
  }

  getUniqueId() {
    return this.uuid;
  }
  getUsername() {
    return this.username;
  }
  getToken() {
    return this.token;
  }
  getServer() {
    return this.server;
  }
  getJSON() {
    let obj = {};
    obj.id = this.id;
    obj.uuid = this.uuid;
    obj.username = this.username;
    obj.token = this.token;
    obj.server = this.server;
    return obj;
  }
}

exports.PacketPlayerInfo = PacketPlayerInfo;
