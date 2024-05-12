import { connectDB } from "./MongoDB.js";
import { Coustmer } from "./model/coustmer.model.js";
import { Product } from "./model/Product.model.js";

connectDB()

const getCoustAndUpdate = async(id,name,Password)=>{
    try {
        const resp = await Coustmer.findByIdAndUpdate(id,{name,Password})
        if (resp) {
           return console.log(resp);  
        }
        return console.log('Coustmer not found to update');
    } catch (error) {
        console.log(error);
    }
}

const getCoustAndDelete = async(id)=>{
    try {
        const resp = await Coustmer.findByIdAndDelete(id)
        if (resp) {
           return console.log(resp);  
        }
        return console.log('Coustmer not found to Delete');
    } catch (error) {
        console.log(error);
    }
}

const getCoustByID = async(id)=>{
    try {
        const resp = await Coustmer.findById(id)
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}
const getCoustByEmail = async(email)=>{
    try {
        const resp = await Coustmer.findOne({email})
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

// getCoustByID('660967101594237071a57785')
// getCoustByEmail('catty@gmail.com')
// getCoustAndUpdate('660967101594237071a57785','Abhishek','Abhi2050@')
// getCoustAndDelete('660967101594237071a57785')

const getAllCoust = async()=>{
    try {
        const resp = await Coustmer.find({},{_id:0,createdAt:0,updatedAt:0,__v:0})
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

// getAllCoust()
const addCoustmer = async (name,email,Username,Password)=>{
    try {
        const newCoustmer = new Coustmer({name,email,Username,Password})
        const resp = await newCoustmer.save()
        console.log(resp);
    } catch (error) {
        console.log('Something Went wrong',error);
    }
}

const addProducts = async (name,Price,discription,category)=>{
    try {
        const newProduct = new Product({name,Price,discription,category})
        const resp = await newProduct.save()
        console.log(resp);
    } catch (error) {
        console.log('Something Went wrong',error);
    }
}

addProducts('Headphone',999,'Best HeadPhone','Electronics')

// addCoustmer('catty','catty@gmail.com','catty2534564','13266788')


