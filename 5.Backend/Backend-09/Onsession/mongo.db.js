import { MongoClient } from "mongodb";

const uri = 'mongodb://localhost:27017'

MongoClient.connect(uri)
.then(resp=>console.log('Connected to MongoDB'))
.catch(err=> console.log('Error connecting to MongoDB',err))

const connectMongo = async()=>{
    try {
     const resp = await MongoClient.connect(uri)
        console.log('Connected to MongoDB');
        const db = resp.db('skillacademy')
        const collection = db.collection('students')
        const insertResult = await collection.insertOne({name:"Shaun",email:"shaun@gmail.com",country:'Australia',age:25})
    console.log(insertResult);
    } catch (error) {
        console.log('Error connecting to MongoDB',error);
    }
}

connectMongo()