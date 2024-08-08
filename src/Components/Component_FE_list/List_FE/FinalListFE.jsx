import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../../contextProvider/AuthContext';
import ProgressBarFE from "./Sub_ComponentFE/ProgressBarFE";
import { AddIcon,CartSvg,CircleSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "../../../assets_FE_list";
const FinalListFE= () => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlePrevOfFEViewDta = () => {
  navigate('/facility-emission-homepage');
};


const handleDataEntryFE = () => {
  navigate('/data-entry_fe');
};

    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('https://backend-new-419p.onrender.com/getfugitiveemmission',{email:"aswath@gmail.com"});
         // eslint-disable-next-line
          const jsonData = await response.data;
          setDataArray(response.data);
          setFilteredData(response.data|| []); // Ensure it's set to an array
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);
    
    // const handleButtonClick = (action) => {
    //     // Handle button click based on the specified action
    //     console.log(`Button clicked with action: ${action}`);
    //     // Implement action logic as needed
    // };
    const hasMoreUsers = filteredData.length > 3;

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
          const filtered = dataArray.filter(item => item.reportingYear === selected);
          setFilteredData(filtered);
        } else {
          setFilteredData(dataArray); // Set back to original data if no year selected
        }
      };
  return (

    <div className="mobile-combustion-list-fe-list">
      <div className="rectangle-parent-fe-list">
        <div className="frame-child-fe-list" />
        <div className="white-variation-1-wrapper-fe-list">
          <img
            className="white-variation-1-fe-list"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-fe-list">
          <div className="frame-parent-fe-list">
            <div className="data-management-3-wrapper-fe-list">
              <img
                className="data-management-3-icon-fe-list"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-fe-list">
              <div className="data-management-2-wrapper-fe-list">
                <img
                  className="data-management-2-icon-fe-list"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-fe-list"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input-fe-list co2-fe-list"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-fe-list" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-fe-list">
          <img
            className="data-management-4-icon-fe-list"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-fe-list">
        <section className="frame-container-fe-list">
          <div className="frame-div-fe-list">
            <div className="left-arrow-in-circular-button-parent-fe-list">
              <img
                className="left-arrow-in-circular-button-icon-fe-list"
                onClick={handlePrevOfFEViewDta}
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1-fe-list">
                <div className="frame-wrapper1-fe-list">
                  <div className="frame-parent2-fe-list">
                    <div className="reporting-year-wrapper-fe-list">
                      <div className="reporting-year-fe-list">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-fe-list">
                      <div className="">
                      
                        <div className="menu-label-wrapper-fe-list">
                        
                          <div className="menu-label-fe-list">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-fe-list header-fe-list"
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
                <div className="ellipse-parent-fe-list">
                  <div className="frame-inner-fe-list" />
                  <img
                    className="user-5-1-fe-list"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-fe-list">
            <div className="mobile-combustion-wrapper-fe-list">
              <h1 className="mobile-combustion-fe-list">FUGITIVE EMISSIONS</h1>
            </div>
            <img
              className="filter-1-icon-fe-list"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-fe-list">
              <div className="frame-parent4-fe-list">
                <div className="status-parent-fe-list">
                  <b className="status-fe-list">STATUS</b>
                  <b className="reporting-year1-fe-list">REPORTING YEAR</b>
                  <b className="responsibility-fe-list">RESPONSIBILITY</b>
                  <b className="facility-fe-list">FACILITY</b>
                  <b className="emission-type-fe-list">EMISSION TYPE</b>
                  <div className={`rectangle-group-container-fe-list ${hasMoreUsers ? 'scrollable-fe-list' : ''}`}>
                  <div>
                   {filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group-fe-list">
                    <div className="rectangle-div-fe-list" />
                    <div className="frame-wrapper2-fe-list">
                      <div className="frame-parent5-fe-list">
                        <div className="cart-2-parent-fe-list">
                          <div className="cart-2-fe-list" />
                          <img
                            className="cart-10-icon-fe-list"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-fe-list">
                          <div className="company-owned-vehicles-fe-list">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-fe-list">
                      <div className="facility-1-fe-list">{item.facilityName}</div>
                    </div>
                    <div className="manoj-wrapper-fe-list">
                      <div className="manoj-fe-list">{item.responsibility}</div>
                    </div>
                    <div className="wrapper-fe-list">
                      <div className="div-fe-list ">{item.year}</div>
                    </div>
                    <div className="frame-wrapper3-fe-list">
                      <div className="rectangle-container-fe-list">
                        <div className="frame-child1-fe-list" >

                            <ProgressBarFE progress={item.monthlyStatus} />
                        </div>
                       
                      </div>
                    </div>
                     <button className="frame-button-fe-list" onClick={handleDataEntryFE}>
                     {item.button && item.button.text ? item.button.text : ''}
                                                        <div className="frame-child13-fe-list" />
                                                        <div className="add-1-wrapper-fe-list">
                                                            <img className="add-1-icon-fe-list" alt="" src={AddIcon} />
                                                        </div>
                                                        <b className="add-data-fe-list">ADD DATA</b>
                                                    </button>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-fe-list">
                                <div className="scroll-bar-fe-list"></div>
                            </div>
                        )}
                  </div>
                </div>
                
              </div>
              {/* <div className="frame-wrapper6">
                <div className="rectangle-parent4">
                  <div className="frame-child28" />
                  <div className="frame-child29" />
                </div>
              </div> */}
            </footer>
          </div>
        </section>
      </main>
    </div>
 
  );
};

export default FinalListFE;
