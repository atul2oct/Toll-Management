const express=require('express');

const router=express.Router();

console.log('router loaded');
//any request /user
router.use('/tollbooths',require('./tollBoothRoutes'));
router.use('/tolls',require('./tollRoutes'));
router.use('/vehicles',require('./vehicleRoutes'));
//for any further routes, access from here
module.exports=router;