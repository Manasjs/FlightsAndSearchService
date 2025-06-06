const express = require('express');
const cityController=require('../../controllers/city-controllers');
const router = express.Router();

router.post('/city',cityController.create);

module.exports=router;