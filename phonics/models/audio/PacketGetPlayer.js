const { audioPackets } = require("../../utils/packetid");
const BasePacket = require("../BasePacket").BasePacket;

class PacketGetPlayer extends BasePacket {
  constructor(token) {
    super();
    this.id = audioPackets.GETPLAYER;
    this.token = token;
  }
  getToken() {
    return this.token;
  }
  getJSON() {
    let obj = {};
    try {
      obj.id = this.id;
      obj.token = this.token;
    } catch (e) {
      return null;
    }
    return obj;
  }
}

exports.PacketGetPlayer = PacketGetPlayer;
