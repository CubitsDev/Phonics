class ClientModel {
  constructor(token, socket, uuid, username) {
    this.token = token;
    this.socket = socket;
    this.uuid = uuid;
    this.username = username;
  }

  getToken() {
    return this.token;
  }

  getSocket() {
    return this.socket;
  }

  getUuid() {
    return this.uuid;
  }

  setUuid(uuid) {
    this.uuid = uuid;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  setToken(token) {
    this.token = token;
  }
}

exports.ClientModel = ClientModel;
