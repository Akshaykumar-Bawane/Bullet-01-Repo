const http = require('http');

const server = http.createServer((req, res) => {
  res.send("AUTO CD SUCCESSFULLY WORKING... 🔥🔥🔥");
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on 0.0.0.0");
});