const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    // expecting data from client
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); //Here data is received from client
    });
    req.on("end", () => {
      console.log(body);
      res.end("Data is received");  //Here Data is saved in database here
    });
  } else {
    console.log("Function ends here");
    res.end("Welcome to node js");
  }
});

server.listen(3100);

console.log("Server is listening on 3100");
