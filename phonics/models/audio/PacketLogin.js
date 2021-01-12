const { audioPackets } = require("../../utils/packetid");

class PacketLogin extends BasePacket {
  constructor(version, token) {
    this.id = audioPackets.LOGIN;
    this.version = version;
    this.token = token;
  }
  getProtocolVersion() {
    return this.version;
  }
  getToken() {
    return this.token;
  }
  fromJSON(obj) {
    this.version = obj.get("version").getAsInt();
    this.token = obj.get("token").getAsString();
    return this;
  }
  getJSON() {
    let obj = {};
    try {
      obj.id = this.id;
      obj.version = this.version;
      obj.token = this.token;
    } catch (e) {
      return null;
    }
    return obj;
  }
}
