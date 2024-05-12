import express from 'express'
import { auth, isAdmin } from './auth.js'
import cors from 'cors'
import { route } from './product.route.js'



// ----------Inbuilt middleware
const app = express()
// -------app.use(middleware) is genral form all routes------------------->

app.use((req,res,next)=>{
    console.log('Genral Middleware');
    next()
})
//---Extrenal or thirdparty middleware--------------->

app.use(cors())

app.use(express.json())
//----------------auth and isAdmin is userDefined middleware----------->

app.set('view engine','pug')

app.get('/welcome',(req,res)=>{
    res.render('index')
})

app.get('/message',(req,res)=>{
    res.render('message',{tittle:"Greeting",message:"Hello everyone"})
})

app.get('/api/users', async (req,res)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    res.render('apiusers',{users:json})
})

app.get('/users',(req,res)=>{
    res.render('user',{
        users:[
            {id:1,name:"Alex",country:"USA"},
            {id:2,name:"Bob",country:"UK"},
            {id:3,name:"catty",country:"Brazil"}
        ]
    })
})

app.get('/profile',auth,(req,res)=>{
    res.send('You are on Profile page')
})

app.get('/sales',auth,isAdmin,(req,res)=>{
res.status(200).send('Sale page')
})

app.get('/',(req,res)=>{
    res.status(200).send('Home page')
})

app.use("/api/product",route)

app.use('/info',express.static('website'))

app.listen(5000,()=>console.log('Server Started'))