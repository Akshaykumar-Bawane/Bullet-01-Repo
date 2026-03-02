const http = require('http');

const server = http.createServer((req, res) => {
  res.send("AUTO DEPLOY SUCCESS 🚀 Version 2");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
