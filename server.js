const http = require("http")

const myServer = http.createServer((request, response) => {
  
    response.write("Hi Node.js!")
  
    response.end()  
})

myServer.listen(3001)