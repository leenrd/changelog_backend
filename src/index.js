const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
