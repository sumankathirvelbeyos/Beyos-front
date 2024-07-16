
import React, { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";
import { AuthContext } from '../../contextProvider/AuthContext';
import {AddDataIcon,CO2Icon,dataManagement1,AttachmentFileIcon,dataManagement2,dataManagement3,PieChartIcon,UserIcon,searchIcon,Vector1,Vector2,Vector3,whiteVariation,Rectangle1,LeftArrow, Line} from "../../../assets_fe_de"


const FugitiveDataEntry= () => { 
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlePrevOfFEDataEntry = () => {
  navigate('/finalList_fe');
};

    const [data, setData] = useState({
        facilityCodes: [],
        facilityNames: [],
        year: [],
        month: [],
      });
      // eslint-disable-next-line
      const [dataEntries, setDataEntries] = useState([]);// eslint-disable-next-line
      const [selectedFacilityCode, setSelectedFacilityCode] = useState('');
      const [selectedFacilityName, setSelectedFacilityName] = useState('');
      const [selectedYear,setSelectedYear]=useState('')
      const [selectedMonth,setSelectedMonth]=useState('')
      const [selectedFile, setSelectedFile] = useState(null);
      const [typeOfGasEmitted, setTypeOfGasEmitted] = useState('');
      const [refrigerantChargedNew, setRefrigerantChargedNew] = useState('');
    const [capacityOfEquipmentNew, setCapacityOfEquipmentNew] = useState('');
    const [refrigerantChargedExisting, setRefrigerantChargedExisting] = useState('');
    const [capacityOfEquipmentRetiring, setCapacityOfEquipmentRetiring] = useState('');
    const [refrigerantRecoveredRetiring, setRefrigerantRecoveredRetiring] = useState('');
    const [refrigerantPurchased, setRefrigerantPurchased] =useState('');
      const fetchData = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8080/dropdowns"); // Replace with your backend URL
          const fetchedData = await response.json();
          setData({
            facilityCodes: fetchedData.facilityCodes || [],
            
            facilityNames: fetchedData.facilityNames || [],
            year: fetchedData.year || [],
            month: fetchedData.month || [],
        });
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle errors gracefully, e.g., display an error message to the user
        }
      };
      const fetchDataEntries = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8080/fugitiveemissiondataentry");
          const fetchedEntries = await response.json();
          setDataEntries(fetchedEntries);
        } catch (error) {
          console.error("Error fetching data entries:", error);
        }
      };
      useEffect(() => {
        fetchData();
        fetchDataEntries();
      }, []);
    

      const handleFileChange = async (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    
        if (file) {
          const formData = new FormData();
          formData.append("file", file.name);
    
          try {
            const response = await fetch("http://127.0.0.1:8080/upload", {
              method: "POST",
              body: formData,
            });
    
            if (response.ok) {
              alert("File uploaded successfully!");
            } else {
              alert("File upload failed.");
            }
          } catch (error) {
            console.error("Error uploading file:", error);
            alert("File upload failed.");
          }
        }
      };  
  const onDataManagement1IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 17" to the project
  }, []);

  const onDataManagement4IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 21" to the project
  }, []);

  const onDataManagement2IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 20" to the project
  }, []);

  const onDataManagement3IconClick = useCallback(() => {
    // Please sync "Emission Measurement - Home Page" to the project
  }, []);

  const saveData = async () => {
    const formData = {
        facilityCode: selectedFacilityCode,
        facilityName: selectedFacilityName,
        year: selectedYear,
        month: selectedMonth,
        typeOfGasEmitted: typeOfGasEmitted,
        refrigerantChargedNew: refrigerantChargedNew,
        capacityOfEquipmentNew: capacityOfEquipmentNew,
        refrigerantChargedExisting: refrigerantChargedExisting,
        capacityOfEquipmentRetiring: capacityOfEquipmentRetiring,
        refrigerantRecoveredRetiring: refrigerantRecoveredRetiring,
        file: selectedFile.name
    };

    try {
        const response = await fetch("http://127.0.0.1:8080/fugitiveemissiondataentry", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Data saved successfully!");
        } else {
            alert("Failed to save data.");
        }
    } catch (error) {
        console.error("Error saving data:", error);
        alert("Failed to save data.");
    }
};

  const handleFacilityCodeChange = (e) => {
    setSelectedFacilityCode(e.target.value);

};
const handleFacilityNameChange = (e) => {
    setSelectedFacilityName(e.target.value);
};

const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
};

const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
};

const handleTypeOfGasEmittedChange = (e) => {
    setTypeOfGasEmitted(e.target.value);
};

const handleRefrigerantChargedNewChange = (e) => {
    setRefrigerantChargedNew(e.target.value);
};

const handleCapacityOfEquipmentNewChange = (e) => {
    setCapacityOfEquipmentNew(e.target.value);
};

const handleRefrigerantChargedExistingChange = (e) => {
    setRefrigerantChargedExisting(e.target.value);
};

const handleCapacityOfEquipmentRetiringChange = (e) => {
    setCapacityOfEquipmentRetiring(e.target.value);
};

const handleRefrigerantRecoveredRetiringChange = (e) => {
    setRefrigerantRecoveredRetiring(e.target.value);
};

const handlerefrigerantPurchased = (e) =>{
    setRefrigerantPurchased(e.target.value);
}
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className="mobile-combustion-data-entry-fe-de">
      <div className="mobile-combustion-data-entry-child-fe-de" />
      <img
        className="white-variation-1-fe-de"
        alt=""
        src={whiteVariation}
      />
      <div className="mobile-combustion-data-entry-item-fe-de" />
      <img className="user-5-1-fe-de" alt="" src={UserIcon} />
      <img
        className="data-management-1-icon-fe-de"
        alt=""
        src={dataManagement1}
        onClick={onDataManagement1IconClick}
      />
      <img
        className="data-management-4-icon-fe-de"
        alt=""
        src={PieChartIcon}
        onClick={onDataManagement4IconClick}
      />
      <img
        className="data-management-2-icon-fe-de"
        alt=""
        src={dataManagement2}
        onClick={onDataManagement2IconClick}
      />
      <div className="co2-parent-fe-de">
        <img className="co2" alt="" src={CO2Icon} />
      </div>
      <div className="dropdown-box-fe-de">
        <div className="">
        <div className="menu-label1-fe-de">
           <select className="header-fe-de" value={selectedYear} onChange={handleYearChange}>
    <option value="">Select Year</option>
    {data.year.map((yearOption) => ( // Change 'year' to 'yearOption'
      <option key={yearOption} value={yearOption}>
        {yearOption}
      </option>
    ))}
  </select>
</div>

        </div>

      </div>
      <div className="reporting-year-fe-de">Reporting Year</div>
      <img
        className="data-management-3-icon-fe-de"
        alt=""
        src={dataManagement3}
        onClick={onDataManagement3IconClick}
      />
      <img
        className="left-arrow-in-circular-button-icon-fe-de"
        onClick={handlePrevOfFEDataEntry}
        alt=""
        src={LeftArrow}
      />
      <div className="mobile-combustion-data-entry-inner-fe-de" />
      <div className="rectangle-div-fe-de" />
      <div className="rectangle-div-fe-de" />
      <div className="">
      <select className="rectangle-div-fe-de" value={selectedMonth} onChange={handleMonthChange}>
    <option value="">Select Month</option>
    {data.month.map((monthOption) => ( // Change 'year' to 'yearOption'
      <option key={monthOption} value={monthOption}>
        {monthOption}
      </option>
    ))}
  </select></div>
      <select className="mobile-combustion-data-entry-child2-fe-de" value={data.selectedFacilityCode} onChange={handleFacilityCodeChange}>
        <option value="">Select Facility Code</option>
        {data.facilityCodes.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <select className="mobile-combustion-data-entry-child3-fe-de" value={selectedFacilityName} onChange={handleFacilityNameChange}>
        <option value="">Select Facility Name</option>
        {data.facilityNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <div className="facility-fe-de">{`Facility `}</div>
      <div className="month-fe-de">Month</div>
      <div className="div-fe-de">647</div>
      <div className="mtco2-fe-de">MTCO2</div>
      <b className="fugitive-emissions-fe-de">FUGITIVE EMISSIONS</b>
      <div className="mobile-combustion-data-entry-child4-fe-de" onClick={saveData}/>
      <b className="add-data-fe-de" onClick={saveData}>ADD DATA</b>
      <img className="add-6-icon-fe-de" alt="" src={AddDataIcon} />
      <img className="cart-10-icon-fe-de" alt="" src={Rectangle1} />
        
      <input className="mobile-combustion-data-entry-child5-fe-de " type="text" placeholder='Type of gas emitted' value={typeOfGasEmitted} onChange={handleTypeOfGasEmittedChange} />
      <input className='mobile-combustion-data-entry-child6-fe-de' type="text" placeholder='Type of Gas emitted'value={refrigerantChargedNew} onChange={handleRefrigerantChargedNewChange}/>
      <div className="type-of-gas2-fe-de">Type of Gas</div>
      <div className="refrigerant-charged-new-container-fe-de">
        <span className="refrigerant-charged-fe-de">
          <span>Refrigerant Charged</span>
          <span className="span-fe-de">{` `}</span>
        </span>
        <span className="span-fe-de">
          <span>(New Equipment)</span>
        </span>
      </div>
      <input className="mobile-combustion-data-entry-child7-fe-de" type="text" placeholder="Type of Gas emitted" value={capacityOfEquipmentNew} onChange={handleCapacityOfEquipmentNewChange}/>
      <div className="capacity-of-equipment-container-fe-de">
        <span className="refrigerant-charged-fe-de">Capacity of Equipment</span>
        <span className="span-fe-de"> (New Equipment)</span>
      </div>
      <input className="mobile-combustion-data-entry-child8-fe-de" type="text" placeholder="Type of Gas emitted" value={capacityOfEquipmentRetiring} onChange={handleCapacityOfEquipmentRetiringChange}/>
      <div className="capacity-of-equipment-container1-fe-de">
        <span className="refrigerant-charged-fe-de">Capacity of Equipment</span>
        <span className="span-fe-de"> (Retiring Equipment)</span>
      </div>
      <input className="mobile-combustion-data-entry-child9-fe-de" type="text" placeholder="type-of-gas5" value={refrigerantChargedExisting} onChange={handleRefrigerantChargedExistingChange}/>
      <div className="refrigerant-charged-existing-container-fe-de">
        <span className="refrigerant-charged-fe-de">{`Refrigerant Charged `}</span>
        <span className="span-fe-de">(Existing Equipment)</span>
      </div>
      <input className="mobile-combustion-data-entry-child10-fe-de" type="text" placeholder='Type of Gas emitted' value={refrigerantPurchased} onChange={handlerefrigerantPurchased}/>
      <div className="refrigerant-purchased-fe-de">Refrigerant Purchased</div>
      <input className="mobile-combustion-data-entry-child11-fe-de" type="text" placeholder='type-of-gas7'value={refrigerantRecoveredRetiring} onChange={handleRefrigerantRecoveredRetiringChange}/>
      <div className="refrigerant-recovered-retirin-container-fe-de">
        <span>
          <span className="refrigerant-charged-fe-de">Refrigerant recovered</span>
          <span className="span1-fe-de">{` `}</span>
        </span>
        <span className="span-fe-de">(Retiring Equipment)</span>
      </div>

      <img className="line-icon-fe-de" alt="" src={Line}/>
      <img className="vector-icon-fe-de" alt="" src={Vector1} />
      <img
        className="mobile-combustion-data-entry-child14-fe-de"
        alt=""
        src={Vector2}
      />
      <img
        className="mobile-combustion-data-entry-child15-fe-de"
        alt=""
        src={Vector3}
      />
      <div className="ellipse-div-fe-de" />
      <div className="mobile-combustion-data-entry-child16-fe-de" />
      <div className="mobile-combustion-data-entry-child17-fe-de" />
      <div className="mobile-combustion-data-entry-child18-fe-de" />
      <b className="view-data-fe-de">VIEW DATA</b>
      <img className="add-8-icon-fe-de" alt="" src={searchIcon}/>
      <div className="attachments-fe-de">Attachments</div>
      <div className="mobile-combustion-data-entry-child19-fe-de">
      <img className="file-icon-fe-de" alt="" src={AttachmentFileIcon} />
      <label htmlFor="file-upload-fe-de" className="file-upload-input-fe-de" style={{ width: '' }}>
            File Upload</label>
        <input id="file-upload-fe-de" type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }}  onChange={handleFileChange} />
        </div>
    </div>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default FugitiveDataEntry;