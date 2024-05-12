import express from 'express'

const app = express()
const users= []
app.use(express.json())

app.get('/api/user',(req,res)=>{
    res.status(200).send(users)
})

app.get("/api/user/:id",(req,res)=>{
    const id = req.params.id

    const user = users.find((val)=>val.id==id)
    if (!user) {
        res.status(404).end('404 Not Found')
    }
    res.status(200).send(user)
})
app.post('/api/user',(req,res)=>{
    const data = req.body
    users.push(data)
    res.status(201).send("New User Created")
})
app.put('/api/user/:id',(req,res)=>{
    const id = req.params.id
    const index = users.findIndex((val)=>val.id==id)
    if (index>=0) {
        users[index] = req.body
        res.status(200).send('user updated')
    }

    res.status(404).send('Not Found')
})
app.delete('/api/user/:id',(req,res)=>{
    const id = req.params.id
    const useres = users.find((val)=>val.id==id)
    if(!useres){
        res.status(404).end('404 Not Found')
    }

    users.splice(users.indexOf(useres),1)

    res.status(200).send('user deleted')
})


app.listen(5000,()=>console.log('Server startted successfully'))