const audioPackets = require("../../utils/packetid").audioPackets;
const BasePacket = require("../BasePacket").BasePacket;

class PacketContainer extends BasePacket {
  constructor(uuid, container) {
    super();
    this.id = audioPackets.CONTAINER;
    this.uuid = uuid;
    this.container = container;
  }
  getUniqueId() {
    return this.uuid;
  }
  getContainer() {
    return this.container;
  }
  getJSON() {
    let obj = {};
    try {
      obj.id = this.id;
      obj.uuid = this.uuid;
      obj.container = this.container;
    } catch (e) {
      return null;
    }
    return obj;
  }
}

exports.PacketContainer = PacketContainer;
