const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;

// Importing drugs data from categories
const herbalDrugsData = require("./Drugs/HDrugs");
const malariaDrugsData = require("./Drugs/MDrugs");
const multivitaminsData = require("./Drugs/Multivitamins");
const stomachUpsetsData = require("./Drugs/SUpsets");
const antibioticsData = require("./Drugs/Antibiotics");
const bloodTonicsData = require("./Drugs/BTonics");
const coughSyrupsData = require("./Drugs/CCSyrups");
const dewormersData = require("./Drugs/Dewormers");

// Middleware to parse JSON bodies
app.use(cors());


// Drug Routes
app.get("/api/drugs", (req, res) => {
  const allDrugs = [
    ...herbalDrugsData,
    ...malariaDrugsData,
    ...multivitaminsData,
    ...stomachUpsetsData, // Add the spread operator here
    ...antibioticsData,
    ...bloodTonicsData,
    ...coughSyrupsData,
    ...dewormersData,
  ];

  res.json(allDrugs);
});

// Routes to get drugs by their id
app.get("/api/drugs/:id", (req, res) => {
  const drugId = parseInt(req.params.id);
  const allDrugs = [
    ...herbalDrugsData,
    ...malariaDrugsData,
    ...multivitaminsData,
    ...stomachUpsetsData, // Add the spread operator here
    ...antibioticsData,
    ...bloodTonicsData,
    ...coughSyrupsData,
    ...dewormersData,
  ];
  const drug = allDrugs.find((d) => d.id === drugId);
  if (drug) {
    res.json(drug);
  } else {
    res.status(404).json({ message: "Drug not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
