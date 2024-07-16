const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

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

// Define emission factors
const emissionFactors = {
  fuel: {
    JetFuel: 2.49,
    AviationGasoline: 2.2,
    GasolinePetrol: 2.27,
    OnRoadDieselFuel: 2.67,
    ResidualFuelOil: 2.93,
    LPG: 1.61,
    CNG: 0.053,
    LNG: 1.17,
    Ethanol: 1.46,
    Biodiesel: 2.49,
    EthanolGasoline: 0.34,
    BiodieselDiesel: 2.14,
    Charcoal: 3304,
    Biogasoline: 1911.6,
    Biodiesels: 1911.6,
    Lpg: 2984.63,
    DieselOil: 3186.3
  },
  mode: {
    Bus: 0.69,
    DieselBus: 1.69,
    BusGasoline: 1.06,
    CarPetrol: 0.23,
    CarDiesel: 0.27,
    CNGVehicle: 0.22,
    LightgoodsvehicleLPG: 0.21,
    LightgoodsvehicleEthanol: 0.32,
    LightgoodsvehiclePetrol: 0.32,
    LightgoodsvehicleDiesel: 0.38,
    HeavygoodsvehiclePetrol: 0.6,
    HeavygoodsvehicleDiesel: 0.71,
    HeavygoodsvehicleLPG: 0.42,
    HeavygoodsvehicleEthanol: 0.39
  },
  distance: {
    AirDomestic: 1.96,
    AirShortHaul: 1.47,
    AirLongHaul: 0.61,
    Rail: 0.02,
    Road: 0.3267,
    Shipping: 0.0528
  }
};

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

// Function to calculate emissions
const calculateEmissions = (type, calcType, calcValue, additionalValue = 1) => {
  let factor;
  if (type === 'fuel') {
    factor = emissionFactors.fuel[calcType] || 0;
  } else if (type === 'mode') {
    factor = emissionFactors.mode[calcType] || 0;
  } else if (type === 'distance') {
    factor = emissionFactors.distance[calcType] || 0;
     return (calcValue * factor * additionalValue).toFixed(2);
  }
  return (calcValue * factor).toFixed(2);  // Handles fuel-based or mode-based calculations
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

// Middleware
app.use(cors());
app.use(bodyParser.json());

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
app.post('/mobilecombustiondataentry', (req, res) => {
  const {
    year, month, facilityCode, facilityName,
    vehicleType, fuelType, quantity, siUnits, distance, fileUrl
  } = req.body;

  let emissions;
  if (siUnits === 'liter') {
    emissions = calculateEmissions('fuel', fuelType, quantity);
  } else if (siUnits === 'km') {
    emissions = calculateEmissions('mode', vehicleType, quantity);
  } else if (siUnits === 'distance') {
    emissions = calculateEmissions('distance', vehicleType, quantity, distance);
  } else {
    emissions = 0;
  }
  const roundedEmissions = parseFloat(emissions).toFixed(2);
  const newDataEntry = {
    year,
    month,
    facilityCode,
    facilityName,
    vehicleType,
    fuelType,
    quantity,
    siUnits,
    distance,
    fileUrl,
   emissions: roundedEmissions 
  };

  const dataEntries = readDataEntries();
  dataEntries.push(newDataEntry);
  writeDataEntries(dataEntries);

  res.status(200).send(newDataEntry);
});

// GET endpoint to retrieve all data entries
app.get('/mobilecombustiondataentry', (req, res) => {
  const dataEntries = readDataEntries();

  const dataWithStatuses = dataEntries.map((entry) => {
    const { month, emissions } = entry;
    const monthlyStatus = monthlyStatusValues[month.toUpperCase()] || 0;
    return {
      ...entry,
      monthlyStatus,
      emissionType:"Company Owned vehicles usage (Mobile combustion)",
      responsibility:"HARI",
      emissions: parseFloat(emissions).toFixed(2) 
    };
  });

  res.status(200).json(dataWithStatuses);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
