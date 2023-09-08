const { Vehicle } = require('../models/Vehicle'); // Import the Vehicle model

// Create a new vehicle
const createVehicle = async (req, res) => {
    try {
        const newVehicle = new Vehicle(req.body);
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ error: 'Unable to create a new vehicle' });
    }
};

// Fetch all vehicles
const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch vehicles' });
    }
};

// Add other controller functions as needed (get by ID, update, delete, etc.)

module.exports = {
    createVehicle,
    getAllVehicles,
};
