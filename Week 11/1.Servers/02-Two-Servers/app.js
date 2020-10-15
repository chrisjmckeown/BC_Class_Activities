const quotes = ["Quote 1","Quote 2","Quote 3","Quote 4"]

var http = require("http");
var PORT7000 = 7000;
var PORT7500 = 7500;
var server1 = http.createServer( (request, response)=>{
    response.end(quotes[Math.floor(Math.random() * quotes.length)]);
})
var server2 = http.createServer( (request, response)=>{
    response.end(quotes[Math.floor(Math.random() * quotes.length)]);
})

server1.listen(PORT7000,()=>{
    console.log("Server listening on: http://localhost:" + PORT7000);
});

server2.listen(PORT7500,()=>{
    console.log("Server listening on: http://localhost:" + PORT7500);
})