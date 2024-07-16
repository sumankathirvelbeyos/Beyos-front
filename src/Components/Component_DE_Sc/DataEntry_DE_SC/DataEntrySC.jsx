import React, { useState,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contextProvider/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import { whitevariationSvg, FolderSvg, CircleSvg, Cart, GreenSvg, Co2, PiechartSvg, AddIcon, SearchSvg, UploadSvg, User, Leftarrow, Layer1, Layer2, Layer3 } from "./../../../assets_sc_de";

const DataEntrySC = () => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        year: '',
        month: '',
        facilityCode: '',
        facilityName: '',
    });
    const navigate = useNavigate();
    const handleViewDataSC = () => {
    navigate('/viewData_sc');
};

    const handlePrevScDataEntry = () => {
  navigate('/finalList_sc');
};
    // Unused variables suppressed with eslint-disable-next-line
    
    // const [rowCount, setRowCount] = useState(0); // eslint-disable-next-line
    // const [selectedYear, setSelectedYear] = useState(''); // eslint-disable-next-line
    // const [selectedMonth, setSelectedMonth] = useState(''); // eslint-disable-next-line
    // const [selectedFacilityCode, setSelectedFacilityCode] = useState(''); // eslint-disable-next-line
    // const [selectedFacilityName, setSelectedFacilityName] = useState(''); // eslint-disable-next-line

    const [rows, setRows] = useState([
        { EmissionSource: '', fuelType: '', quantity: '', siUnits: '', file: null ,fileUrl :''},
        { EmissionSource: '', fuelType: '', quantity: '', siUnits: '', file: null,fileUrl : '' }
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
              const response = await axios.post('http://127.0.0.1:8080/upload', formData);
              if (response.status === 200) {
                  const { fileUrl } = response.data;
                  data.fileUrl = fileUrl;
  
                  // Update the fileUrl and fileName in rows
                  const updatedRows = [...rows];
                  updatedRows[index].fileUrl = fileUrl;
                  updatedRows[index].fileName = rowData.file.name; // Ensure fileName is set
                  setRows(updatedRows);
  
                  // Submit data entry with fileUrl
                  await axios.post('http://127.0.0.1:8080/stationarycombustiondataentry', data);
                  console.log('Data entry submitted successfully for row', index);
              }
          } else {
              // Submit data entry without fileUrl
              await axios.post('http://127.0.0.1:8080/stationarycombustiondataentry', data);
              console.log('Data entry submitted successfully for row', index);
          }
      } catch (error) {
          console.error('Error submitting data entry for row', index, ':', error);
      }
  };
  

      const renderDynamicRows = () => {
        return rows.map((rowData, index) => (
            <div className='row-bar-sc-de' key={index}>
                <div className="data-row-sc-de">
                    <input type="text" placeholder="Source of Emission" className="mobile-combustion-data-entry-child1-vehicle-sc-de" value={rowData.EmissionSource} onChange={(e) => handleInputChange(index, 'EmissionSource', e.target.value)} />
                    <input className="mobile-combustion-data-entry-child2-fuel-sc-de" type="text" placeholder="Type of Fuel" value={rowData.fuelType} onChange={(e) => handleInputChange(index, 'fuelType', e.target.value)} />
                    <input className="mobile-combustion-data-entry-child3-quantity-sc-de" type="text" placeholder="Quantity" value={rowData.quantity} onChange={(e) => handleInputChange(index, 'quantity', e.target.value)} />
                    <input className="mobile-combustion-data-entry-child4-si-sc-de" type="text" placeholder="SI Units" value={rowData.siUnits} onChange={(e) => handleInputChange(index, 'siUnits', e.target.value)} />
                    {/* <input className="mobile-combustion-data-entry-child5-distance" type="text" placeholder="Distance in KM" value={rowData.distance} onChange={(e) => handleInputChange(index, 'distance', e.target.value)} /> */}
                    {/* Render file name or upload button */}
                    {rowData.fileUrl ? (
                        <div className='mobile-combustion-data-entry-child18-new1-sc-de'>
                            {rowData.fileName}
                        </div>
                    ) : (
                        <div className='mobile-combustion-data-entry-child18-new-sc-de'>
                            <img className="file-2-1-icon-sc-de" alt="" src={UploadSvg} />
                            <label htmlFor={`file-upload-input-sc-de-${index}`} className="file-upload-input-sc-de" style={{ width: '' }} onClick={() => handleUpload(index)} >
                                Upload File
                            </label>
                            <input
                                id={`file-upload-input-sc-de-${index}`}
                                type="file"
                                accept=".pdf,.doc,.docx"
                                style={{ display: 'none' }}
                                onChange={(e) => handleFileChange(index, e.target.files[0])}
                                // onClick={() => handleUpload(index)}
                            />

                        </div>
                    )}
                </div>
            </div>
        ));
    };

    const addRow = () => {
        setRows([...rows, { EmissionSource: '', fuelType: '', quantity: '', siUnits: ''}]);
    };

    return (
      <div>
    {auth.isAuthenticated ? (
        <div className="mobile-combustion-data-entry-sc-de">
            {/* Form content
            <buton className="mobile-combustion-data-entry-child12" onClick={addRow}>
                <img className="add-6-icon" alt="" src={AddIcon}/>
                <b className="add-data">ADD DATA</b>
            </buton>
        </div> */}
        <form onSubmit={handleUpload}>
      <div className="mobile-combustion-data-entry-child-sc-de" />
      <img
        className="white-variation-11-sc-de"
        alt=""
        src={whitevariationSvg}
      />
      <div className="mobile-combustion-data-entry-item-sc-de" />
      <img className="user-5-11-sc-de" alt="" src={User}/>
      <img
        className="data-management-1-icon1-sc-de"
        alt=""
        src={GreenSvg}
      />
      <img
        className="data-management-4-icon1-sc-de"
        alt=""
        src={PiechartSvg}
      />
      <img
        className="data-management-2-icon1-sc-de"
        alt=""
        src={CircleSvg}
      />
      <div className="co2-group-sc-de">
        <img className="co21-sc-de" alt="" src={Co2} />
      </div>
      <div className="dropdown-box1-sc-de">
        <div className="">
          <div className="menu-label2-sc-de">
            <div className="menu-label3-sc-de">
            <select
                             value={formData.selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-sc-de header1-sc-de"
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
      <div className="reporting-year2-sc-de">Reporting Year</div>
      <img
        className="data-management-3-icon1-sc-de"
        alt=""
        src={FolderSvg}
      />
      <img
        className="left-arrow-in-circular-button-icon1-sc-de"
        onClick={handlePrevScDataEntry}
        alt=""
        src={Leftarrow}
      />
      <div className="mobile-combustion-data-entry-inner-sc-de" />
      {/* <div className="mobile-combustion-data-entry-child6" /> */}
      <div className="select-month-sc-de">SI Units</div>
      <div className="mobile-combustion-data-entry-child6-sc-de" />
      <div className="">
      <select
                             value={formData.selectedMonth}
                             onChange={handleMonthChange}
                              className="month-dropdown-sc-de mobile-combustion-data-entry-child6-sc-de"
                            >
                         <option value="">{`Select Month `}</option>
                            {MonthValue.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select></div>
      <div className="type-of-vehicle2-sc-de">Emission Source</div>
      
      {/* <input className="mobile-combustion-data-entry-child8" type="text" placeholder="    Facility Code"/>
      
      <input className="mobile-combustion-data-entry-child9" type="text" placeholder="    Facility Name"/> */}
      <select className="mobile-combustion-data-entry-child8-sc-de" value={formData.selectedFacilityCode} onChange={handleFacilityCodeChange}>
          <option value="">Facility Code</option>
          {facilityCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <select className="mobile-combustion-data-entry-child9-sc-de" value={formData.selectedFacilityName} onChange={handleFacilityNameChange}>
          <option value="">Facility Name</option>
          {facilityNames.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      <div className="facility1-sc-de">{`Facility `}</div>
      <div className="fuel1-sc-de">Fuel</div>
      <div className="quantity2-sc-de">Quantity</div>
      <div className="si-units2-sc-de">SI Units</div>
      {/* <div className="distance">Distance</div> */}
      <div className="month1-sc-de">Month</div>
      <div className="div16-sc-de">1423</div>
      <div className="mtco21-sc-de">MTCO2</div>
      <img className="cart-12-icon1-sc-de" alt="" src={Cart} />
      <b className="mobile-combustion1-sc-de">STATIONARY COMBUSTION</b>
     
      
      {/* <buton className="mobile-combustion-data-entry-child12" onClick={addRow}>
        <b className="add-data">ADD DATA</b>
        <img className="add-6-icon" alt="" src={AddIcon}/>
      </buton> */}

      <img className="vector-icon-sc-de" alt="" src={Layer1}/>
      <img
        className="mobile-combustion-data-entry-child13-sc-de"
        alt=""
        src={Layer2}
      />
      <img
        className="mobile-combustion-data-entry-child14-sc-de"
        alt=""
        src={Layer3}
      />
      <div className="ellipse-div-sc-de" />
      <div className="mobile-combustion-data-entry-child15-sc-de" />
      <div className="mobile-combustion-data-entry-child16-sc-de" />
      <div className="mobile-combustion-data-entry-child17-sc-de" onClick={handleViewDataSC} />
      <b className="view-data-sc-de" onClick={handleViewDataSC}>VIEW DATA</b>
      <img className="add-8-icon-sc-de" alt="" src={SearchSvg} />
      <div className="attachments-sc-de">Attachments</div>
      <div className={`dynamic-rows-container-sc-de ${rowCount > 0 ? 'scrollable-sc-de' : ''}`}>
        <div>
          <div className="dynamic-rows-sc-de">{renderDynamicRows()}</div>
        </div>
      </div>
      <buton className="mobile-combustion-data-entry-child12-sc-de" onClick={addRow}>
        <img className="add-6-icon-sc-de" alt="" src={AddIcon}/>
        <b className="add-data-sc-de">ADD DATA</b>
      </buton>
    </form>
    </div>
     ) : (
      <p>You are not logged in.</p>
    )}
  </div>
    );
};

export default DataEntrySC;
