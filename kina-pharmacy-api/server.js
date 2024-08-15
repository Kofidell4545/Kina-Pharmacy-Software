const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example data
const drugs = [
  {
    id: 1,
    category: 'Antibiotics',
    drugName: 'Amoxicillin',
    description: 'An antibiotic used to treat bacterial infections.',
    uses: ['Treat bacterial infections', 'Reduce symptoms'],
    keyComponents: ['Amoxicillin trihydrate'],
    price: '$10',
    inStock: true,
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg']
  },
  // Add more drug objects here
];

// Routes
app.get('/api/drugs', (req, res) => {
  res.json(drugs);
});

app.get('/api/drugs/:id', (req, res) => {
  const drugId = parseInt(req.params.id);
  const drug = drugs.find(d => d.id === drugId);
  if (drug) {
    res.json(drug);
  } else {
    res.status(404).json({ message: 'Drug not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});