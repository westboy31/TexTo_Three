const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {  // ✅ callback fourni
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Erreur serveur");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
