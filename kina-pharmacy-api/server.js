const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get("/api/drugs", (req, res) => {
  res.json(drugs);
});

app.get("/api/drugs/:id", (req, res) => {
  const drugId = parseInt(req.params.id);
  const drug = drugs.find((d) => d.id === drugId);
  if (drug) {
    res.json(drug);
  } else {
    res.status(404).json({ message: "Drug not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
