import React, { useState, useEffect,useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {CartSvg,CircleSvg,WhitecartSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "./../../../assets_elvd/index";
const FinalListelvd= () => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
    const handlepreviouspagedataentry = () => {
    navigate('/dataEntry_elect');
};
// const handleNextPageRE = () => {
//   navigate('/dataEntryRE');
// };
  

    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     const [editingItem, setEditingItem] = useState(null);
     const [formData, setFormData] = useState({
       email:'',
       reportingYear: '',
       month: '',
       facilityCode: '',
       facilityName: '',
       typeofElectricity: '',
       quantity: '',
       units: '',
     });
     


  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
        try {
            const response = await axios.post('https://backend-new-419p.onrender.com/getpurchasedelectricity',{email:"alex@example.com"});
            console.log(response,"response from electricityyyyyyyyyyyyyyyyy")
            const data = await response.data;
            setDataArray(response.data);
            setFilteredData(response.data); // Initially, display all data
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
    const handleEdit = (id) => {
      const item = filteredData.find((item) => item.id === id);
      setEditingItem(item.id);
      setFormData({
        reportingYear: item.reportingYear,
        month: item.month,
        facilityCode: item.facilityCode,
        facilityName: item.facilityName,
        typeofElectricity: item.typeofElectricity,
        quantity: item.quantity,
        units: item.units,
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
        const response = await axios.post('https://backend-new-419p.onrender.com/getpurchasedelectricity', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error('Failed to update');
        }// eslint-disable-next-line
        const updatedItem = await response.json();
        
        // Update filteredData with the updated item
        // setFilteredData(filteredData.map(item => (item.reportingYear === updatedItem.reportingYear && item.month === updatedItem.month && item.facilityCode === updatedItem.facilityCode) ? updatedItem : item));
  
        // Clear form data after successful update
        setFormData({
          reportingYear: '',
          month: '',
          facilityCode: '',
          facilityName: '',
          typeofElectricity: '',
          quantity: '',
          units: '',
        });
      } catch (error) {
        console.error('Error updating item:', error);
      }
    };
      
    const hasMoreUsers = filteredData.length > 3;

      
      // const hasMoreUsers = dataArray.length > 3;


    
  return (
   
    <div className="mobile-combustion-list-elvd">
      <div className="rectangle-parent-elvd">
        <div className="frame-child-elvd" />
        <div className="white-variation-1-wrapper-elvd">
          <img
            className="white-variation-1-elvd"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-elvd">
          <div className="frame-parent-elvd">
            <div className="data-management-3-wrapper-elvd">
              <img
                className="data-management-3-icon-elvd"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-elvd">
              <div className="data-management-2-wrapper-elvd">
                <img
                  className="data-management-2-icon-elvd"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-elvd"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input co2-elvd"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-elvd" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-elvd">
          <img
            className="data-management-4-icon-elvd"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-elvd">
        <section className="frame-container-elvd">
          <div className="frame-div-elvd">
            <div className="left-arrow-in-circular-button-parent-elvd">
              <img
                className="left-arrow-in-circular-button-icon-elvd"
                loading="lazy"
                alt=""
                src={LeftArrow}
                onClick={handlepreviouspagedataentry}
              />
              <div className="frame-parent1-elvd">
                <div className="frame-wrapper1-elvd">
                  <div className="frame-parent2-elvd">
                    <div className="reporting-year-wrapper-elvd">
                      <div className="reporting-year-elvd">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-elvd">
                      <div className="">
                      
                        <div className="menu-label-wrapper-elvd">
                        
                          <div className="menu-label-elvd">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header-elvd"
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
                <div className="ellipse-parent-elvd">
                  <div className="frame-inner-elvd" />
                  <img
                    className="user-5-1-elvd"
                    loading="lazy-elvd"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-elvd">
            <div className="mobile-combustion-wrapper-elvd">
              <h1 className="mobile-combustion-elvd">PURCHASED ELECTRICITY</h1>
            </div>
            <div className="mobile-combustion-view-data-child6-elvd" />
            <img className="cart-12-icon-elvd" alt="" src={WhitecartSvg}/>
            <div className="div15-elvd">1976</div>
            <div className="mtco2-elvd">MTCO2</div>
            <img
              className="filter-1-icon-elvd"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-elvd">
              <div className="frame-parent4-elvd">
                <div className="status-parent-elvd">
                
                  <b className="reporting-year1-elvd">MONTH</b>
                  <b className="responsibility-elvd">REPORTING YEAR</b>
                  <b className="facility-elvd">FACILITY</b>
                  <b className="emission-type-elvd">EMISSION TYPE</b>
                  <b className="fuel-elvd">TYPE OF ELECTRICITY</b>
                  <b className="quantity-elvd">QUANTITY</b>
                 <b className="units-elvd">UNITS</b>
                 <b className="emission-elvd">EMISSION</b>
                
                  <div className={`rectangle-group-container-elvd ${hasMoreUsers ? 'scrollable-elvd' : ''}`}>
                  <div>
                  {dataArray.map((item) => (
                  <div key={item.id} className="rectangle-group-elvd">
                    <div className="rectangle-div-elvd" />
                    <div className="frame-wrapper2-elvd">
                      <div className="frame-parent5-elvd">
                      <div className="checkbox-elvd">
                        <div className="checkbox-child-elvd" />
                      </div>
                        <div className="cart-2-parent-elvd">
                          <div className="cart-2-elvd" />
                          <img
                            className="cart-10-icon-elvd"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-elvd">
                          <div className="company-owned-vehicles-elvd">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-elvd">
                      <div className="facility-1-elvd">{item.facilityName}</div>
                    </div>
                    <div className="manoj-wrapper-elvd">
                      <div className="manoj-elvd">{item.reportingYear}</div>
                    </div>
                    <div className="wrapper-elvd">
                      <div className="div-elvd">{item.month}</div>
                    </div>

                    <div className="frame-wrapper3-elvd">
                      <div className="rectangle-container-elvd">
                        <div className="frame-child1-elvd" >

                            {item.typeofElectricity}
                            
                        </div>
                       <div className="frame-child2-elvd" > {item.quantity}
                            </div>
                        <div className="frame-child3-elvd" >{item.units}</div>
                      </div>
                    </div>

                    <div className='emission-container-elvd'>
                       <div className='emission-quantity-elvd'>{item.emissions}</div>
                       
                       <div className="edit-container-elvd" onClick={() => handleEdit(item.id)}>
 
                           <a href="#Edit" className="edit-link-elvd">Edit</a>
                       </div>

                    <div className="frame-child13-elvd" />
                     
                    </div>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-elvd">
                                <div className="scroll-bar-elvd"></div>
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
          <div className="overlay-elvd">
            <form className="edit-form-elvd" onSubmit={handleFormSubmit}>
              <input
                className="input-field-elvd"
                name="reportingYear"
                value={formData.reportingYear}
                onChange={handleFormChange}
                placeholder="Reporting Year"
              />
              <input
                className="input-field-elvd"
                name="month"
                value={formData.month}
                onChange={handleFormChange}
                placeholder="Month"
              />
              <input
                className="input-field-elvd"
                name="facilityCode"
                value={formData.facilityCode}
                onChange={handleFormChange}
                placeholder="Facility Code"
              />
              <input
                className="input-field-elvd"
                name="facilityName"
                value={formData.facilityName}
                onChange={handleFormChange}
                placeholder="Facility Name"
              />
              <input
                className="input-field-elvd"
                name="typeofElectricity"
                value={formData.typeofElectricity}
                onChange={handleFormChange}
                placeholder="Type of Electricity"
              />
              <input
                className="input-field-elvd"
                name="quantity"
                value={formData.quantity}
                onChange={handleFormChange}
                placeholder="Quantity"
              />
              <input
                className="input-field-elvd"
                name="units"
                value={formData.units}
                onChange={handleFormChange}
                placeholder="Units"
              />
              <div className="button-container-elvd">
                <button type="submit" className="submit-button-elvd">Save</button>
                <button type="button" className="cancel-button-elvd" onClick={() => setEditingItem(null)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  
  );
};

export default FinalListelvd;
