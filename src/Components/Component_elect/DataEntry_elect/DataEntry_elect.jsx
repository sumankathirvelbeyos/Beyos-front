import React, { useState,useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthContext';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { whitevariationSvg, FolderSvg, CircleSvg, Cart1, GreenSvg, Co2, PiechartSvg, AddIcon, SearchSvg, UploadSvg, User, Leftarrow, Layer1, Layer2, Layer3 } from "./../../../assets_elect/index";

const DataEntryelect = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
    const handleViewDataelvd = () => {
    navigate('/viewData_elvd');
};
const handlepreviousfinallist = () => {
  navigate('/finalList_elist');
};
const [formData, setFormData] = useState({
  reportingYear: '',
  month: '',
  facilityCode: '',
  facilityName: '',
  email:"suman@gmail.com",
  "emissions": 19229,
    "status": 50,
    "emissionType": "PURCHASED ELECTRICITY",
    "responsibility": "Hari"

});

const [rows, setRows] = useState([
  { typeofElectricity: '', quantity: '', units: '', file: null, fileUrl: '' },
  { typeofElectricity: '', quantity: '', units: '', file: null, fileUrl: '' },
]);

    const [facilityCodes] = useState(['001', '002', '003', '004', '005']);
    const [facilityNames] = useState(['Facility1', 'Facility2', 'Facility3', 'Facility4', 'Facility5']);

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
            reportingYear: yearValue
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
              const response = await axios.post('https://backend-new-419p.onrender.com/purchasedelectricity', data);
              if (response.status === 200) {
                  const { fileUrl } = response.data;
                  data.fileUrl = fileUrl;
  
                  // Update the fileUrl in rows
                  const updatedRows = [...rows];
                  updatedRows[index].fileUrl = fileUrl;
                  setRows(updatedRows);
  
                  // Submit data entry with fileUrl
                  await axios.post('https://backend-new-419p.onrender.com/purchasedelectricity', data);
                  console.log('Data entry submitted successfully for row', index);
              }
          } else {
              // Submit data entry without fileUrl
              await axios.post('https://backend-new-419p.onrender.com/purchasedelectricity', data);
              console.log('Data entry submitted successfully for row', index);
          }
      } catch (error) {
          console.error('Error submitting data entry for row', index, ':', error);
      }
      
  };
  


      const renderDynamicRows = () => {
        return rows.map((rowData, index) => (
            <div className='row-bar-eld' key={index}>
                <div className="data-row-eld">
                <input type="text" placeholder="Type of electricity" className="mobile-combustion-data-entry-child1-vehicle-eld" value={rowData.typeofElectricity} onChange={(e) => handleInputChange(index, 'typeofElectricity', e.target.value)} />
                <input className="mobile-combustion-data-entry-child3-consumption-eld" type="text" placeholder="Consumption" value={rowData.quantity} onChange={(e) => handleInputChange(index, 'quantity', e.target.value)} />
                <input className="mobile-combustion-data-entry-child4-si-eld" type="text" placeholder="SI Units" value={rowData.units} onChange={(e) => handleInputChange(index, 'units', e.target.value)} />
                    <div className='mobile-combustion-data-entry-child18-new-eld'>
                        <img className="file-2-1-icon-eld" alt="" src={UploadSvg} />
                        <label htmlFor={`file-upload-input-eld-${index}`} className="file-upload-input-eld" style={{ width: '' }}>
                            Upload File
                        </label>
                        <input id={`file-upload-input-eld-${index}`} type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={(e) => handleFileChange(index, e.target.files[0])} onClick={() => handleUpload(index)} />
                        
                    </div>
                </div>
            </div>
        ));
    };

    const addRow = () => {
      setRows([...rows, { typeofElectricity: '', quantity: '', units: '', fileUrl: '' }]);
    };
  

    return (
      
        <div className="mobile-combustion-data-entry">
            {/* Form content
            <buton className="mobile-combustion-data-entry-child12" onClick={addRow}>
                <img className="add-6-icon" alt="" src={AddIcon}/>
                <b className="add-data">ADD DATA</b>
            </buton>
        </div> */}
        <form onSubmit={handleUpload}>
      <div className="mobile-combustion-data-entry-child-eld" />
      <img
        className="white-variation-11-eld"
        alt=""
        src={whitevariationSvg}
      />
      <div className="mobile-combustion-data-entry-item-eld" />
      <img className="user-5-11-eld" alt="" src={User}/>
      <img
        className="data-management-1-icon1-eld"
        alt=""
        src={GreenSvg}
      />
      <img
        className="data-management-4-icon1-eld"
        alt=""
        src={PiechartSvg}
      />
      <img
        className="data-management-2-icon1-eld"
        alt=""
        src={CircleSvg}
      />
      <div className="co2-group-eld">
        <img className="co21" alt="" src={Co2} />
      </div>
      <div className="dropdown-box1-eld">
        <div className="">
          <div className="menu-label2-eld">
            <div className="menu-label3-eld">
            <select
                             value={formData.selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header1-eld"
                            >
                         <option value="">Reporting Year</option>
                            {yearRanges.map((reportingYear) => (
                                 <option key={reportingYear} value={reportingYear}>
                                       {reportingYear}
                         </option>
                        ))}
                        </select>
            </div>
          </div>
         
          
        </div>
      </div>
      <div className="reporting-year2-eld">Reporting Year</div>
      <img
        className="data-management-3-icon1-eld"
        alt=""
        src={FolderSvg}
      />
      <img
        className="left-arrow-in-circular-button-icon1-eld"
        alt=""
        src={Leftarrow}
        onClick={handlepreviousfinallist}
      />
      <div className="mobile-combustion-data-entry-inner-eld" />
      {/* <div className="mobile-combustion-data-entry-child6" /> */}
      <div className="select-month-eld">SI Units</div>
      <div className="mobile-combustion-data-entry-child6-eld" />
      <div className="">
      <select
                             value={formData.selectedMonth}
                             onChange={handleMonthChange}
                              className="month-dropdown mobile-combustion-data-entry-child6-eld"
                            >
                         <option value="">{`Select Month `}</option>
                            {MonthValue.map((reportingYear) => (
                                 <option key={reportingYear} value={reportingYear}>
                                       {reportingYear}
                         </option>
                        ))}
                        </select></div>
      <div className="type-of-electricity2-eld">Type of Electricity</div>
      
      {/* <input className="mobile-combustion-data-entry-child8" type="text" placeholder="    Facility Code"/>
      
      <input className="mobile-combustion-data-entry-child9" type="text" placeholder="    Facility Name"/> */}
      <select className="mobile-combustion-data-entry-child8-eld" value={formData.selectedFacilityCode} onChange={handleFacilityCodeChange}>
          <option value="">Facility Code</option>
          {facilityCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <select className="mobile-combustion-data-entry-child9-eld" value={formData.selectedFacilityName} onChange={handleFacilityNameChange}>
          <option value="">Facility Name</option>
          {facilityNames.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      <div className="facility1-eld">{`Facility `}</div>
      <div className="fuel1-eld">Consumption</div>
      {/* <div className="quantity2">Quantity of Gas Emitted</div> */}
      {/* <div className="si-units2">SI Units</div> */}
      <div className="Units-eld">SI Units</div>
      <div className="month1-eld">Month</div>
      <div className="div16-eld">1976</div>
      <div className="mtco21-eld">MTCO2</div>
      <img className="cart-12-icon1-eld" alt="" src={Cart1} />
      <b className="purchased-electricity1-eld">PURCHASED ELECTRICITY</b>
     
      
      {/* <buton className="mobile-combustion-data-entry-child12" onClick={addRow}>
        <b className="add-data">ADD DATA</b>
        <img className="add-6-icon" alt="" src={AddIcon}/>
      </buton> */}

      <img className="vector-icon-eld" alt="" src={Layer1}/>
      <img
        className="mobile-combustion-data-entry-child13-eld"
        alt=""
        src={Layer2}
      />
      <img
        className="mobile-combustion-data-entry-child14-eld"
        alt=""
        src={Layer3}
      />
      <div className="ellipse-div-eld" />
      <div className="mobile-combustion-data-entry-child15-eld" />
      <div className="mobile-combustion-data-entry-child16-eld" />
      <div className="mobile-combustion-data-entry-child17-eld" onClick={handleViewDataelvd} />
      <b className="view-data-eld" onClick={handleViewDataelvd}>VIEW DATA</b>
      <img className="add-8-icon-eld" alt="" src={SearchSvg} />
      <div className="attachments-eld">Attachments</div>
      <div className={`dynamic-rows-container-eld ${rowCount > 0 ? 'scrollable-eld' : ''}`}>
        <div>
          <div className="dynamic-rows-eld">{renderDynamicRows()}</div>
        </div>
      </div>
      <buton className="mobile-combustion-data-entry-child12-eld" onClick={addRow}>
        <img className="add-6-icon-eld" alt="" src={AddIcon}/>
        <b className="add-data-eld">ADD DATA</b>
      </buton>
    </form>
    </div>
 
    );
};

export default DataEntryelect;
