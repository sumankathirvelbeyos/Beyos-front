const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

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

// Constants for refrigerant emission factors
const refrigerantEmissionFactors = {
  R401A: 16,
  R401B: 14,
  R401C: 19,
  R402A: 2100,
  R402B: 1330,
  R403B: 3444,
  R404A: 3922,
  R406A: 0,
  R407A: 2107,
  R407B: 2804,
  R407C: 1774,
  R407D: 1627,
  R407E: 1552,
  R408A: 2301,
  R409A: 0,
  R410A: 2088,
  R410B: 2229,
  R411A: 14,
  R411B: 4,
  R413A: 2053,
  R414A: 0,
  R414B: 0,
  R417A: 2346,
  R422A: 3143,
  R422D: 2729,
  R423A: 2280,
  R424A: 2440,
  R426A: 1508,
  R428A: 3607,
  R434A: 3245,
  R500: 32,
  R502: 0,
  R504: 325,
  R507: 3985,
  R508A: 13214,
  R508B: 13396,
};

// Function to calculate emissions based on refrigerant type and equipment data
const calculateRefrigerantEmissions = (refrigerant, refrigerantChargedNew, capacityOfEquipmentNew, refrigerantChargedExisting, capacityOfEquipmentRetiring, refrigerantRecoveredRetiring) => {
  let emissionFactor = 0;

  switch (refrigerant) {
    case 'R401A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R401A;
      break;
    case 'R401B':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R401B;
      break;
    case 'R401C':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R401C;
      break;
    case 'R402A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R402A;
      break;
    case 'R402B':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R402B;
      break;
    case 'R403B':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R403B;
      break;
    case 'R404A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R404A;
      break;
    case 'R406A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R406A;
      break;
    case 'R407A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R407A;
      break;
    case 'R407B':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R407B;
      break;
    case 'R407C':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R407C;
      break;
    case 'R407D':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R407D;
      break;
    case 'R407E':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R407E;
      break;
    case 'R408A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R408A;
      break;
    case 'R409A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R409A;
      break;
    case 'R410A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R410A;
      break;
    case 'R410B':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R410B;
      break;
    case 'R411A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R411A;
      break;
    case 'R411B':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R411B;
      break;
    case 'R413A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R413A;
      break;
    case 'R414A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R414A;
      break;
    case 'R414B':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R414B;
      break;
    case 'R417A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R417A;
      break;
    case 'R422A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R422A;
      break;
    case 'R422D':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R422D;
      break;
    case 'R423A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R423A;
      break;
    case 'R424A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R424A;
      break;
    case 'R426A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R426A;
      break;
    case 'R428A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R428A;
      break;
    case 'R434A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R434A;
      break;
    case 'R500':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R500;
      break;
    case 'R502':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R502;
      break;
    case 'R504':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R504;
      break;
    case 'R507':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R507;
      break;
    case 'R508A':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R508A;
      break;
    case 'R508B':
      emissionFactor = ((refrigerantChargedNew - capacityOfEquipmentNew) + refrigerantChargedExisting + (capacityOfEquipmentRetiring - refrigerantRecoveredRetiring)) * refrigerantEmissionFactors.R508B;
      break;
    default:
      // Handle cases where the refrigerant type is not found
      emissionFactor = 0;
      break;
  }

  return emissionFactor;
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

// Constants for dropdown data
const facilityCodes = ["01", "02", "03", "04", "05", "06"];
const facilityNames = ["STATIONARY", "FUGITIVE", "MOBILE", "PROCESS", "UPSTREAM", "DOWNSTREAM"];
const year = ["2024-2023", "2023-2022", "2022-2021", "2021-2020", "2020-2019", "2019-2018", "2018-2017", "2017-2016", "2016-2015", "2015-2014"];
const month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

// Monthly status values
const monthlyStatusValues = {
  'JANUARY': 10, 'FEBRUARY': 20, 'MARCH': 30, 'APRIL': 40,
  'MAY': 50, 'JUNE': 60, 'JULY': 70, 'AUGUST': 80,
  'SEPTEMBER': 90, 'OCTOBER': 100, 'NOVEMBER': 110, 'DECEMBER': 120
};

// POST endpoint for file upload
app.post('/uploads', upload.single('file'), (req, res) => {
  if (req.file) {
    const fileUrl = `https://backend-new-419p.onrender.com/fugitiveemmission_${req.file.filename}`;
    res.status(200).send({ fileUrl });
  } else {
    res.status(400).send('No file uploaded');
  }
});

// POST endpoint for data entry
app.post('/fugitiveemmission', (req, res) => {
  const {
    year, month, facilityCode, facilityName,
    refrigerant, refrigerantChargedNew, capacityOfEquipmentNew, refrigerantChargedExisting, capacityOfEquipmentRetiring, refrigerantRecoveredRetiring, fileUrl
  } = req.body;

  // Calculate emissions based on the refrigerant type and equipment data
  const emissions = calculateRefrigerantEmissions(refrigerant, refrigerantChargedNew, capacityOfEquipmentNew, refrigerantChargedExisting, capacityOfEquipmentRetiring, refrigerantRecoveredRetiring);
  const roundedEmissions = parseFloat(emissions).toFixed(2);

  const newDataEntry = {
    id: readDataEntries().length + 1,
    year,
    month,
    facilityCode,
    facilityName,
    refrigerant,
    refrigerantChargedNew,
    capacityOfEquipmentNew,
    refrigerantChargedExisting,
    capacityOfEquipmentRetiring,
    refrigerantRecoveredRetiring,
    fileUrl,
    emissions: roundedEmissions,
    
  };

  const dataEntries = readDataEntries();
  dataEntries.push(newDataEntry);
  writeDataEntries(dataEntries);

  res.status(200).send(newDataEntry);
});

// GET endpoint to retrieve all data entries
app.get('/fugitiveemmission', (req, res) => {
  const dataEntries = readDataEntries();

  // Format data with facility code, name, month, year, and monthly status
  const formattedData = dataEntries.map((entry) => ({
    ...entry,
    emissionType:"Company Owned vehicles usage (Mobile combustion)",
    responsibility: "HARI", // Adjust as per your requirement
    month: entry.month,
    monthlyStatus: monthlyStatusValues[entry.month.toUpperCase()] || 0,
  }));

  res.status(200).json(formattedData);
});

// GET endpoint to retrieve dropdown data
app.get('/fugitiveemmission', (req, res) => {
  res.status(200).json({
    facilityCodes,
    facilityNames,
    year,
    month,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
