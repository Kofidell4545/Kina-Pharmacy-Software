const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example data
const drugs = [
  {
    id: 0,
    category: "Antibiotics",
    drugName: "Amoxicillin",
    description: "An antibiotic used to treat bacterial infections.",
    uses: ["Treat bacterial infections", "Reduce symptoms"],
    keyComponents: ["Amoxicillin trihydrate"],
    price: "$10",
    inStock: true,
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  },

  {
    id: 1,
    category: "Stomach Upsets",
    drugName: "Nugel",
    description:
      "Nugel is an antacid gel designed to relieve symptoms of stomach upset, such as heartburn, acid indigestion, and gastric discomfort. It typically contains ingredients like aluminum hydroxide, magnesium hydroxide, or simethicone, which neutralize stomach acid and reduce gas. Nugel provides quick relief by coating the stomach lining and buffering the acid, helping to alleviate pain and discomfort.",
    uses: [
      "Relieving heartburn and acid indigestion.",
      "Alleviating symptoms of gastritis and peptic ulcers.",
      "Reducing gastric discomfort and bloating caused by excess stomach acid.",
      "Providing symptomatic relief from gastroesophageal reflux disease (GERD).",
    ],
    keyComponents: [
      "Aluminum hydroxide (neutralizes stomach acid).",
      "Magnesium hydroxide (neutralizes stomach acid and acts as a laxative).",
      "Simethicone (reduces gas and bloating).",
      "Flavoring agents (to improve taste and palatability).",
    ],
    price: "GHS 70.00",
    inStock: true,
    images: [""],
  },

  {
    id: 1,
    category: "Stomach Upsets",
    drugName: "Magacid",
    description:
      "Magacid is an antacid medication formulated to relieve symptoms associated with stomach upset, such as heartburn, acid indigestion, and gastric discomfort. It typically contains a combination of magnesium hydroxide and aluminum hydroxide, which work together to neutralize stomach acid. This dual-action helps to quickly reduce acidity in the stomach, providing relief from pain and discomfort.",

    uses: [
      "Relieving heartburn and acid indigestion.",
      "Alleviating symptoms of gastritis and peptic ulcers.",
      "Reducing gastric discomfort and bloating caused by excess stomach acid.",
      "Providing symptomatic relief from gastroesophageal reflux disease (GERD).",
    ],
    keyComponents: [
      "Magnesium hydroxide (neutralizes stomach acid and acts as a laxative).",
      "Aluminum hydroxide (neutralizes stomach acid).",
      "Simethicone (optional, for reducing gas and bloating).",
      "Flavoring agents (to improve taste and palatability).",
    ],
    price: "GHS 23.00",
    inStock: true,
  },

  {
    id: 2,
    category: "Stomach Upsets",
    drugName: "Gastrogen",
    description:
      "Gastrogen is a medication used to alleviate symptoms of stomach upset, including heartburn, acid indigestion, and discomfort related to excess stomach acid. It usually contains a combination of antacids and acid reducers, such as magnesium hydroxide, aluminum hydroxide, or calcium carbonate. This formulation helps neutralize stomach acid and provide symptomatic relief from conditions like gastritis or acid reflux.",
    uses: [
      "Relieving heartburn and acid indigestion.",
      "Alleviating symptoms of gastritis and peptic ulcers.",
      "Reducing gastric discomfort and bloating caused by excess stomach acid.",
      "Providing symptomatic relief from gastroesophageal reflux disease (GERD).",
    ],
    keyComponents: [
      "Aluminum hydroxide (neutralizes stomach acid).",
      "Magnesium hydroxide (neutralizes stomach acid and acts as a laxative).",
      "Simethicone (reduces gas and bloating).",
      "Flavoring agents (to improve taste and palatability).",
    ],
    price: "GHS 70.00",
    inStock: true,
    images: [""],
  },
  // Add more drug objects here
];

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
