const auth = (req,res,next)=>{
    console.log('User Authentication successfull');
        next()  
    
    
}

const isAdmin = (req,res,next)=>{
    console.log('User is Admin');
    next()
}

export {auth,isAdmin}