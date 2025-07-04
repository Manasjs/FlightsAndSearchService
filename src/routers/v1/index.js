const express = require('express');
const cityController = require('../../controllers/city-controllers');
const flightController = require('../../controllers/flight-controller');
const airportController = require('../../controllers/airport-controller');
const {FlightMiddleWare}= require('../../middlewares/index');
const router = express.Router();


router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.patch('/city/:id',cityController.update);
router.get('/city',cityController.getAll);
router.get('/city/:id',cityController.get);
router.post('/city/bulk',cityController.addMultipleCities);

router.post('/flights',FlightMiddleWare.validateCreateflight,flightController.create);

router.get('/flights',flightController.getAll);
router.post('/airports',airportController.create);
module.exports=router;