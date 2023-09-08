const mongoose = require('mongoose');

// Define Vehicle schema
const vehicleSchema = new mongoose.Schema({
    regNumber: {
        type: String,
        require:true,
    },
    activePass: {
        type: String,
        require:true,
    }, // Store the pass type here
});

// Create the Vehicle model
module.exports = mongoose.model('Vehicle', vehicleSchema);

// module.exports = Vehicle;
