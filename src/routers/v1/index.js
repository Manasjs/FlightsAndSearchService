const express = require('express');
const cityController=require('../../controllers/city-controllers');
const router = express.Router();


router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.patch('/city/:id',cityController.update);
router.get('/city',cityController.getAll);
router.get('/city/:id',cityController.get);
router.post('/city/bulk',cityController.addMultipleCities);

module.exports=router;