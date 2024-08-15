const express = require("express");
const morgan = require("morgan");
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");
const router = require("./src/routes/DrugRoute");
require("dotenv").config();

const app = express();

// Connect to the database
connectDB();

// Middleware for parsing JSON
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Basic route
app.get("/", (req, res) => res.send("API is running..."));
app.get("/get-drugs", (req, res) => res.send({ para: "4 in stock" }));
app.use("/api", router);

// Define your routes here
// app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
