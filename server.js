const socket = require("socket.io")(3000)


io.on("connection", socket => {
  console.log("user connected");
  socket.emit("chat-message", "Hello world")
})

