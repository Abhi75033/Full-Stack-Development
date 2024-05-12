import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name:{type:String,required:true},
    Price:{type:Number},
    discription:{type:String,required:true},
    category:{type:String,required:true}
},{timestamps:true})

export const Product = mongoose.model('Product',ProductSchema)