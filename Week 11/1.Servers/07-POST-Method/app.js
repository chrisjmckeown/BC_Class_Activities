const http = require("http");
var fs = require("fs");
const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
    const path = req.url;
    // response.end("To err is human, but to really foul things up you need a computer.");
    switch (path.toLowerCase()) {
        case "/trigger":
            return displayPage(req, res);
        default:
            return displayIndex(res, "index.html");
    }
});

function displayIndex(res, file) {
    const path = __dirname + "/" + file;
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayPage(req, res) {
    var requestData = "";
    var myHTML = "<html><head><title>Error</title></head><body><h1>Error</h1><a href='/'>Home</a></body></html>";

    req.on("data", function (data) {
        requestData += data;
        myHTML =
            `<html><head><title>You send mail</title></head><body>
            <p><a href='/'>Home</a></p>
            <h1>Thank you for the data: </h1>
            <h2> ${requestData} </h2>
            </body></html>`;
    });
    req.on("end", function () {
        console.log("You did a", req.method, "with the data:\n", requestData);
        res.end(myHTML);
    });
}

server.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});
