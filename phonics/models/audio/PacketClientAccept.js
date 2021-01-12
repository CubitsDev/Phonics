const { audioPackets } = require("../../utils/packetid");
const BasePacket = require("../BasePacket").BasePacket;

class PacketClientAccept extends BasePacket {
  constructor(servername) {
    super();
    this.id = audioPackets.CLIENT_ACCEPTED;
    this.servername = servername;
  }
  getJSON() {
    let obj = {};
    obj.id = this.id;
    obj.servername = this.servername;
    return obj;
  }
}

exports.PacketClientAccept = PacketClientAccept;
