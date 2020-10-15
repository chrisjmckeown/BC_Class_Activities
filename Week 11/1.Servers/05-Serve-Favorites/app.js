const http = require("http");
const fs = require("fs");
const PORT = 7000;

const server = http.createServer((request, response) => {
    const path = request.url;
   // response.end("To err is human, but to really foul things up you need a computer.");
    switch (path.toLowerCase()) {
        case "/":
        case "/foods":
        case "/movies":
        case "/css":
            return displayPage(response, path.toLowerCase() + ".html");
        default:
            return displayPage(response, "notfound.html");
    }
});
server.listen(PORT,() => {
    console.log("Server listening on: http://localhost:" + PORT);
});

function displayPage(response, file) {
    const path = __dirname + "/" + file;
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
    });
}