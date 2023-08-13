import { interval } from 'rxjs';
const { Server } = require("socket.io");
const io = new Server(3001, {

});

io.engine.on("initial_headers", (headers: any, req: any) => {
    headers["Access-Control-Allow-Origin"] = "http://localhost:3000";
});
  
io.engine.on("headers", (headers: any, req: any) => {
headers["Access-Control-Allow-Origin"] = "http://localhost:3000"; // url to all
});

io.on('connection', (socket: any) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

interval(1000).subscribe(() => {
    io.emit("status", ["hello", 1, 2, 3], "yo")
})