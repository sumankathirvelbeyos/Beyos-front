const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

let companyInfo = {
    organizationName: '',
    description: '',
    address: '',
    sector: '',
    currency: '',
    natureOfBusiness: '',
    website: '',
    numberOfEmployees: ''
};

// Endpoint to save company information
app.post('/profiledetails', (req, res) => {
    const data = req.body;
    companyInfo = { ...data };
    res.status(200).json({ message: 'Company information saved successfully' });
});

// Endpoint to retrieve company information
app.get('/profiledetails', (req, res) => {
    res.status(200).json(companyInfo);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log("your endpoint will be:http://127.0.0.1:8080/profiledetails ");