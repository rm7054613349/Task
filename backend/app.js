const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const configurationRoutes = require('./routes/configurationRoutes');
const dotenv = require("dotenv");

dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', configurationRoutes);

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
