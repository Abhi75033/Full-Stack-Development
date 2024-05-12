import { register } from "../models/auth.model.js";


const registerUser= async(req,res)=>{
const {name,email,username,password}=req.body
if (!name||!email||!username||!password) {
    return res.status(400).json({messge:"All feilds are mandetory"})
}
const user = await register.findOne({email})
if (user) {
    return res.status(400).json({messge:"User is already registerd with us"})
}



}

export default{
    registerUser
}