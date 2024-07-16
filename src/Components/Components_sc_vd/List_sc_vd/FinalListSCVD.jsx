import React, { useState, useEffect ,useContext} from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../../contextProvider/AuthContext';
import {CartSvg,CircleSvg,WhitecartSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "../../../assets_sc_vd";
const FinalListSCVD= () => {
  
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const handlePrevofViewdata = () => {
navigate('/data-entry_sc');
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
       typeofElectricity: '',
       quantity: '',
       units: '',
     });


  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/stationarycombustiondataentry');
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
        facilityName: item.facility,
        fuel: item.fuelType,
        quantity: item.quantity,
        units: item.siUnits,
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
        const response = await fetch('http://127.0.0.1:8080/stationarycombustiondataentry', {
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
        setFilteredData(filteredData.map(item => (item.reportingYear === updatedItem.reportingYear && item.month === updatedItem.month && item.facilityCode === updatedItem.facilityCode) ? updatedItem : item));
  
        // Clear form data after successful update
        setFormData({
          reportingYear: '',
          month: '',
          facilityCode: '',
          facilityName: '',
          fuelType: '',
          quantity: '',
          siUnits: '',
        });
      } catch (error) {
        console.error('Error updating item:', error);
      }
    };
      
    const hasMoreUsers = filteredData.length > 3;

      
      // const hasMoreUsers = dataArray.length > 3;


    
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className="mobile-combustion-list-sc-vd">
      <div className="rectangle-parent-sc-vd">
        <div className="frame-child-sc-vd" />
        <div className="white-variation-1-wrapper-sc-vd">
          <img
            className="white-variation-1-sc-vd"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-sc-vd">
          <div className="frame-parent-sc-vd">
            <div className="data-management-3-wrapper-sc-vd">
              <img
                className="data-management-3-icon-sc-vd"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-sc-vd">
              <div className="data-management-2-wrapper-sc-vd">
                <img
                  className="data-management-2-icon-sc-vd"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-sc-vd"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input-sc-vd co2-sc-vd"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-sc-vd" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-sc-vd">
          <img
            className="data-management-4-icon-sc-vd"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-sc-vd">
        <section className="frame-container-sc-vd">
          <div className="frame-div-sc-vd">
            <div className="left-arrow-in-circular-button-parent-sc-vd" onClick={handlePrevofViewdata}>
              <img
                className="left-arrow-in-circular-button-icon-sc-vd"
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1-sc-vd">
                <div className="frame-wrapper1-sc-vd">
                  <div className="frame-parent2-sc-vd">
                    <div className="reporting-year-wrapper-sc-vd">
                      <div className="reporting-year-sc-vd">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-sc-vd">
                      <div className="">
                      
                        <div className="menu-label-wrapper-sc-vd">
                        
                          <div className="menu-label-sc-vd">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-sc-vd header-sc-vd"
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
                <div className="ellipse-parent-sc-vd">
                  <div className="frame-inner-sc-vd" />
                  <img
                    className="user-5-1-sc-vd"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-sc-vd">
            <div className="mobile-combustion-wrapper-sc-vd">
              <h1 className="mobile-combustion-sc-vd">STATIONARY COMBUSTION</h1>
            </div>
            <div className="mobile-combustion-view-data-child6-sc-vd" />
            <img className="cart-12-icon-sc-vd" alt="" src={WhitecartSvg}/>
            <div className="div15-sc-vd">1423</div>
            <div className="mtco2-sc-vd">MTCO2</div>
            <img
              className="filter-1-icon-sc-vd"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-sc-vd">
              <div className="frame-parent4-sc-vd">
                <div className="status-parent-sc-vd">
                
                  <b className="reporting-year1-sc-vd">MONTH</b>
                  <b className="responsibility-sc-vd">REPORTING YEAR</b>
                  <b className="facility-sc-vd">FACILITY</b>
                  <b className="emission-type-sc-vd">EMISSION TYPE</b>
                  <b className="fuel-sc-vd">FUEL</b>
                  <b className="quantity-sc-vd">QUANTITY</b>
                 <b className="units-sc-vd">UNITS</b>
                 <b className="emission-sc-vd">EMISSION</b>
                <b className="typeofvehicle-sc-vd">SOURCE</b>
                  <div className={`rectangle-group-container-sc-vd ${hasMoreUsers ? 'scrollable-sc-vd' : ''}`}>
                  <div>
                  {filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group-sc-vd">
                    <div className="rectangle-div-sc-vd" />
                    <div className="frame-wrapper2-sc-vd">
                      <div className="frame-parent5-sc-vd">
                      <div className="checkbox-sc-vd">
                        <div className="checkbox-child-sc-vd" />
                      </div>
                        <div className="cart-2-parent-sc-vd">
                          <div className="cart-2-sc-vd" />
                          <img
                            className="cart-10-icon-sc-vd"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-sc-vd">
                          <div className="company-owned-vehicles-sc-vd">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-sc-vd">
                      <div className="facility-1-sc-vd">{item.facility}</div>
                    </div>
                    <div className="manoj-wrapper-sc-vd">
                      <div className="manoj-sc-vd">{item.reportingYear}</div>
                    </div>
                    <div className="wrapper-sc-vd">
                      <div className="div-sc-vd">{item.month}</div>
                    </div>

                    <div className="frame-wrapper3-sc-vd">
                      <div className="rectangle-container-sc-vd">
                        <div className="frame-child1-sc-vd" >

                            {item.fuel}
                            
                        </div>
                       <div className="frame-child2-sc-vd" > {item.quantity}
                            </div>
                        <div className="frame-child3-sc-vd" >{item.units}</div>
                      </div>
                    </div>
                    <div className='emission-container-sc-vd'>
                       <div className='emission-quantity-sc-vd'>{item.emission}</div>
                       <div className="vehicle-sc-vd">{item.EmissionSource}</div>
                       <div className="edit-container-sc-vd" onClick={() => handleEdit(item.id)}>
 
                           <a href="#Edit" className="edit-link-sc-vd">Edit</a>
                       </div>

                    <div className="frame-child13-sc-vd" />
                     
                    </div>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-sc-vd">
                                <div className="scroll-bar-sc-vd"></div>
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
          <div className="overlay-scvd">
            <form className="edit-form-scvd" onSubmit={handleFormSubmit}>
              <input
                className="input-field-scvd"
                name="reportingYear"
                value={formData.reportingYear}
                onChange={handleFormChange}
                placeholder="Reporting Year"
              />
              <input
                className="input-field-scvd"
                name="month"
                value={formData.month}
                onChange={handleFormChange}
                placeholder="Month"
              />
              <input
                className="input-field-scvd"
                name="facilityCode"
                value={formData.facilityCode}
                onChange={handleFormChange}
                placeholder="Facility Code"
              />
              <input
                className="input-field-scvd"
                name="facilityName"
                value={formData.facilityName}
                onChange={handleFormChange}
                placeholder="Facility Name"
              />
              <input
                className="input-field-scvd"
                name="typeofElectricity"
                value={formData.fuel}
                onChange={handleFormChange}
                placeholder="Type of Electricity"
              />
              <input
                className="input-field-scvd"
                name="quantity"
                value={formData.quantity}
                onChange={handleFormChange}
                placeholder="Quantity"
              />
              <input
                className="input-field-scvd"
                name="units"
                value={formData.units}
                onChange={handleFormChange}
                placeholder="Units"
              />
              <div className="button-container-scvd">
                <button type="submit" className="submit-button-scvd">Save</button>
                <button type="button" className="cancel-button-scvd" onClick={() => setEditingItem(null)}>Cancel</button>
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

export default FinalListSCVD;
