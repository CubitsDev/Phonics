const { audioPackets } = require("../../utils/packetid");
const BasePacket = require("../BasePacket").BasePacket;

class PacketLogin extends BasePacket {
  constructor(version, token) {
    super();
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

exports.PacketLogin = PacketLogin;
