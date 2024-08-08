import styles from "./BoundarySettingPage.module.css";
import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';
const BoundarySettingPage = ({ className = "" }) => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const[formData, setFormData] = useState({
    nooffacilities:'',
    calendar:false,
    fiscal:false,
    starting:'',
    ending:'',
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false,
    checkbox5:false,
    baseyear:'',
    scope1:'',
    scope2:'',
    scope3:'',
  });
  const navigate = useNavigate();
  const handleFacilityPage = () => {
  navigate('/facility');
};
const handlelogo=()=>{
  navigate('/landingpage')
}
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
    }));
};

const handleSubmit = async (e) => {
  try{
  e.preventDefault();
    const data = {
      "email": "sumand1@gmail.com"
  };
  
  fetch('https://backend-new-419p.onrender.com/boundarysetting', {
      method: 'POST', // Specify the method
      headers: {
          'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify(data), // Convert the object to a JSON string
  })
  .then(response => response.json()) // Parse the JSON from the response
  .then(data => {
      console.log('Success:', data);
      alert(data) // Handle the success
  })
  .catch((error) => {
      console.error('Error:', error); // Handle the error
  });
  
  }catch(error){
      console.log(error);
    alert("No functional Api attached to this project");
  }
};
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className={styles.boundarySettingPage}>
     
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.whiteVariation1}
          loading="lazy"
          alt=""
          src="/white-variation-1@2x.png"
          onClick={handlelogo}
        />
        <div className={styles.settings1Wrapper}>
          <img
            className={styles.settings1Icon}
            loading="lazy"
            alt=""
            src="/settings-1@2x.png"
          />
        </div>
      </div>
      <main className={styles.boundarySettingPageInner}>
      <form onSubmit={handleSubmit}>
        <div className={styles.frameParent}>
          <div className={styles.user51Wrapper}>
            {/* <img
              className={styles.user51}
              loading="lazy"
              alt=""
              src="/user-5-1@2x.png"
            /> */}
          </div>
          <div className={styles.beyosWrapper}>
            <h1 className={styles.beyos}>BeyOS</h1>
          </div>
          <div className={styles.dataCollectionTitle}>
            <h3 className={styles.dataCollection}>
              Data Collection - Boundary Setting
            </h3>
          </div>
          <div className={styles.facilitiesCountTitle}>
            <b className={styles.noOfFacilitiesContainer}>
              <ol className={styles.noOfFacilitiesToBeInclud}>
                <li>
                  No. of Facilities to be included for data collection that the
                  organization has direct operational or financial control.
                </li>
              </ol>
            </b>
          </div>
          <div className={styles.facilitiesSelection}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <select
                className={styles.noofffacilities}
                id='dropdown'
                name='nooffacilities'
                value={formData.nooffacilities}
                onChange={handleChange}
              >
                <option value=''>Select the No. of facilities</option>
                <option value='option1'>1</option>
                <option value='option1'>2</option>
                <option value='option1'>3</option>
                <option value='option1'>4</option>
                <option value='option1'>5</option>
              </select>
              <div className={styles.facilitiesWrapper}>
                <img
                  className={styles.facilitiesIcon}
                  alt=""
                  src="/facilities.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.baseYearSelection}>
            <b className={styles.reportingYearMethodologyContainer}>
              <ol className={styles.reportingYearMethodology}>
                <li>Reporting Year Methodology</li>
              </ol>
            </b>
          </div>
          <div className={[styles.reportingPeriod, className].join(" ")}>
      <div className={styles.calendarFiscalYear}>
        <div className={styles.calendarYearSelection}>
          <input 
            className={styles.calendarYearCheckbox}
            type="checkbox"
            name="calendar"
            checked={formData.calendar}
            onChange={handleChange}
            />
          <div className={styles.calendarYear}>Calendar Year </div>
        </div>

        <div className={styles.frameParent10}>
          <div className={styles.checkboxWrapper}>
            <input 
              className={styles.checkbox10}
              type="checkbox"
              name='fiscal'
              checked={formData.fiscal}
              onChange={handleChange}
              />
          </div>
          <div className={styles.fiscalYearTitleParent}>
            <div className={styles.fiscalYearTitle}>
              <div className={styles.fiscalYear}>Fiscal Year</div> 
            </div>
            <div className={styles.startingMonthParent}>
              {/* <div className={styles.startingMonth}>Starting Month</div> */}
              {/* <div className={styles.monthInput}>
                <div className={styles.monthInputChild} />
                <img
                  className={styles.monthInputItem}
                  loading="lazy"
                  alt=""
                  src="/facilities.svg"
                />
              </div> */}
              <input
                className={styles.starting}
                type='text'
                id='starting'
                name='starting'
                value={formData.starting}
                onChange={handleChange}
              />
              
            </div>
            <div className={styles.endingMonthParent}>
              {/* <div className={styles.endingMonth}>Ending Month</div> */}
              <div className={styles.parent10}>
                {/* <Button
                  id="button-undefined"
                  aria-controls="menu-undefined"
                  aria-haspopup="true"
                  aria-expanded={frameDropdownOpen ? "true" : undefined}
                  onClick={handleFrameDropdownClick}
                  color="primary"
                  sx={{ width: "137", height: "44" }}
                /> */}
                {/* <Menu
                  anchorEl={frameDropdownAnchorEl}
                  open={frameDropdownOpen}
                  onClose={handleFrameDropdownClose}
                /> */}
                <input
                className={styles.ending}
                type='text'
                id='ending'
                name='ending'
                value={formData.ending}
                onChange={handleChange}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          <div className={styles.baseYearSelection1}>
            <b className={styles.selectTheYearsContainer}>
              <ol className={styles.selectTheYearsToBeInclude}>
                <li>Select the years to be included for Data Management</li>
              </ol>
            </b>
          </div>
          <div className={[styles.checkboxGridWrapper, className].join(" ")}>
      <div className={styles.checkboxGrid}>
        <div className={styles.checkboxPair}>
          <input 
            className={styles.checkboxInstances}
            type="checkbox"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
            />
          <div className={styles.blankAndCheckbox}>2024</div>
        </div>
        <div className={styles.checkboxPair1}>
          <input 
            className={styles.frameInput}
            type="checkbox"
            name="checkbox2"
            checked={formData.checkbox2}
            onChange={handleChange}
             />
          <div className={styles.blankCellParent}>
            <div className={styles.blankCell}>2023</div>
            <div className={styles.nestedCheckbox}>
              <div className={styles.doubleBlank}>
                <div className={styles.blankOne}>2021</div>
                <div className={styles.blankTwo}>2020</div>
              </div>
              <input 
                className={styles.checkbox}
                type="checkbox"
                name="checkbox4"
                checked={formData.checkbox4}
                onChange={handleChange}
                />
            </div>
          </div>
        </div>
        <div className={styles.baseYearCheckbox}>
          <input 
            className={styles.frameInput1}
            type="checkbox"
            name="checkbox5"
            checked={formData.checkbox5}
            onChange={handleChange}
            />
          <div className={styles.parent}>
            <div className={styles.div}>2022</div>
            <input 
              className={styles.checkbox1}
              type="checkbox"
              name="checkbox3"
              checked={formData.checkbox3}
              onChange={handleChange}
              />
          </div>
        </div>
      </div>
    </div>
          <div className={styles.baseYearSelection2}>
            <b className={styles.selectYourBaseContainer}>
              <ol className={styles.selectYourBaseYearNoteC}>
                <li>{`Select your Base year (Note: Current year will be your base year if this is your first time of reporting) `}</li>
              </ol>
            </b>
            <select
              className={styles.baseyearr}
              id='dropdown'
              name='baseyear'
              value={formData.baseyear}
              onChange={handleChange}
            >
              <option value=''>Select Base Year</option>
              <option value='2024'>2024</option>
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
            </select>

           <div>
            <label className={styles.scope1}>Scope 1 Emissions</label>
              <input
                className={styles.scope1input}
                type='text'
                placeholder="Enter in tCO2e"
                id='scope1'
                name='scope1'
                value={formData.scope1}
                onChange={handleChange}
              />
           </div>

           <div>
            <label className={styles.scope2}>Scope 2 Emissions</label>
              <input
                className={styles.scope2input}
                type='text'
                placeholder="Enter in tCO2e"
                id='scope2'
                name='scope2'
                value={formData.scope2}
                onChange={handleChange}
              />
           </div>

           <div>
            <label className={styles.scope3}>Scope 3 Emissions</label>
              <input
                className={styles.scope3input}
                type='text'
                placeholder="Enter in tCO2e"
                id='scope3'
                name='scope3'
                value={formData.scope3}
                onChange={handleChange}
              />
           </div>       


          </div>

          <div className={[styles.baseYearInput, className].join(" ")}>
      <div className={styles.baseYearAndEmissionsWrapper}>
        
      </div>
      <div onClick={handleFacilityPage}>
      <button className={styles.addNextButtons} onClick={handleSubmit}>
        
        <div className={styles.addNextButtonsChild} />
        <div className={styles.addButton}>
         
        </div>
        <b className={styles.next}>NEXT</b>
      </button>
      </div>
    </div>
        </div>
        </form>
      </main>
      
    </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default BoundarySettingPage;
