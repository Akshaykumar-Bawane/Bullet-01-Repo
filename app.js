const http = require('http');

const server = http.createServer((req, res) => {
  res.send("AUTO CD SUCCESSFULLY WORKING 🔥🔥🔥");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
