const express= require('express');
const { userprofile} = require('../Controller/user.controller');
const authenticate = require('../middleware/auth.middleware');

const router= express.Router();

router.get('/profile',authenticate,userprofile);

module.exports=router;