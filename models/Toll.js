const mongoose = require('mongoose');

// Define Toll schema
const tollSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    booths: [{ 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'TollBooth',
         }],
    passes: {
        SinglePass: Number,
        ReturnPass: Number,
        SevenDayPass: Number
    }
});

// Create the Toll model
module.exports = mongoose.model('Toll', tollSchema);

// module.exports = Toll;
