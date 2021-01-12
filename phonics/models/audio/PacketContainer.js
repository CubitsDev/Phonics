const audioPackets = require("../../utils/packetid").audioPackets;

class PacketContainer extends BasePacket {
  constructor(uuid, container) {
    this.id = audioPackets.CONTAINER;
    this.uuid = uuid;
    this.container = container;
  }
  getUniqueId() {
    return uuid;
  }
  getContainer() {
    return container;
  }
  fromJSON(obj) {
    this.id = parseInt(obj.id);
    this.uuid = obj.uuid.toString();
    this.container = obj.container.toString();
    return this;
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
