const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// File to store data entries
const DATA_FILE = 'dataEntries.json';

// Define monthly status values
const monthlyStatusValues = {
  'JANUARY': 10,
  'FEBRUARY': 20,
  'MARCH': 30,
  'APRIL': 40,
  'MAY': 50,
  'JUNE': 60,
  'JULY': 70,
  'AUGUST': 80,
  'SEPTEMBER': 90,
  'OCTOBER': 100,
  'NOVEMBER': 110,
  'DECEMBER': 120
};

// Lookup table for emission factors
const emissionFactors = {
  "CO2": {
    "crude oil": 3100.59,
    "orimulsion": 2117.5,
    "natural gas liquids": 2837.64,
    "motor gasoline":3069.99,
    "aviation gasoline":3101,
    "jet gasoline":3101,
    "jet kerosene":3153.15,
    "other kerosene":3149.22,
    "shale oil":2792.73,
    "gas oil":3186.3,
    "diesel oil":3186.3,
    "gas/diesel oil":3186.3,
    "residual fuel oil":3126.96,
     "Liquified Petrolium gases":2984.63,
     "LPG":2984.3,
     "Ethane":2858.24,
     "Naphtha":3261.85,
     "bitumen":3244.14,
     "Lubricants":2946.66,
     "Petrolium coke":3168.75,
     "Refinery feedstocks":3151.9,
     "refinery gas":2851.2,
     "Paraffin waxes":2946.66,
     "White spirit":2946.66,
     "sbp":2946.66,
     "Other petrolium products":2946.66,
     "Anthracite":2624.61,
     "cooking coal":2667.72,
     "Other bituminous coal":2440.68,
     "Sub bituminous coal":1816.29,
     "Lignite":1201.9,
     "Oil shale and tar sands":952.3,
     "Brown coal briquettes":2018.25,
     "Patent fuel":2018.25,
     "coke oven coke":3017.4,
     "Lignite coke":3017.4,
     "Gas coke":3017.4,
     "Coal tar":2259.6,
     "Gas works gas":1718.28,
     "coke oven gas":1718.28,
     "Blast furnace gas":642.2,
     "Oxygen steel furnace gas":1284.92,
     "Natural gas":2692.8,
     "Municipal wastes":917,
     "Industrial wastes":NA,
     "Wood":1747.2,
     "Wood waste":1747.2,
     "Waste oils":2946.66,
     "Sulphite iyes":1124.54,
     "Black liqour":1124.54,
     "Other primary solid biomas fuels":1160,
     "Charcoal":3304,
     "Biogasoline":1911.6,
     "Biodiesels":1911.6,
     "Other liquid biofuels":2181.04,
     "Landfill gas":2751.84,
     "Sludge gas":2751.84,
     "Other biogas":2751.84,
     "Municipalwastes":1160,
     "Peat":1034.56

    // Add more fuel types as needed
  },
  "NO2": {
    // Define emission factors for NO2 sources
    "crude oil": 0.025,
    "orimulsion": 0.016,
    "natural gas liquids": 0.026,
    "motor gasoline":0.026,
    "aviation gasoline":0.026,
    "jet gasoline":0.026,
    "jet kerosene":0.026,
    "other kerosene":0.026,
    "shale oil":0.022,
    "gas oil":0.025,
    "diesel oil":0.025,
    "gas/diesel oil":0.025,
    "residual fuel oil":0.024,
     "Liquified Petrolium gases":0.0047,
     "LPG":0.0047,
     "Ethane":0.0046,
     "Naphtha":0.026,
     "bitumen":0.0241,
     "Lubricants":0.0241,
     "Petrolium coke":0.0915,
     "Refinery feedstocks":0.025,
     "refinery gas":0.0049,
     "Paraffin waxes":0.024,
     "White spirit":0.024,
     "sbp":0.024,
     "Other petrolium products":0.024,
     "Anthracite":0.040,
     "cooking coal":0.0423,
     "Other bituminous coal":0.0387,
     "Sub bituminous coal":0.028,
     "Lignite":0.0178,
     "Oil shale and tar sands":0.0135,
     "Brown coal briquettes":0.0310,
     "Patent fuel":0.031,
     "coke oven coke":0.042,
     "Lignite coke":0.0423,
     "Gas coke":0.002,
     "Coal tar":0.042,
     "Gas works gas":0.003,
     "coke oven gas":0.003,
     "Blast furnace gas":0.002,
     "Oxygen steel furnace gas":0.0007,
     "Natural gas":0.004,
     "Municipal wastes":0.04,
     "Industrial wastes":NA,
     "Wood":0.062,
     "Wood waste":0.062,
     "Waste oils":0.160,
     "Sulphite iyes":0.0236,
     "Black liqour":0.0236,
     "Other primary solid biomas fuels":0.046,
     "Charcoal":0.023,
     "Biogasoline":0.0464,
     "Biodiesels":0.0162,
     "Other liquid biofuels":0.016,
     "Landfill gas":0.00504,
     "Sludge gas":0.00504,
     "Other biogas":0.005,
     "Municipalwastes":0.046,
     "Peat":0.013,
     
  },
  "CH4": {
    // Define emission factors for CH4 sources
    "crude oil": 0.423,
    "orimulsion": 0.275,
    "natural gas liquids": 0.442,
    "motor gasoline":0.443,
    "aviation gasoline":0.443,
    "jet gasoline":0.443,
    "jet kerosene":0.441,
    "other kerosene":0.438,
    "shale oil":0.381,
    "gas oil":0.43,
    "diesel oil":0.43,
    "gas/diesel oil":0.43,
    "residual fuel oil":0.404,
     "Liquified Petrolium gases":0.236,
     "LPG":0.236,
     "Ethane":0.232,
     "Naphtha":0.445,
     "bitumen":0.402,
     "Lubricants":0.402,
     "Petrolium coke":0.325,
     "Refinery feedstocks":0.43,
     "refinery gas":0.247,
     "Paraffin waxes":0.402,
     "White spirit":0.402,
     "sbp":0.402,
     "Other petrolium products":0.402,
     "Anthracite":0.267,
     "cooking coal":0.282,
     "Other bituminous coal":0.258,
     "Sub bituminous coal":0.189,
     "Lignite":0.119,
     "Oil shale and tar sands":0.089,
     "Brown coal briquettes":0.207,
     "Patent fuel":0.207,
     "coke oven coke":0.282,
     "Lignite coke":0.282,
     "Gas coke":0.141,
     "Coal tar":0.28,
     "Gas works gas":0.193,
     "coke oven gas":0.193,
     "Blast furnace gas":0.012,
     "Oxygen steel furnace gas":0.035,
     "Natural gas":0.24,
     "Municipal wastes":3,
     "Industrial wastes":NA,
     "Wood":4.68,
     "Wood waste":4.68,
     "Waste oils":12.06,
     "Sulphite iyes":0.035,
     "Black liqour":0.035,
     "Other primary solid biomas fuels":3.48,
     "Charcoal":5.9,
     "Biogasoline":0.27,
     "Biodiesels":0.27,
     "Other liquid biofuels":0.27,
     "Landfill gas":0.252,
     "Sludge gas":0.252,
     "Other biogas":0.252,
     "Municipalwastes":3.48,
     "Peat":0.0976,
     
    
  }
};

const calculateTotalEmission = (EmissionSource, quantity) => {
  console.log("Calculating emission for:", EmissionSource, "with quantity:", quantity);
  
  // Convert EmissionSource to uppercase for consistency
  const sourceKey = EmissionSource.toUpperCase();

  console.log("Checking emission factors for source key:", sourceKey);

  const factorKeys = Object.keys(emissionFactors).map(key => key.toUpperCase());

  if (factorKeys.includes(sourceKey)) {
    const factors = emissionFactors[sourceKey];
    console.log("Factors for source key:", factors);

    let totalEmission = 0;
    for (let fuelType in factors) {
      totalEmission += quantity * factors[fuelType]/1000;
    }
    console.log("Total emission calculated:", totalEmission);
    return totalEmission/1000;
  } else {
    console.log("Emission source not found in factors.");
    return 0;
  }
};


// Function to read data entries from the file
const readDataEntries = () => {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
};

// Function to write data entries to the file
const writeDataEntries = (entries) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2), 'utf8');
};

// POST endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    const fileUrl = `http://127.0.0.1:8080/uploads/${req.file.filename}`;
    res.status(200).send({ fileUrl });
  } else {
    res.status(400).send('No file uploaded');
  }
});

// POST endpoint for data entry
app.post('/stationarycombustiondataentry', (req, res) => {
  const { year, month, facilityCode, facilityName, EmissionSource, fuelType, quantity, siUnits, fileUrl, responsibility } = req.body;

  const totalEmission = calculateTotalEmission(EmissionSource, quantity);

  const newDataEntry = {
    id: readDataEntries().length + 1, // Generate unique ID for the entry
    year,
    month,
    facilityCode,
    facilityName,
    EmissionSource,
    fuelType,
    quantity,
    siUnits,
    fileUrl,
    emission: totalEmission, // Store total emission as a single value
   
    status: monthlyStatusValues[month.toUpperCase()] || 0, // Default status to 0 if month is not found
  };

  const dataEntries = readDataEntries();
  dataEntries.push(newDataEntry);
  writeDataEntries(dataEntries);

  res.status(200).send(newDataEntry);
});

// GET endpoint to fetch all data entries
app.get('/stationarycombustiondataentry', (req, res) => {
  const dataEntries = readDataEntries();

  const allEntries = dataEntries.map((entry, index) => ({
    id: index + 1,
    emissionType: 'Generation of electricity/heat (Stationary combustion)',
    facility: entry.facilityName,
    reportingYear: entry.year,
    month: entry.month,
    fuel: entry.fuelType,
    quantity: entry.quantity,
    units: entry.siUnits,
    emission: entry.emission, // Use single emission value
    EmissionSource: entry.EmissionSource,
    responsibility: "MANOJ", // Include responsibility field
    status: entry.status,
    button: { text: '', action: 'action1' }
  }));

  res.status(200).send(allEntries);
});

// PUT endpoint to update data entry
app.put('/stationarycombustiondataentry/:id', (req, res) => {
  const { id } = req.params;
  const { year, month, facilityCode, facilityName, EmissionSource, fuelType, quantity, siUnits, responsibility } = req.body;

  const dataEntries = readDataEntries();
  const entryIndex = dataEntries.findIndex(entry => entry.id == id);

  if (entryIndex !== -1) {
    const totalEmission = calculateTotalEmission(EmissionSource, quantity);

    const updatedEntry = {
      id: parseInt(id),
      year,
      month,
      facilityCode,
      facilityName,
      EmissionSource,
      fuelType,
      quantity,
      siUnits,
      emission: totalEmission, // Update single emission value
      responsibility, // Include responsibility field
      status: monthlyStatusValues[month.toUpperCase()] || 0, // Set status based on month
    };

    dataEntries[entryIndex] = updatedEntry;
    writeDataEntries(dataEntries);
    res.status(200).send(updatedEntry);
  } else {
    res.status(404).send('Entry not found');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log("Endpoints:");
console.log(`- Data Entry: POST http://127.0.0.1:8080/stationarycombustiondataentry`);
console.log(`- View Data: GET http://127.0.0.1:8080/stationarycombustiondataentry`);
console.log(`- Update Data: PUT http://127.0.0.1:8080/stationarycombustiondataentry/:id`);
console.log(`- File Upload: POST http://127.0.0.1:8080/upload`);
console.log(`- Static Files: http://127.0.0.1:8080/uploads`);
