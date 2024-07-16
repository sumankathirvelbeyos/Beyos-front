const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

// In-memory data store
let emissionsData = [];

// Get all reduced emissions
app.get('/offset', (req, res) => {
    res.json(emissionsData);
});

// Add a new reduced emission
app.post('/offset', (req, res) => {
    const newEntry = req.body;
    emissionsData.push(newEntry);
    res.json(newEntry);
});

// Clear all emissions data (for debugging or resetting data)
app.delete('/api/offset', (req, res) => {
    emissionsData = [];
    res.json({ message: "All data cleared" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
