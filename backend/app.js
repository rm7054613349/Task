const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require("./config/database");
const configurationRoutes = require('./routes/configurationRoutes');
const dotenv = require("dotenv");

database.connect();

dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', configurationRoutes);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
