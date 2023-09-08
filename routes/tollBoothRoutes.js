const express = require('express');
const router = express.Router();
const tollBoothController = require('../controllers/tollBoothController');

// Create a new toll booth
router.post('/tollbooths', tollBoothController.createTollBooth);

// Fetch all toll booths
router.get('/tollbooths', tollBoothController.getAllTollBooths);

// Add other routes for toll booth operations as needed

module.exports = router;
