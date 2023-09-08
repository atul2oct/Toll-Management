const express = require('express');
const router = express.Router();
const tollController = require('../controllers/tollController');

// Create a new toll
router.post('/tolls', tollController.createToll);

// Fetch all tolls
router.get('/tolls', tollController.getAllTolls);

// Fetch a specific toll by ID
router.get('/tolls/:id', tollController.getTollById);

// Update a specific toll by ID
router.put('/tolls/:id', tollController.updateTollById);

// Delete a specific toll by ID
router.delete('/tolls/:id', tollController.deleteTollById);

module.exports = router;
