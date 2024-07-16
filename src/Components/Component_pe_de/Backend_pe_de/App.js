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

// Updated emission calculation functions based on new values
function calculateMethaneEmissions(quantity) {
  return quantity * (6.90 / 100);
}

function calculateLPGEmissions(quantity) {
  return quantity * (3.00 / 100);
}

function calculateBiogasEmissions(quantity) {
  return quantity * (0.2 / 100);
}

function calculateHydrogenEmissions(quantity) {
  return quantity * (0.2 / 100);
}

function calculateSyngasEmissions(quantity) {
  return quantity * (4.0 / 100);
}

function calculatePropaneEmissions(quantity) {
  return quantity * (2.3 / 100);
}

function calculateButaneEmissions(quantity) {
  return quantity * (2.65 / 100);
}

function calculateEthaneEmissions(quantity) {
  return quantity * (2.7 / 100);
}

function calculateLandfillGasEmissions(quantity) {
  return quantity * (0.5 / 100);
}

function calculateAmmoniaEmissions(quantity) {
  return quantity * (0 / 100); // Assuming no emissions for Ammonia based on provided data
}

function calculateNaphthaEmissions(quantity) {
  return quantity * (6.3 / 100);
}

// Function to calculate emissions based on GasType and quantity
const calculateEmissions = (GasType, quantity) => {
  let emissions = 0;

  switch (GasType.toUpperCase()) {
    case 'METHANE':
      emissions = calculateMethaneEmissions(quantity);
      break;
    case 'LPG':
      emissions = calculateLPGEmissions(quantity);
      break;
    case 'BIOGAS':
      emissions = calculateBiogasEmissions(quantity);
      break;
    case 'HYDROGEN':
      emissions = calculateHydrogenEmissions(quantity);
      break;
    case 'SYNGAS':
      emissions = calculateSyngasEmissions(quantity);
      break;
    case 'PROPANE':
      emissions = calculatePropaneEmissions(quantity);
      break;
    case 'BUTANE':
      emissions = calculateButaneEmissions(quantity);
      break;
    case 'ETHANE':
      emissions = calculateEthaneEmissions(quantity);
      break;
    case 'LANDFILL GAS':
      emissions = calculateLandfillGasEmissions(quantity);
      break;
    case 'AMMONIA':
      emissions = calculateAmmoniaEmissions(quantity);
      break;
    case 'NAPHTHA':
      emissions = calculateNaphthaEmissions(quantity);
      break;
    default:
      emissions = 0; // Default to 0 if GasType is not recognized
  }

  return emissions;
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
app.post('/processemission/dataentry', (req, res) => {
  const { year, month, facilityCode, facilityName, GasType, Source, quantity, siUnits, fileUrl } = req.body;
  
  const emissions = calculateEmissions(GasType, quantity);

  const newDataEntry = {
    year,
    month,
    facilityCode,
    facilityName,
    GasType,
    Source,
    quantity,
    siUnits,
    fileUrl,
    emission: emissions,
    status: monthlyStatusValues[month.toUpperCase()] || 0,
    emissionType: 'Industrial Process Emissions',
    responsibility: 'JYOTHSNA',
    button: { text: '', action: 'action1' }
  };

  const dataEntries = readDataEntries();
  dataEntries.push(newDataEntry);
  writeDataEntries(dataEntries);

  res.status(200).send(newDataEntry);
});

// Unified GET endpoint to fetch all data entries
app.get('/processemission/dataentry', (req, res) => {
  const dataEntries = readDataEntries();

  // Process entries to include emissions and monthly status
  const processedEntries = dataEntries.map((entry, index) => {
    const emissions = calculateEmissions(entry.GasType, entry.quantity);
    const status = monthlyStatusValues[entry.month.toUpperCase()] || 0;

    return {
      ...entry,
      id: index + 1,
      emission: emissions,
      status: status,
      emissionType: 'Industrial Process Emissions', // Default value
      responsibility: 'JYOTHSNA', // Default value
      button: { text: '', action: 'action1' }
    };
  });

  res.status(200).send(processedEntries);
});

// PUT endpoint for updating data entry
app.put('/processemission/dataentry', (req, res) => {
  const { id, year, month, facilityCode, facilityName, GasType, Source, quantity, siUnits } = req.body;

  const dataEntries = readDataEntries();
  const entryToUpdate = dataEntries.find(entry => entry.id === id);

  if (entryToUpdate) {
    entryToUpdate.year = year;
    entryToUpdate.month = month;
    entryToUpdate.facilityCode = facilityCode;
    entryToUpdate.facilityName = facilityName;
    entryToUpdate.GasType = GasType;
    entryToUpdate.Source = Source;
    entryToUpdate.quantity = quantity;
    entryToUpdate.siUnits = siUnits;
    entryToUpdate.emission = calculateEmissions(GasType, quantity);
    entryToUpdate.status = monthlyStatusValues[month.toUpperCase()] || 0;

    writeDataEntries(dataEntries);

    res.status(200).send(entryToUpdate);
  } else {
    res.status(404).send('Entry not found');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log("Endpoints:");
console.log(`- Data Entry: http://127.0.0.1:8080/processemission/dataentry`);
