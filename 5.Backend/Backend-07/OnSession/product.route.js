import expres from 'express'

const route = expres.Router()

route.get('/',(req,res)=>{
    res.status(200).send('Product page')
})

route.get('/:id',(req,res)=>{
    // const id = req.params.id
    res.status(200).send('This product no')
})

export {route}
