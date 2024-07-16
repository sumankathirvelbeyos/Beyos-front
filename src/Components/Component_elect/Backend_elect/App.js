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

// Monthly status values
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

// Emission factors for different types of electricity
const emissionFactors = {
  coal: 8.20,                // kg CO2 per kWh
  naturalGas: 4.90,          // kg CO2 per kWh
  oil: 7.20,                 // kg CO2 per kWh
  hydropower: 0.04,          // kg CO2 per kWh
  wind: 0.11,                // kg CO2 per kWh
  solarPhotovoltaic: 0.45,   // kg CO2 per kWh
  geothermal: 0.38,          // kg CO2 per kWh
  biomass: 0.18,             // kg CO2 per kWh
  nuclear: 0.15,             // kg CO2 per kWh
  hydrogenCells: 0.50,       // kg CO2 per kWh
  peat: 10                   // kg CO2 per kWh
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

// Function to calculate emissions
const calculateEmissions = (typeofElectricity, quantity) => {
  const factor = emissionFactors[typeofElectricity.toLowerCase()] || 0;
  return Math.round(quantity * factor);
};

// POST endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    const fileUrl = `http://127.0.0.1:${PORT}/uploads/${req.file.filename}`;
    res.status(200).send({ fileUrl });
  } else {
    res.status(400).send('No file uploaded');
  }
});

// Unified endpoint for data entry and viewing all data
app.route('/purchasedelectricityDataentry')
  .get((req, res) => {
    const dataEntries = readDataEntries();

    const result = dataEntries.map((entry, index) => {
      const status = monthlyStatusValues[entry.month.toUpperCase()] || 0; // Default to 0 if month is not found

      return {
        id: index + 1,
        reportingYear: entry.reportingYear,
        month: entry.month,
        facilityCode: entry.facilityCode,
        facilityName: entry.facilityName,
        typeofElectricity: entry.typeofElectricity,
        quantity: entry.quantity,
        units: entry.units,
        fileUrl: entry.fileUrl,
        emissions: calculateEmissions(entry.typeofElectricity, entry.quantity),
        status: status,
        emissionType: 'PURCHASED ELECTRICITY',
        responsibility: 'Hari' // Assuming this is a constant value for now
      };
    });

    res.status(200).json(result);
  })
  .post((req, res) => {
    const { reportingYear, month, facilityCode, facilityName, typeofElectricity, quantity, units, fileUrl } = req.body;

    const newDataEntry = {
      id: readDataEntries().length + 1, // Generate a unique ID
      reportingYear,
      month,
      facilityCode,
      facilityName,
      typeofElectricity,
      quantity,
      units,
      fileUrl
    };

    const dataEntries = readDataEntries();
    dataEntries.push(newDataEntry);
    writeDataEntries(dataEntries);

    res.status(200).send(newDataEntry);
  });

// PUT endpoint for updating data entry
app.put('/purchasedelectricityDataentry/:id', (req, res) => {
  const { id } = req.params;
  const { reportingYear, month, facilityCode, facilityName, typeofElectricity, quantity, units } = req.body;

  const dataEntries = readDataEntries();
  const entryIndex = dataEntries.findIndex(entry => entry.id == id);

  if (entryIndex !== -1) {
    const updatedEntry = {
      ...dataEntries[entryIndex],
      reportingYear,
      month,
      facilityCode,
      facilityName,
      typeofElectricity,
      quantity,
      units,
      fileUrl: dataEntries[entryIndex].fileUrl, // Preserve existing fileUrl
      emissions: calculateEmissions(typeofElectricity, quantity), // Recalculate emissions
      status: monthlyStatusValues[month.toUpperCase()] || 0 // Update status
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
console.log(`- Data Entry: POST http://127.0.0.1:${PORT}/purchasedelectricityDataentry`);
console.log(`- Update Data Entry: PUT http://127.0.0.1:${PORT}/purchasedelectricityDataentry/:id`);
console.log(`- View Data Entries: GET http://127.0.0.1:${PORT}/purchasedelectricityDataentry`);
console.log(`- File Upload: POST http://127.0.0.1:${PORT}/upload`);
console.log(`- Static Files: http://127.0.0.1:${PORT}/uploads`);
