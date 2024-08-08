import React, { useState,useContext } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contextProvider/AuthContext';
import { whitevariationSvg, FolderSvg, CircleSvg, Img, GreenSvg, Co2, PiechartSvg, AddIcon, SearchSvg, UploadSvg, User, Leftarrow, Layer1, Layer2, Layer3 } from "../../../assets_pe_de";

const DataEntryPE = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
    const [formData, setFormData] = useState({

        year: '',
        month: '',
        facilityCode: '',
        facilityName: '',
        email:'aswath@gmail.com',
        "emission": 85.146,
    "status": 40,
    "emissionType": "Industrial Process Emissions",
    "responsibility": "JYOTHSNA",
    "button": {
      "text": "",
      "action": "action1"
    },
    "id": 2
  }

    );
    const navigate = useNavigate();
    const handlePrevOfPEDataEntry = () => {
    navigate('/finalList_pe');
};
const handleViewDataPE = () => {
  navigate('/viewData_PE');
};
    // Unused variables suppressed with eslint-disable-next-line
    
    // const [rowCount, setRowCount] = useState(0); // eslint-disable-next-line
    // const [selectedYear, setSelectedYear] = useState(''); // eslint-disable-next-line
    // const [selectedMonth, setSelectedMonth] = useState(''); // eslint-disable-next-line
    // const [selectedFacilityCode, setSelectedFacilityCode] = useState(''); // eslint-disable-next-line
    // const [selectedFacilityName, setSelectedFacilityName] = useState(''); // eslint-disable-next-line

    const [rows, setRows] = useState([
        { GasType: '', Source: '', quantity: '', siUnits: '', file: null ,fileUrl :''},
        { GasType: '', Source: '', quantity: '', siUnits: '', file: null,fileUrl : '' }
    ]);

    const [facilityCodes] = useState(['001', '002', '003', '004', '005']);
    const [facilityNames] = useState(['Mobile Combustion', 'Facility 2', 'Facility 3', 'Facility 4', 'Facility 5']);

    const yearRanges = [
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
        '2017-2018',
    ];

    const handleFacilityCodeChange = (e) => {
      const code = e.target.value;
      const index = facilityCodes.indexOf(code);
      const facilityName = facilityNames[index];
      setFormData(prevData => ({
          ...prevData,
          facilityCode: code,
          facilityName: facilityName
      }));
  };
  

    // Other event handler functions...
    const handleFacilityNameChange = (e) => {
      const name = e.target.value;
      const index = facilityNames.indexOf(name);
      const facilityCode = facilityCodes[index];
      setFormData(prevData => ({
          ...prevData,
          facilityName: name,
          facilityCode: facilityCode
      }));
  };
  
  const MonthValue=['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
      const handleYearChange = (event) => {
        const yearValue = event.target.value;
        setFormData(prevData => ({
            ...prevData,
            year: yearValue
        }));
    };
    
    const handleMonthChange = (event) => {
      const monthValue = event.target.value;
      setFormData(prevData => ({
          ...prevData,
          month: monthValue
      }));
  };
  const rowCount = rows.length;

      
      const handleInputChange = (index, key, value) => {
          const newRows = [...rows];
          newRows[index][key] = value;
          setRows(newRows);
      };
      
      const handleFileChange = (index, file) => {
        const newRows = [...rows];
        newRows[index].file = file;
        newRows[index].fileName = file.name;
        setRows(newRows);
    };
    const handleUpload = async (index) => {
      const rowData = rows[index];
      const data = {
          ...formData,
          ...rowData
      };
  
      try {
          // Upload file if selected
          if (rowData.file) {
              const formData = new FormData();
              formData.append('file', rowData.file);
              formData.append('fileName', rowData.file.name);
  

              // Upload file and get the fileUrl
              const response = await axios.post('https://backend-new-419p.onrender.com/processemission', data);
              console.log(response,"responses of peocess emisssssssssssssssssssssssssion")
              
              if (response.status === 200) {
                  const { fileUrl } = response.data;
                  data.fileUrl = fileUrl;
  
                  // Update the fileUrl in rows
                  const updatedRows = [...rows];
                  updatedRows[index].fileUrl = fileUrl;
                  setRows(updatedRows);
  
                  // Submit data entry with fileUrl
                  await axios.post('https://backend-new-419p.onrender.com/processemission', data);
                  console.log('Data entry submitted successfully for row', index);
              }
          } else {
              // Submit data entry without fileUrl
              await axios.post('https://backend-new-419p.onrender.com/processemission', data);
              console.log('Data entry submitted successfully for row', index);
          }
      } catch (error) {
          console.error('Error submitting data entry for row', index, ':', error);
      }
      
  };
  


      const renderDynamicRows = () => {
        return rows.map((rowData, index) => (
            <div className='row-bar-pe-de' key={index}>
                <div className="data-row-pe-de">
                    <input type="text" placeholder="Type of gas emitted" className="mobile-combustion-data-entry-child1-vehicle-pe-de" value={rowData.GasType} onChange={(e) => handleInputChange(index, 'GasType', e.target.value)} />
                    <input className="mobile-combustion-data-entry-child2-fuel-pe-de" type="text" placeholder="Source of Emission" value={rowData.Source} onChange={(e) => handleInputChange(index, 'Source', e.target.value)} />
                    <input className="mobile-combustion-data-entry-child3-quantity-pe-de" type="text" placeholder="Quantity of Gas Emitted" value={rowData.quantity} onChange={(e) => handleInputChange(index, 'quantity', e.target.value)} />
                    {/* <input className="mobile-combustion-data-entry-child4-si" type="text" placeholder="SI Units" value={rowData.siUnits} onChange={(e) => handleInputChange(index, 'siUnits', e.target.value)} /> */}
                    <input className="mobile-combustion-data-entry-child4-si-pe-de" type="text" placeholder="SI Units" value={rowData.siUnits} onChange={(e) => handleInputChange(index, 'siUnits', e.target.value)} />
                    <div className='mobile-combustion-data-entry-child18-new-pe-de'>
                        <img className="file-2-1-icon-pe-de" alt="" src={UploadSvg} />
                        <label htmlFor={`file-upload-input-pe-de-${index}`} className="file-upload-input-pe-de" style={{ width: '' }}>
                            Upload File
                        </label>
                        <input id={`file-upload-input-pe-de-${index}`} type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={(e) => handleFileChange(index, e.target.files[0])} onClick={() => handleUpload(index)} />
                        
                    </div>
                </div>
            </div>
        ));
    };

    const addRow = () => {
        setRows([...rows, { GasType: '', Source: '', quantity: '', siUnits: ''}]);
    };

    return (
      <div>
    {auth.isAuthenticated ? (
        <div className="mobile-combustion-data-entry-pe-de">
            {/* Form content
            <buton className="mobile-combustion-data-entry-child12" onClick={addRow}>
                <img className="add-6-icon" alt="" src={AddIcon}/>
                <b className="add-data">ADD DATA</b>
            </buton>
        </div> */}
        <form onSubmit={handleUpload}>
      <div className="mobile-combustion-data-entry-child-pe-de" />
      <img
        className="white-variation-11-pe-de"
        alt=""
        src={whitevariationSvg}
      />
      <div className="mobile-combustion-data-entry-item-pe-de" />
      <img className="user-5-11-pe-de" alt="" src={User}/>
      <img
        className="data-management-1-icon1-pe-de"
        alt=""
        src={GreenSvg}
      />
      <img
        className="data-management-4-icon1-pe-de"
        alt=""
        src={PiechartSvg}
      />
      <img
        className="data-management-2-icon1-pe-de"
        alt=""
        src={CircleSvg}
      />
      <div className="co2-group-pe-de">
        <img className="co21" alt="" src={Co2} />
      </div>
      <div className="dropdown-box1-pe-de">
        <div className="">
          <div className="menu-label2-pe-de">
            <div className="menu-label3-pe-de">
            <select
                             value={formData.selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-pe-de header1-pe-de"
                            >
                         <option value="">Reporting Year</option>
                            {yearRanges.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select>
            </div>
          </div>
         
          
        </div>
      </div>
      <div className="reporting-year2-pe-de">Reporting Year</div>
      <img
        className="data-management-3-icon1-pe-de"
        alt=""
        src={FolderSvg}
      />
      <img
        className="left-arrow-in-circular-button-icon1-pe-de"
        onClick={handlePrevOfPEDataEntry}
        alt=""
        src={Leftarrow}
      />
      <div className="mobile-combustion-data-entry-inner-pe-de" />
      {/* <div className="mobile-combustion-data-entry-child6" /> */}
      <div className="select-month-pe-de">SI Units</div>
      <div className="mobile-combustion-data-entry-child6-pe-de" />
      <div className="">
      <select
                             value={formData.selectedMonth}
                             onChange={handleMonthChange}
                              className="month-dropdown mobile-combustion-data-entry-child6-pe-de"
                            >
                         <option value="">{`Select Month `}</option>
                            {MonthValue.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select></div>

      <div className="type-of-vehicle2-pe-de">Type of Gas</div>
      
      {/* <input className="mobile-combustion-data-entry-child8" type="text" placeholder="    Facility Code"/>
      
      <input className="mobile-combustion-data-entry-child9" type="text" placeholder="    Facility Name"/> */}
      <select className="mobile-combustion-data-entry-child8-pe-de" value={formData.selectedFacilityCode} onChange={handleFacilityCodeChange}>
          <option value="">Facility Code</option>
          {facilityCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <select className="mobile-combustion-data-entry-child9-pe-de" value={formData.selectedFacilityName} onChange={handleFacilityNameChange}>
          <option value="">Facility Name</option>
          {facilityNames.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      <div className="facility1-pe-de">{`Facility `}</div>
      <div className="fuel1-pe-de">Source of Emission</div>
      <div className="quantity2-pe-de">Quantity of Gas Emitted</div>
      {/* <div className="si-units2">SI Units</div> */}
      <div className="distance-pe-de">SI Units</div>
      <div className="month1-pe-de">Month</div>
      <div className="div16-pe-de">750</div>
      <div className="mtco21-pe-de">MTCO2</div>
      <img className="cart-12-icon1-pe-de" alt="" src={Img} />
      <b className="process-emission1-pe-de">PROCESS EMISSION</b>
     
      
      {/* <buton className="mobile-combustion-data-entry-child12" onClick={addRow}>
        <b className="add-data">ADD DATA</b>
        <img className="add-6-icon" alt="" src={AddIcon}/>
      </buton> */}

      <img className="vector-icon-pe-de" alt="" src={Layer1}/>
      <img
        className="mobile-combustion-data-entry-child13-pe-de"
        alt=""
        src={Layer2}
      />
      <img
        className="mobile-combustion-data-entry-child14-pe-de"
        alt=""
        src={Layer3}
      />
      <div className="ellipse-div-pe-de" />
      <div className="mobile-combustion-data-entry-child15-pe-de" />
      <div className="mobile-combustion-data-entry-child16-pe-de" />
      <div className="mobile-combustion-data-entry-child17-pe-de" onClick={handleViewDataPE} />
      <b className="view-data-pe-de" onClick={handleViewDataPE} >VIEW DATA</b>
      <img className="add-8-icon-pe-de" alt="" src={SearchSvg} />
      <div className="attachments-pe-de">Attachments</div>
      <div className={`dynamic-rows-container-pe-de ${rowCount > 0 ? 'scrollable-pe-de' : ''}`}>
        <div>
          <div className="dynamic-rows-pe-de">{renderDynamicRows()}</div>
        </div>
      </div>
      <buton className="mobile-combustion-data-entry-child12-pe-de" onClick={addRow}>
        <img className="add-6-icon-pe-de" alt="" src={AddIcon}/>
        <b className="add-data-pe-de">ADD DATA</b>
      </buton>
    </form>
    </div>
 ) : (
  <p>You are not logged in.</p>
)}
</div>
    );
};

export default DataEntryPE;
