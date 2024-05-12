import express from 'express'

const app = express()

app.use(express.json())

const products = []

app.get('/api/product',(req,res)=>{
    if (!products.length) {
        res.send('Products empty')
    }
    res.send(products)
})

app.get('/api/product/:id',(req,res)=>{
    const id = req.params.id
    const product = products.find((pro)=>pro.id==id)

    if (!product) {
        res.status(404).send('Not Found')
    }
    res.status(200).send(product)
})

app.post('/api/product',(req,res)=>{
   const data = req.body
   products.push(data)
   res.status(201).send(data)
})

app.put('/api/product/:id',(req,res)=>{
    const id = req.params.id
    const Index = products.findIndex((val)=>val.id==id)
    if (Index>=0) {
        products[Index]=req.body
        res.status(200).send('Updated successfully')
    }
    res.status(404).send('Not Found')
})

app.delete('/api/product/:id',(req,res)=>{
    const id = req.params.id
   const product =  products.find((val)=>val.id==id)
   if (!product) {
    res.status(404).send('Not Found')
   }
    products.splice(products.indexOf(product),1)
    res.status(200).send('Deleted')
})

app.listen(5000,(req,res)=>console.log('Server is started'))