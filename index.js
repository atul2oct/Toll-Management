const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for parsing JSON requests
app.use(bodyParser.json());


// Start the server
const PORT = process.env.PORT || 3000;
const connectWithDb=require('./config/database');
connectWithDb();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
