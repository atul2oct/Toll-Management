const mongoose = require('mongoose');

// Define TollBooth schema
const tollBoothSchema = new mongoose.Schema({
    number: {
        type: Number,
        require:true,
    },
    vehicleCount: {
        type: Number,
        require:true,
    },
    tollChargesCollected: {
        type: Number,
        require:true,
    },
});

// Create the TollBooth model
module.exports = mongoose.model('TollBooth', tollBoothSchema);

// module.exports = TollBooth;
