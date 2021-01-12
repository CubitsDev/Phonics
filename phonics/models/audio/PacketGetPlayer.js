const { audioPackets } = require("../../utils/packetid");

class PacketGetPlayer extends BasePacket {
  constructor(token) {
    this.id = audioPackets.GETPLAYER;
    this.token = token;
  }
  getToken() {
    return this.token;
  }
  fromJSON(obj) {
    this.id = parseInt(obj.id);
    this.token = obj.token.toString();
    return this;
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
