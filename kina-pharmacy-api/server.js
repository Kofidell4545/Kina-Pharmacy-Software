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
    ...stomachUpsetsData,
    ...antibioticsData,
    ...bloodTonicsData,
    ...coughSyrupsData,
    ...dewormersData,
  ];

  res.json(allDrugs);
});

// Route to get herbal drugs
app.get("/api/drugs/herbal", (req, res) => {
    res.json(herbalDrugsData);
});

// Route to get malaria drugs
app.get("/api/drugs/malaria", (req, res) => {
    res.json(malariaDrugsData);
});

// Route to get multivitamin drugs
app.get("/api/drugs/multivitamins", (req, res) => {
    res.json(multivitaminsData);
});

// Route to get stomach upset drugs
app.get("/api/drugs/stomachupsets", (req, res) => {
    res.json(stomachUpsetsData);
});

// Route to get antibiotics drugs
app.get("/api/drugs/antibiotics", (req, res) => {
    res.json(antibioticsData);
});

// Route to get blood tonic drugs
app.get("/api/drugs/bloodtonics", (req, res) => {
    res.json(bloodTonicsData);
});

// Route to get cough syrups drugs
app.get("/api/drugs/cough-cold-syrups", (req, res) => {
    res.json(coughSyrupsData);
});

// Route to get dewormer drugs
app.get("/api/drugs/dewormer", (req, res) => {
    res.json(dewormersData);
});
  

// Routes to get drugs by their id
app.get("/api/drugs/:id", (req, res) => {
  const drugId = parseInt(req.params.id);
  const allDrugs = [
    ...herbalDrugsData,
    ...malariaDrugsData,
    ...multivitaminsData,
    ...stomachUpsetsData,
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
