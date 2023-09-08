const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Create a new vehicle
router.post('/vehicles', vehicleController.createVehicle);

// Fetch all vehicles
router.get('/vehicles', vehicleController.getAllVehicles);

// Add other routes for vehicle operations as needed

module.exports = router;
