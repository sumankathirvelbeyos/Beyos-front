import React, { useState, useEffect,useContext } from "react";
import PropTypes from "prop-types";
import { AddIcon, Image ,CloseIcon} from "./../../../../assets_target";
import { AuthContext } from '../../../contextProvider/AuthContext';
const PopUpTarget = ({ className = "" ,onClose}) => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
    const [targetTypes, setTargetTypes] = useState([]);
  const [targetYears, setTargetYears] = useState([]);
  const [baseYears, setBaseYears] = useState([]);


  const [selectedTargetType, setSelectedTargetType] = useState('');
  const [selectedTargetYear, setSelectedTargetYear] = useState('');
  const [selectedBaseYear, setSelectedBaseYear] = useState('');
  const [scope1Emissions, setScope1Emissions] = useState('');
  const [scope2Emissions, setScope2Emissions] = useState('');
  const [reductionPercentage, setReductionPercentage] = useState('');
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/target');
      const data = await response.json();
      setTargetTypes(data.dropdownData.targetTypes);
      setTargetYears(data.dropdownData.targetYears);
      setBaseYears(data.dropdownData.baseYears);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async () => {
    const targetData = {
      targetType: selectedTargetType,
      targetYear: selectedTargetYear,
      baseYear: selectedBaseYear,
      scope1Emissions: scope1Emissions, 
      scope2Emissions: scope2Emissions, 
      reductionPercentage: reductionPercentage, 
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8080/target', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(targetData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Data submitted:', result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  
  const handleSubmitAndClose = async (e) => {
    e.preventDefault();
    await handleSubmit();
    onClose();
  };
 
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className={`set-target-popup-targetpage ${className}`}>
      <div className="set-target-popup-child-targetpage" />
      <img
        className="firefly-generate-an-image-of-s-targetpage"
        alt=""
        src={Image}
      />
       <b className="targets_popUp-targetpage">TARGETS</b>


      <div className="select-target-type-targetpage">Select Target Type</div>

      <div className="select-base-year-targetpage">Select Base Year</div>
      <div className="select-target-year-targetpage">Select Target Year</div>
      <div className="reduction-from-base-targetpage">% Reduction from base year</div>
      <div className="scope-1-emissions-targetpage">Scope 1 Emissions (MTCO2e)</div>
      <div className="set-target-popup-item-targetpage" />
      <div className="mtco2e-targetpage">MTCO2e</div>
      
      <div className="scope-2-emissions-targetpage">Scope 2 Emissions (MTCO2e)</div>

      <div className="set-target-popup-child1-targetpage" onClick={handleSubmitAndClose}/>
      <b className="set-target-1-targetpage" onClick={handleSubmitAndClose}>SET TARGET</b>
      <img className="add-4-icon_-targetpage" alt="" src={AddIcon}/>
      
      <div className=""> 
      <input className="set-target-popup-item-targetpage" placeholder="MTCO2e" type="text"value={scope1Emissions} 
  onChange={(e) => setScope1Emissions(e.target.value)}/>
      </div>

       <div className="">
       <input className="rectangle-div-mtco2e-targetpage" placeholder="MTCO2e" type="text" value={scope2Emissions} 
  onChange={(e) => setScope2Emissions(e.target.value)}/>
   </div>
   
   <div className="" >
   <input className="set-target-popup-inner-targetpage" placeholder="Enter reduction %" type="text" value={reductionPercentage} 
  onChange={(e) => setReductionPercentage(e.target.value)}/>

   </div>
      

     
      <div className="dropdown-box0-targetpage">
        <div className="">
          
          <div className="menu-label-targetpage">
          <select id="targetYear" className="header0-targetpage" value={selectedTargetYear} onChange={(e) => setSelectedTargetYear(e.target.value)}>
          <option value="">Select Target Year</option>
          {targetYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
            
          
          </div>
          
        </div>
        
      </div>

      
      <div className="dropdown-box1-targetpage">
        <div className="">
          
          <div className="menu-label-targetpage">
          <select id="baseYear" className="header0-targetpage" value={selectedBaseYear} onChange={(e) => setSelectedBaseYear(e.target.value)}>
          <option value="">Select Base Year</option>
          {baseYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
          </div> 
        </div>   
      </div>
      <div className="dropdown-box2-targetpage">
        <div className="">
        <select id="targetType" className="header0-targetpage" value={selectedTargetType} onChange={(e) => setSelectedTargetType(e.target.value)}>
          <option value="">Select Target Type</option>
          {targetTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        </div>

      </div>
     
      <img className="close-icon-targetpage" alt="Close" src={CloseIcon} onClick={onClose} />
    </div>
    ) : (
      <div className={`set-target-popup-targetpage ${className}`}>
      <div className="set-target-popup-child-targetpage" />
      <img
        className="firefly-generate-an-image-of-s-targetpage"
        alt=""
        src={Image}
      />
       <b className="targets_popUp-targetpage">TARGETS</b>


      <div className="select-target-type-targetpage">Select Target Type</div>

      <div className="select-base-year-targetpage">Select Base Year</div>
      <div className="select-target-year-targetpage">Select Target Year</div>
      <div className="reduction-from-base-targetpage">% Reduction from base year</div>
      <div className="scope-1-emissions-targetpage">Scope 1 Emissions (MTCO2e)</div>
      <div className="set-target-popup-item-targetpage" />
      <div className="mtco2e-targetpage">MTCO2e</div>
      
      <div className="scope-2-emissions-targetpage">Scope 2 Emissions (MTCO2e)</div>

      <div className="set-target-popup-child1-targetpage" onClick={handleSubmitAndClose}/>
      <b className="set-target-1-targetpage" onClick={handleSubmitAndClose}>SET TARGET</b>
      <img className="add-4-icon_-targetpage" alt="" src={AddIcon}/>
      
      <div className=""> 
      <input className="set-target-popup-item-targetpage" placeholder="MTCO2e" type="text"value={scope1Emissions} 
  onChange={(e) => setScope1Emissions(e.target.value)}/>
      </div>

       <div className="">
       <input className="rectangle-div-mtco2e-targetpage" placeholder="MTCO2e" type="text" value={scope2Emissions} 
  onChange={(e) => setScope2Emissions(e.target.value)}/>
   </div>
   
   <div className="" >
   <input className="set-target-popup-inner-targetpage" placeholder="Enter reduction %" type="text" value={reductionPercentage} 
  onChange={(e) => setReductionPercentage(e.target.value)}/>

   </div>
      

     
      <div className="dropdown-box0-targetpage">
        <div className="">
          
          <div className="menu-label-targetpage">
          <select id="targetYear" className="header0-targetpage" value={selectedTargetYear} onChange={(e) => setSelectedTargetYear(e.target.value)}>
          <option value="">Select Target Year</option>
          {targetYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
            
          
          </div>
          
        </div>
        
      </div>

      
      <div className="dropdown-box1-targetpage">
        <div className="">
          
          <div className="menu-label-targetpage">
          <select id="baseYear" className="header0-targetpage" value={selectedBaseYear} onChange={(e) => setSelectedBaseYear(e.target.value)}>
          <option value="">Select Base Year</option>
          {baseYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
          </div> 
        </div>   
      </div>
      <div className="dropdown-box2-targetpage">
        <div className="">
        <select id="targetType" className="header0-targetpage" value={selectedTargetType} onChange={(e) => setSelectedTargetType(e.target.value)}>
          <option value="">Select Target Type</option>
          {targetTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        </div>

      </div>
     
      <img className="close-icon-targetpage" alt="Close" src={CloseIcon} onClick={onClose} />
    </div>
    )}
  </div>
  );
};
PopUpTarget.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default PopUpTarget;
