// controllers/tollController.js

const { Toll } = require('../models/Toll'); // Import the Toll model

// Create a new toll
const createToll = async (req, res) => {
    try {
        const newToll = new Toll(req.body);
        await newToll.save();
        res.status(201).json(newToll);
    } catch (error) {
        res.status(500).json({ error: 'Unable to create a new toll' });
    }
};

// Fetch all tolls
const getAllTolls = async (req, res) => {
    try {
        const tolls = await Toll.find();
        res.json(tolls);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch tolls' });
    }
};

// Add other controller functions as needed (update, delete, etc.)

module.exports = { createToll, getAllTolls };
