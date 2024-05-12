import mongoose from "mongoose";

const CoustmerSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    Username:{type:String,required:true},
    Password:{type:String,required:true}
},{timestamps:true})

export const Coustmer = mongoose.model('Coustmer',CoustmerSchema)