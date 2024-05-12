const express= require('express');
const mongoose= require('mongoose');
require('dotenv').config();
const cors = require('cors')

mongoose.connect(process.env.MONGO_URI,{dbName:'Demo1'})
    .then(()=>console.log('Connected'))
    .catch(err=>console.log('error occured',err));

const app= express();
app.use(express.json());
app.use(cors())
app.use('/api/auth',require('./routes/auth.route'));
app.use('/api/user',require('./routes/user.route'));

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to the PORT: ${process.env.PORT}`);
})