const express = require("express");
const app = express();
const cors = require('cors');
const drugsRoutes = require('./drugs');
require('dotenv').config();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors());

// Drug Routes
app.use('/api/drugs', drugsRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});