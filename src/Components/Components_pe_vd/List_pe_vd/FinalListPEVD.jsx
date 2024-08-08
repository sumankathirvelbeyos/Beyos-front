import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../../contextProvider/AuthContext';
import {CartSvg,CircleSvg,WhitecartSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "../../../assets_pe_vd";
const FinalListPEVD= () => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
    const handlePrevOfPEViewDta = () => {
    navigate('/data-entry_pe');
};

    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     const [editingItem, setEditingItem] = useState(null);
     const [formData, setFormData] = useState({
      email:'',
       id: '',
       reportingYear: '',
       month: '',
       facilityCode: '',
       facilityName: '',
       GasType: '',
       emission: '',
       quantity: '',
       units: '',
     });
   
 
  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
        try {
            const response = await axios.post('https://backend-new-419p.onrender.com/getprocessemission',{email:"aswath@gmail.com"});
            console.log(response,"view data responsesssssssssssss")
            const data = await response.data;
            setDataArray(data);
            setFilteredData(data); // Initially, display all data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


    const yearRanges = [
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
         '2017-2018',

      ];
      const handleYearChange = (event) => {
        const selected = event.target.value;
        setSelectedYear(selected);

        if (selected) {
            // Filter data based on the selected year
            const filtered = dataArray.filter(item => item.reportingYear === selected);
            setFilteredData(filtered);
        } else {
            // If no year is selected, show all data
            setFilteredData(dataArray);
        }
    };
    
    const handleEdit = async (id) => {
      const item = filteredData.find((item) => item.id === id);
      setEditingItem(item.id);
      setFormData({
        id: item.id,
        reportingYear: item.reportingYear,
        month: item.month,
        facilityCode: item.facilityCode,
        facilityName: item.facilityName,
        GasType: item.GasType,
        emission: item.emission || '', // Ensure default value if property is undefined
        quantity: item.quantity,
        units: item.units || '', // Ensure default value if property is undefined
      });
    };
  
    const handleFormChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('https://backend-new-419p.onrender.com/getprocessemission', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const updatedItem = await response.json();
        setFilteredData(
          filteredData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
        setDataArray(dataArray.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
        setFormData({
          id: '',
          reportingYear: '',
          month: '',
          facilityCode: '',
          facilityName: '',
          GasType: '',
          emission: '',
          quantity: '',
          siUnits: '',
        });
        setEditingItem(null); // Clear editing state after successful update
      } catch (error) {
        console.error('Error updating item:', error.message);
        // Implement UI feedback for the user, e.g., setErrorMessage(error.message)
      }
    };
  
    const hasMoreUsers = filteredData.length > 3;

      
      // const hasMoreUsers = dataArray.length > 3;


    
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className="mobile-combustion-list-pe-vd">
      <div className="rectangle-parent-pe-vd">
        <div className="frame-child-pe-vd" />
        <div className="white-variation-1-wrapper-pe-vd">
          <img
            className="white-variation-1-pe-vd-pe-vd"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-pe-vd">
          <div className="frame-parent-pe-vd">
            <div className="data-management-3-wrapper-pe-vd">
              <img
                className="data-management-3-icon-pe-vd"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-pe-vd">
              <div className="data-management-2-wrapper-pe-vd">
                <img
                  className="data-management-2-icon-pe-vd"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-pe-vd"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input-pe-vd co2-pe-vd"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-pe-vd" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-pe-vd">
          <img
            className="data-management-4-icon-pe-vd"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-pe-vd">
        <section className="frame-container-pe-vd">
          <div className="frame-div-pe-vd">
            <div className="left-arrow-in-circular-button-parent-pe-vd">
              <img
                className="left-arrow-in-circular-button-icon-pe-vd"
                onClick={handlePrevOfPEViewDta}
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1-pe-vd">
                <div className="frame-wrapper1-pe-vd">
                  <div className="frame-parent2-pe-vd">
                    <div className="reporting-year-wrapper-pe-vd">
                      <div className="reporting-year-pe-vd">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-pe-vd">
                      <div className="">
                      
                        <div className="menu-label-wrapper-pe-vd">
                        
                          <div className="menu-label-pe-vd">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-pe-vd header-pe-vd"
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
                  </div>
                </div>
                <div className="ellipse-parent-pe-vd">
                  <div className="frame-inner-pe-vd" />
                  <img
                    className="user-5-1-pe-vd"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-pe-vd">
            <div className="mobile-combustion-wrapper-pe-vd">
              <h1 className="mobile-combustion-pe-vd">PROCESS EMISSIONS</h1>
            </div>
            <div className="mobile-combustion-view-data-child6-pe-vd" />
            <img className="cart-12-icon-pe-vd" alt="" src={WhitecartSvg}/>
            <div className="div15-pe-vd">1423</div>
            <div className="mtco2-pe-vd">MTCO2</div>
            <img
              className="filter-1-icon-pe-vd"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-pe-vd">
              <div className="frame-parent4-pe-vd">
                <div className="status-parent-pe-vd">
                
                  <b className="reporting-year1-pe-vd">MONTH</b>
                  <b className="responsibility-pe-vd">REPORTING YEAR</b>
                  <b className="facility-pe-vd">FACILITY</b>
                  <b className="emission-type-pe-vd">EMISSION TYPE</b>
                  <b className="fuel-pe-vd">TYPE OF GAS</b>
                  <b className="quantity-pe-vd">QUANTITY</b>
                 <b className="units-pe-vd">UNITS</b>
                 <b className="emission-pe-vd">EMISSION</b>
                
                  <div className={`rectangle-group-container-pe-vd ${hasMoreUsers ? 'scrollable-pe-vd' : ''}`}>
                  <div>
                  {dataArray.map((item) => (
                  <div key={item.id} className="rectangle-group-pe-vd">
                    <div className="rectangle-div-pe-vd" />
                    <div className="frame-wrapper2-pe-vd">
                      <div className="frame-parent5-pe-vd">
                      <div className="checkbox-pe-vd">
                        <div className="checkbox-child-pe-vd" />
                      </div>
                        <div className="cart-2-parent-pe-vd">
                          <div className="cart-2-pe-vd" />
                          <img
                            className="cart-10-icon-pe-vd"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-pe-vd">
                          <div className="company-owned-vehicles-pe-vd">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-pe-vd">
                      <div className="facility-1-pe-vd">{item.facilityName}</div>
                    </div>
                    <div className="manoj-wrapper-pe-vd">
                      <div className="manoj-pe-vd">{item.year}</div>
                    </div>
                    <div className="wrapper-pe-vd">
                      <div className="div-pe-vd">{item.month}</div>
                    </div>

                    <div className="frame-wrapper3-pe-vd">
                      <div className="rectangle-container-pe-vd">
                        <div className="frame-child1-pe-vd" >

                            {item.GasType}
                            
                        </div>
                       <div className="frame-child2-pe-vd" > {item.quantity}
                            </div>
                        <div className="frame-child3-pe-vd" >{item.siUnits}</div>
                      </div>
                    </div>
                    <div className='emission-container-pe-vd'>
                       <div className='emission-quantity-pe-vd'>{item.emission}</div>
                       
                       <div className="edit-container-pe-vd"  onClick={() => handleEdit(item.id)}>
 
                           <a href="#Edit" className="edit-link-pe-vd">Edit</a>
                       </div>

                    <div className="frame-child13-pe-vd" />
                     
                    </div>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-pe-vd">
                                <div className="scroll-bar-pe-vd"></div>
                            </div>
                        )}
                  </div>
                </div>
                
              </div>

            </footer>
          </div>
        </section>

         {/* Overlay and edit form */}
         {editingItem && (
          <div className="overlay-pevd">
            <form className="edit-form-pevd"  onSubmit={handleFormSubmit}>
              <input
                className="input-field-pevd"
                name="reportingYear"
                value={formData.reportingYear}
                onChange={handleFormChange}
                placeholder="Reporting Year"
              />
              <input
                className="input-field-pevd"
                name="month"
                value={formData.month}
                onChange={handleFormChange}
                placeholder="Month"
              />
              <input
                className="input-field-pevd"
                name="facilityCode"
                value={formData.facilityCode}
                onChange={handleFormChange}
                placeholder="Facility Code"
              />
              <input
                className="input-field-pevd"
                name="facilityName"
                value={formData.facilityName}
                onChange={handleFormChange}
                placeholder="Facility Name"
              />
              <input
              className="input-field-pevd"
              name="GasType" 
               value={formData.GasType}
              onChange={handleFormChange}
              placeholder="Type of Gas"
              />

              <input
                className="input-field-pevd"
                name="Source"
                value={formData.Source}
                onChange={handleFormChange}
                placeholder="Source"
              />
              <input
                className="input-field-pevd"
                name="quantity"
                value={formData.quantity}
                onChange={handleFormChange}
                placeholder="Quantity"
              />
              <input
                className="input-field-pevd"
                name="units"
                value={formData.units}
                onChange={handleFormChange}
                placeholder="Units"
              />
              <div className="button-container-pevd">
                <button type="submit" className="submit-button-pevd">Save</button>
                <button type="button" className="cancel-button-pevd" onClick={() => setEditingItem(null)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  ) : (
      <p>You are not logged in.</p>
    )}
  </div>
  );
};

export default FinalListPEVD;
