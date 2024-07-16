import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

import {CartSvg,CircleSvg,WhitecartSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "../../../assets_mc_vd";
const FinalListMCVD= () => {
  
  
  const navigate = useNavigate();
  const handlePrevofMCVD = () => {
  navigate('/data-entry_mc');
};
    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     const [editingItem, setEditingItem] = useState(null);
     const [formData, setFormData] = useState({
       reportingYear: '',
       month: '',
       facilityCode: '',
       facilityName: '',
       fuelType: '',
       vehicleType:'',
       quantity: '',
       units: '',
     });


  //    useEffect(() => {
  //     // Initialize staticDataArray inside the useEffect callback
  //     const staticDataArray = [
  //         { id: 1, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility1', reportingYear: '2022-2023', month: 'January', fuel: 'petrol', quantity: 14478, units: 'Litres', emission: 876, typeofvehicle: 'Forklift' },
  //         { id: 2, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility2', reportingYear: '2022-2023', month: 'February', fuel: 'diesel', quantity: 463, units: 'Litres', emission: 853, typeofvehicle: 'Forklift' },
  //         { id: 3, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility3', reportingYear: '2022-2023', month: 'March', fuel: 'petrol', quantity: 19767, units: 'Litres', emission: 254, typeofvehicle: 'Truck' },
  //         { id: 4, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility4', reportingYear: '2022-2023', month: 'January', fuel: 'diesel', quantity: 80, units: 'Litres', emission: 233, typeofvehicle: 'Car' },
  //         { id: 5, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility5', reportingYear: '2022-2023', month: 'January', fuel: 'diesel', quantity: 177, units: 'Litres', emission: 55, typeofvehicle: 'Forklift' }
  //     ];

  //     setDataArray(staticDataArray); // Set the static data array to the state
  // }, []); 

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/mobilecombustiondataentry');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
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
    const handleEdit = (id) => {
      const item = filteredData.find((item) => item.id === id);
      setEditingItem(item.id);
      setFormData({
        reportingYear: item.reportingYear,
        month: item.month,
        facilityCode: item.facilityCode,
        facilityName: item.facilityName,
        fuelType: item.fuel,
        vehicleType: item.typeofvehicle,
        quantity: item.quantity,
        siUnits: item.units,
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
        const response = await fetch('http://127.0.0.1:8080/mobilecombustiondataentry', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error('Failed to update');
        }
        const updatedItem = await response.json();
        
        // Update filteredData with the updated item
        setFilteredData(filteredData.map(item => (item.id === updatedItem.id) ? updatedItem : item));
        setDataArray(dataArray.map(item => (item.id === updatedItem.id) ? updatedItem : item));
  
        // Clear form data after successful update
        setFormData({
          reportingYear: '',
          month: '',
          facilityCode: '',
          facilityName: '',
          fuelType: '',
          vehicleType: '',
          quantity: '',
          siUnits: '',
        });
        setEditingItem(null);
      } catch (error) {
        console.error('Error updating item:', error);
      }
    };  
    const hasMoreUsers = filteredData.length > 3;

      
      // const hasMoreUsers = dataArray.length > 3;


    
  return (
    <div className="mobile-combustion-list-mc-vd">
      <div className="rectangle-parent-mc-vd">
        <div className="frame-child-mc-vd" />
        <div className="white-variation-1-wrapper-mc-vd">
          <img
            className="white-variation-1-mc-vd"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-mc-vd">
          <div className="frame-parent-mc-vd">
            <div className="data-management-3-wrapper-mc-vd">
              <img
                className="data-management-3-icon-mc-vd"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-mc-vd">
              <div className="data-management-2-wrapper-mc-vd">
                <img
                  className="data-management-2-icon-mc-vd"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-mc-vd"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input-mc-vd co2-mc-vd"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-mc-vd" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-mc-vd">
          <img
            className="data-management-4-icon-mc-vd"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-mc-vd">
        <section className="frame-container-mc-vd">
          <div className="frame-div-mc-vd">
            <div className="left-arrow-in-circular-button-parent-mc-vd">
              <img
                className="left-arrow-in-circular-button-icon-mc-vd"
                onClick={handlePrevofMCVD}
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1-mc-vd">
                <div className="frame-wrapper1-mc-vd">
                  <div className="frame-parent2-mc-vd">
                    <div className="reporting-year-wrapper-mc-vd">
                      <div className="reporting-year-mc-vd">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-mc-vd">
                      <div className="">
                      
                        <div className="menu-label-wrapper-mc-vd">
                        
                          <div className="menu-label-mc-vd">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-mc-vd header-mc-vd"
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
                <div className="ellipse-parent-mc-vd">
                  <div className="frame-inner-mc-vd" />
                  <img
                    className="user-5-1-mc-vd"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-mc-vd">
            <div className="mobile-combustion-wrapper-mc-vd">
              <h1 className="mobile-combustion-mc-vd">MOBILE COMBUSTION</h1>
            </div>
            <div className="mobile-combustion-view-data-child6-mc-vd" />
            <img className="cart-12-icon-mc-vd" alt="" src={WhitecartSvg}/>
            <div className="div15-mc-vd">750</div>
            <div className="mtco2-mc-vd">MTCO2</div>
            <img
              className="filter-1-icon-mc-vd"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-mc-vd">
              <div className="frame-parent4-mc-vd">
                <div className="status-parent-mc-vd">
                
                  <b className="reporting-year1-mc-vd">MONTH</b>
                  <b className="responsibility-mc-vd">REPORTING YEAR</b>
                  <b className="facility-mc-vd">FACILITY</b>
                  <b className="emission-type-mc-vd">EMISSION TYPE</b>
                  <b className="fuel-mc-vd">FUEL</b>
                  <b className="quantity-mc-vd">QUANTITY</b>
                 <b className="units-mc-vd">UNITS</b>
                 <b className="emission-mc-vd">EMISSION</b>
                <b className="typeofvehicle-mc-vd">TYPE OF VEHICLE</b>
                  <div className={`rectangle-group-container-mc-vd ${hasMoreUsers ? 'scrollable-mc-vd' : ''}`}>
                  <div>
                  {filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group-mc-vd">
                    <div className="rectangle-div-mc-vd" />
                    <div className="frame-wrapper2-mc-vd">
                      <div className="frame-parent5-mc-vd">
                      <div className="checkbox-mc-vd">
                        <div className="checkbox-child-mc-vd" />
                      </div>
                        <div className="cart-2-parent-mc-vd">
                          <div className="cart-2-mc-vd" />
                          <img
                            className="cart-10-icon-mc-vd"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-mc-vd">
                          <div className="company-owned-vehicles-mc-vd">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-mc-vd">
                      <div className="facility-1-mc-vd">{item.facilityName}</div>
                    </div>
                    <div className="manoj-wrapper-mc-vd">
                      <div className="manoj-mc-vd">{item.year}</div>
                    </div>
                    <div className="wrapper-mc-vd">
                      <div className="div-mc-vd">{item.month}</div>
                    </div>

                    <div className="frame-wrapper3-mc-vd">
                      <div className="rectangle-container-mc-vd">
                        <div className="frame-child1-mc-vd" >

                            {item.fuelType}
                            
                        </div>
                       <div className="frame-child2-mc-vd" > {item.quantity}
                            </div>
                        <div className="frame-child3-mc-vd" >{item.siUnits}</div>
                      </div>
                    </div>
                    <div className='emission-container-mc-vd'>
                       <div className='emission-quantity-mc-vd'>{item.emissions}</div>
                       <div className="vehicle-mc-vd">{item.vehicleType}</div>
                       <div className="edit-container-mc-vd" onClick={() => handleEdit(item.id)}>
 
                           <a href="#Edit" className="edit-link-mc-vd">Edit</a>
                       </div>

                    <div className="frame-child13-mc-vd" />
                     
                    </div>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-mc-vd">
                                <div className="scroll-bar-mc-vd"></div>
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
          <div className="overlay-mcvd">
            <form className="edit-form-mcvd" onSubmit={handleFormSubmit}>
              <input
                className="input-field-mcvd"
                name="reportingYear"
                value={formData.reportingYear}
                onChange={handleFormChange}
                placeholder="Reporting Year"
              />
              <input
                className="input-field-mcvd"
                name="month"
                value={formData.month}
                onChange={handleFormChange}
                placeholder="Month"
              />
              <input
                className="input-field-mcvd"
                name="facilityCode"
                value={formData.facilityCode}
                onChange={handleFormChange}
                placeholder="Facility Code"
              />
              <input
                className="input-field-mcvd"
                name="facilityName"
                value={formData.facilityName}
                onChange={handleFormChange}
                placeholder="Facility Name"
              />
              <input
                className="input-field-mcvd"
                name="typeofElectricity"
                value={formData.vehicleType}
                onChange={handleFormChange}
                placeholder="Type of Electricity"
              />
              <input
                className="input-field-mcvd"
                name="fuel type"
                value={formData.fuelType}
                onChange={handleFormChange}
                placeholder="Type of Fuel"
              />
              <input
                className="input-field-mcvd"
                name="quantity"
                value={formData.quantity}
                onChange={handleFormChange}
                placeholder="Quantity"
              />
              <input
                className="input-field-mcvd"
                name="units"
                value={formData.units}
                onChange={handleFormChange}
                placeholder="Units"
              />
              <div className="button-container-mcvd">
                <button type="submit" className="submit-button-mcvd">Save</button>
                <button type="button" className="cancel-button-mcvd" onClick={() => setEditingItem(null)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default FinalListMCVD;
