const { TollBooth } = require('../models/TollBooth'); // Import the TollBooth model

// Create a new toll booth
const createTollBooth = async (req, res) => {
    try {
        const newTollBooth = new TollBooth(req.body);
        await newTollBooth.save();
        res.status(201).json(newTollBooth);
    } catch (error) {
        res.status(500).json({ error: 'Unable to create a new toll booth' });
    }
};

// Fetch all toll booths
const getAllTollBooths = async (req, res) => {
    try {
        const tollBooths = await TollBooth.find();
        res.json(tollBooths);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch toll booths' });
    }
};

// Add other controller functions as needed (get by ID, update, delete, etc.)

module.exports = {
    createTollBooth,
    getAllTollBooths,
};
