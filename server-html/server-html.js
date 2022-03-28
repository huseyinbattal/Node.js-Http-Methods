const fs = require("fs");
const http = require("http");
const myServer = http.createServer((request, response) => {
    console.log("Request")
    fs.readFile("index.html", (err, data) => {
        if (err) {
            throw err;
        }
        response.end(data);
    })
})

myServer.listen(3000);