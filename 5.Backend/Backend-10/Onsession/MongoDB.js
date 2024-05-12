import mongoose from 'mongoose'

const uri = 'mongodb://localhost:27017/skillacademy'

const connectDB = async () => {
    try {
        const resp = await mongoose.connect(uri)
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Error connecting to MongoDB',error);
    }
}

export {connectDB}
