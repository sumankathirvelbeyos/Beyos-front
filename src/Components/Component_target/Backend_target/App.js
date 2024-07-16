const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Mock data
let targetData = [];

// Endpoint to get all data (dropdowns and target data)
app.get('/target', (req, res) => {
  // Dropdown data
  const dropdownData = {
    targetTypes: ['Absolute Target', 'Intensity Target'],
    targetYears: ["2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"],
    baseYears: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]
  };

  // Target data
  const dataWithIds = targetData.map((data, index) => ({
    id: index + 1, // Assign ID starting from 1
    TypeOfTarget: data.targetType,
    Coverage: data.heading,
    TargetYear: data.targetYear,
    baseYear: data.baseYear,
    reductionpercentage: data.reductionPercentage,
    baseEmission: data.scope1Emissions,
    TargetEmission: data.scope2Emissions
  }));

  res.json({ dropdownData, targetData: dataWithIds });
});

// Endpoint to receive target data (POST request)
app.post('/target', (req, res) => {
  const newData = req.body;
  
  // Determine dynamic heading based on input
  let heading = '';
  if (newData.scope1Emissions && newData.scope2Emissions) {
    heading = 'Scope 1 + 2';
  } else if (newData.scope1Emissions) {
    heading = 'Scope 1';
  } else if (newData.scope2Emissions) {
    heading = 'Scope 2';
  }
  
  const formattedData = {
    ...newData,
    heading
  };

  targetData.push(formattedData);

  res.json({ message: 'Target data received successfully', data: formattedData });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log(`Your combined endpoint to get all data is: http://127.0.0.1:8080/target`);
