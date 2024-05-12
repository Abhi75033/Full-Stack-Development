const jwt= require('jsonwebtoken');
const authenticate = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send({message:'Unauthorized access'})
    }
    const decode= jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){
        return res.status(401).send({message:'Unauthorized access'})
    }
    req.id= decode.id;
    next();
}

module.exports = authenticate