import { socket } from "../client";
import audioPacketModels from "../../models/audio";

export default function RequestPlayer(token) {
    let packet = new audioPacketModels.PacketGetPlayer(token)
    socket.send(packet.getJson())
}
