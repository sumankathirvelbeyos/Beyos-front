import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../../contextProvider/AuthContext';
import axios from "axios";
import ProgressBarMC from './Sub_Component_MC_list/ProgressBarMC';
import { AddIcon,CartSvg,CircleSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "../../../assets_mc_list";
const FinalListMC= () => {
// eslint-disable-next-line
const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
    const handlePrevOfMCList = () => {
    navigate('/facility-emission-homepage');
};
const handleMCDataentry = () => {
  navigate('/data-entry_mc');
};
    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8080/mobilecombustiondataentry');
          setDataArray(response.data); // Update state with response data directly
          setFilteredData(response.data); // Initially set filtered data to all data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
 
    // const handleButtonClick = (action) => {
    //     // Handle button click based on the specified action
    //     console.log(`Button clicked with action: ${action}`);
    //     // Implement action logic aitem.s needed
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
            setFilteredData(dataArray);
        }
    };

  return (
    <div>
    {auth.isAuthenticated ? (
    <div className="mobile-combustion-list-mc-list">
      <div className="rectangle-parent-mc-list">
        <div className="frame-child-mc-list" />
        <div className="white-variation-1-wrapper-mc-list">
          <img
            className="white-variation-1-mc-list"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-mc-list">
          <div className="frame-parent-mc-list">
            <div className="data-management-3-wrapper-mc-list">
              <img
                className="data-management-3-icon-mc-list"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-mc-list">
              <div className="data-management-2-wrapper-mc-list">
                <img
                  className="data-management-2-icon-mc-list"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-mc-list"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input-mc-list co2-mc-list"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-mc-list" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-mc-list">
          <img
            className="data-management-4-icon-mc-list"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-mc-list">
        <section className="frame-container-mc-list">
          <div className="frame-div-mc-list">
            <div className="left-arrow-in-circular-button-parent-mc-list" onClick={handlePrevOfMCList}>
              <img
                className="left-arrow-in-circular-button-icon-mc-list"
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1-mc-list">
                <div className="frame-wrapper1-mc-list">
                  <div className="frame-parent2-mc-list">
                    <div className="reporting-year-wrapper-mc-list">
                      <div className="reporting-year-mc-list">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-mc-list">
                      <div className="">
                      
                        <div className="menu-label-wrapper-mc-list">
                        
                          <div className="menu-label-mc-list">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-mc-list header-mc-list"
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
                <div className="ellipse-parent-mc-list">
                  <div className="frame-inner-mc-list" />
                  <img
                    className="user-5-1-mc-list"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-mc-list">
            <div className="mobile-combustion-wrapper-mc-list">
              <h1 className="mobile-combustion-mc-list">MOBILE COMBUSTION</h1>
            </div>
            <img
              className="filter-1-icon-mc-list"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-mc-list">
              <div className="frame-parent4-mc-list">
                <div className="status-parent-mc-list">
                  <b className="status-mc-list">STATUS</b>
                  <b className="reporting-year1-mc-list">REPORTING YEAR</b>
                  <b className="responsibility-mc-list">RESPONSIBILITY</b>
                  <b className="facility-mc-list">FACILITY</b>
                  <b className="emission-type-mc-list">EMISSION TYPE</b>
                  <div className={`rectangle-group-container-mc-list ${hasMoreUsers ? 'scrollable-mc-list' : ''}`}>
                  <div>
                   {filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group-mc-list">
                    <div className="rectangle-div-mc-list" />
                    <div className="frame-wrapper2-mc-list">
                      <div className="frame-parent5-mc-list">
                        <div className="cart-2-parent-mc-list">
                          <div className="cart-2-mc-list" />
                          <img
                            className="cart-10-icon-mc-list"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-mc-list">
                          <div className="company-owned-vehicles-mc-list">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-mc-list">
                      <div className="facility-1-mc-list">{item.facilityName}</div>
                    </div>
                    <div className="manoj-wrapper-mc-list">
                      <div className="manoj-mc-list">{item.responsibility}</div>
                    </div>
                    <div className="wrapper-mc-list">
                      <div className="div-mc-list ">{item.year}</div>
                    </div>
                    <div className="frame-wrapper3-mc-list">
                      <div className="rectangle-container-mc-list">
                        <div className="frame-child1-mc-list" >

                            <ProgressBarMC progress={item.monthlyStatus}/>
                        </div>
                       
                      </div>
                    </div>
                    {item.button ? (
                     <button className="frame-button-mc-list" onClick={handleMCDataentry}>
                     {item.button.text}
                                                        <div className="frame-child13-mc-list" />
                                                        <div className="add-1-wrapper-mc-list">
                                                            <img className="add-1-icon-mc-list" alt="" src={AddIcon} />
                                                        </div>
                                                        <b className="add-data-mc-list">ADD DATA</b>
                                                    </button>
                                                  ) : (
  <div className="frame-button-mc-list" onClick={handleMCDataentry}><div className="frame-child13-mc-list" />
                                                        <div className="add-1-wrapper-mc-list" >
                                                            <img className="add-1-icon-mc-list" alt="" src={AddIcon} />
                                                        </div>
                                                        <b className="add-data-mc-list">ADD DATA</b></div>
)}
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-mc-list">
                                <div className="scroll-bar-mc-list"></div>
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
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default FinalListMC;
