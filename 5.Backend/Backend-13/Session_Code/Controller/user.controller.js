const usermodel = require('../models/user.model')

const userprofile = async(req,res)=>{
try {
    const id = req.id;
    const user = await usermodel.findOne({_id:id})
    res.status(200).json(user)
} catch (error) {
    res.status(500).json({message:"Internal server error"})
}
}

module.exports={
    userprofile
}