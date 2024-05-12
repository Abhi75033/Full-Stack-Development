const http = require('http')
const fs = require('fs')

const server=http.createServer((req,res)=>{

   if(req.url=='/about'){
    fs.readFile('./file/About.html',(err,data)=>{
        if (err) {
           throw err 
        }
    res.end(data.toString())
    })
   }
   
  else if(req.url=='/contact'){

fs.readFile('./file/Contact.html',(err,data)=>{
    if (err) {
        throw err
    }

    return res.end(data.toString())
})

  }else if(req.url=='/news'){
    fs.readFile('./file/news.html',(err,data)=>{
        if (err) {
            throw err
        }

        return res.end(data.toString())
    })
   }
   

else  fs.readFile('./file/home.html',(err,data)=>{
    if (err) {
       return res.end(`<h1>404 Not Found </h1>`) 
    }
    return res.end(data.toString())

})
})

server.listen(5000,()=>console.log(`Server is running on Porn no 5000`))

