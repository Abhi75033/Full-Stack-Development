const http = require('http')

const server=http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/html'})
    // *Heilight: important it will help the server to detect weather it is plain text or html text
    res.write('<h1>Hello, I am from node.js server</h1><hr>')
    res.end()
})

server.listen(5000,()=>console.log(`Server is running on Porn no 5000`))

