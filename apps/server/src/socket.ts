import { Server } from "socket.io";

class SocketService {
  private _io: Server;

  constructor() {
    console.log("SocketService initialized");
    this._io = new Server({
      cors: {
        origin: "*",
        allowedHeaders: "*",
      },
    });
  }

  public initListeners() {
    const io = this.io;
    console.log("SocketService listeners initialized");
    io.on("connect", (socket) => {
      console.log(`Socket connected: ${socket.id}`);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log(`Message received: ${message}`);
        // io.emit('event:message', {message});
      });
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
