const audioPackets = require('../../utils/packetid').audioPackets;

// class PacketContainer extends BasePacket {
//     #uuid = "";
//     #container = ""

//     constructor(uuid, container) {
//         this.#id = audioPackets.CONTAINER;
//         this.#uuid = uuid;
//         this.#container = container;
//     }
// }

class PacketContainer extends BasePacket {
    constructor(uuid, container) {
      this.id = PacketID.CONTAINER.getID();
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
      this.id = obj.get('id').getAsInt();
      try {
        this.uuid = UUID.fromString(obj.get('uuid').getAsString());
      } catch (e) {
        this.uuid = null;
      }
      this.container = obj.get('container').getAsString();
      return this;
    }
    getJSON() {
      let obj = {}
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
  