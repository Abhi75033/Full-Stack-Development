const  express = require('express')
const path = require('path')
const student = require('./students.json')
// import express from'express'
// import path from 'path'

const app = express()


app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve('./home.html'))
})

app.get('/students',(req,res)=>{
    res.status(200).send(student)
})

app.get('/students/topper',(req,res)=>{
    // let topper = student[0]
    // for(let s of student){
    //     if(topper.cgpa<s.cgpa){
    //         topper = s
    //     }
    // }

    // res.status(200).send(topper)

    res.status(200).send(student.reduce((prev,curr)=>prev.cgpa<curr.cgpa?curr:prev))
    
})

app.get('/about',(req,res)=>{
    res.status(200).send('Welcome to about page')
})

app.get('/contact',(req,res)=>{
    res.status(200).send('Welcome to conact page')
})

app.listen(5000,()=>console.log('Server listining at 5000'))