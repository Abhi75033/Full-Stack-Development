const express = require('express')
const app = express()

app.get('*',(req,res)=>{
res.status(200).json({
data:"The server is Up Now"
    })
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Sever is running at ${PORT}`);
})