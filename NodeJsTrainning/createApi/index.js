const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const objData = fs.readFileSync(`${__dirname}/UserApi/userApi.json`, "utf-8");
  const Data = JSON.parse(objData);
  if (req.url == "/") {
    res.end("Hello from the home sides");
  } else if (req.url == "/about") {
    res.end("hello from the aboutus sides");
  } else if (req.url == "/userapi") {
    res.writeHead(200,{"content-type":"application/json"});
    console.log(Data);
    res.end(Data[3].color);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error pages.page doesn't exist</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening at port number 8000");
});
