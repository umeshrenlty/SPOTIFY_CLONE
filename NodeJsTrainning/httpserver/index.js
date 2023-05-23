const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello from the others side umesh sahoo");
  } else if (req.url === "/about") {
    res.end("hello from the about us sides");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("page does not exist");
  }
  // res.end("hello from the others side umesh sahoo");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening at port number 8000");
});
