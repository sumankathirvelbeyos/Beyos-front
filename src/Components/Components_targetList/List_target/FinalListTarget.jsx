import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contextProvider/AuthContext';

import {CircleSvg,UpstreamEmission,Vector1,Vector2,Vector3,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg, AddIcon } from "../../../assetsTargetList";
const FinalListTarget= () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlepreviousTargetPage = () => {
  navigate('/notarget');
};
const handleNextFacilityHome = () => {
navigate('/facility-emission-homepage');
}; 
  

    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     const [hasMoreUsers, setHasMoreUsers] = useState(false);

     


     useEffect(() => {
      // Fetch data from the backend API
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8080/target');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // eslint-disable-next-line
          const { dropdownData, targetData } = await response.json();
          setDataArray(targetData);
          setFilteredData(targetData); // Initially, display all data
  
          // Enable scrollbar if more than 3 items
          setHasMoreUsers(targetData.length > 3); // Update hasMoreUsers based on data length
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


    const yearRanges = [
        '2024-2023',
        '2023-2022',
        '2022-2021',
        '2021-2020',
        '2020-2019'
        

      ];
      const handleYearChange = (event) => {
        const selected = event.target.value;
        setSelectedYear(selected);
        if (selected) {
          const filtered = dataArray.filter(item => item.targetYear === selected);
          setFilteredData(filtered);
          setHasMoreUsers(filtered.length > 3);
        } else {
          setFilteredData(dataArray);
          setHasMoreUsers(dataArray.length > 3);
        }
      };
    
    
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className="mobile-combustion-list-targetlist">
      <div className="rectangle-parent-targetlist">
        <div className="frame-child-targetlist" />
        <div className="white-variation-1-wrapper-targetlist">
          <img
            className="white-variation-1-targetlist"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-targetlist">
          <div className="frame-parent-targetlist">
            <div className="data-management-3-wrapper-targetlist">
              <img
                className="data-management-3-icon-targetlist"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-targetlist">
              <div className="data-management-2-wrapper-targetlist">
                <img
                  className="data-management-2-icon-targetlist"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-targetlist"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input-targetlist co2-targetlist"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-targetlist" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-targetlist">
          <img
            className="data-management-4-icon-targetlist"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-targetlist">
        <section className="frame-container-targetlist">
          <div className="frame-div-targetlist">
          <div className="target-page-list-inner-targetlist" />
          <b className="set-target1-targetlist">SET TARGET</b>
          <img className="add-4-icon2-targetlist" alt="" src={AddIcon}/>
          <div className="user-configuration-1st-time-us-child1-targetlist" onClick={handleNextFacilityHome}/>
      
      <b className="next1-targetlist">NEXT</b>
          <div className="target-page-list-child5-targetlist" />
            <div className="target-page-list-child6-targetlist" />
          <div className="target-page-list-child7-targetlist" />
          <img className="target-page-list-child2-targetlist" alt="" src={Vector1} />
          <img className="target-page-list-child3-targetlist" alt="" src={Vector2} />
          <img className="target-page-list-child4-targetlist" alt="" src={Vector3}/>
            <div className="left-arrow-in-circular-button-parent-targetlist" onClick={handlepreviousTargetPage}>
              <img
                className="left-arrow-in-circular-button-icon-targetlist"
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1-targetlist">
                <div className="frame-wrapper1-targetlist">
                  <div className="frame-parent2-targetlist">
                    <div className="reporting-year-wrapper-targetlist">
                      <div className="reporting-year-targetlist">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-targetlist">
                      <div className="">
                      
                        <div className="menu-label-wrapper-targetlist">
                        
                          <div className="menu-label-targetlist">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-targetlist header-targetlist"
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
                <div className="ellipse-parent-targetlist">
                  <div className="frame-inner-targetlist" />
                  <img
                    className="user-5-1-targetlist"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-targetlist">
            <div className="mobile-combustion-wrapper-targetlist">
              <h1 className="mobile-combustion-targetlist">TARGETS</h1>
            </div>
            <div className="mobile-combustion-view-data-child6-targetlist" />
            <img className="cart-12-icon-targetlist" alt="" src={UpstreamEmission}/>
           
            
            <footer className="frame-footer-targetlist">
              <div className="frame-parent4-targetlist">
                <div className="status-parent-targetlist">
                
                  <b className="reporting-year1-targetlist">BASE YEAR</b>
                  <b className="responsibility-targetlist">TARGET YEAR</b>
                  <b className="facility-targetlist">COVERAGE</b>
                  <b className="emission-type-targetlist">TYPE OF TARGET</b>
                  <b className="fuel-targetlist">% REDUCTION</b>
                  <b className="quantity-targetlist">BASE EMISSION</b>
                 <b className="units-targetlist">TARGET EMISSION</b>
                 
                  <div className={`rectangle-group-container-targetlist ${hasMoreUsers ? 'scrollable-targetlist' : ''} }`}>
                  <div>
                  {Array.isArray(filteredData) && filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group-targetlist">
                    <div className="rectangle-div-targetlist" />
                    <div className="frame-wrapper2-targetlist">
                      <div className="frame-parent5-targetlist">
                                            
                        <div className="company-owned-vehicles-usage-wrapper-targetlist">
                          <div className="company-owned-vehicles-targetlist">
                          {item.TypeOfTarget}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-targetlist">
                      <div className="facility-1-targetlist">{item.Coverage}</div>
                    </div>
                    <div className="manoj-wrapper-targetlist">
                      <div className="manoj-targetlist">{item.TargetYear}</div>
                    </div>
                    <div className="wrapper-targetlist">
                      <div className="div-targetlist">{item.baseYear}</div>
                    </div>

                    <div className="frame-wrapper3-targetlist">
                      <div className="rectangle-container-targetlist">
                        <div className="frame-child1-targetlist" >

                            {item.reductionpercentage}
                            
                        </div>
                       <div className="frame-child2-targetlist" > {item.baseEmission}
                            </div>
                        <div className="frame-child3-targetlist" >{item.TargetEmission}</div>
                      </div>
                    </div>
                    <div className='emission-container-targetlist'>
                       <div className='emission-quantity-targetlist'>{item.emission}</div>
                       <div className="vehicle-targetlist">{item.typeofvehicle}</div>
                       
                   
                     
                    </div>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-targetlist">
                                <div className="scroll-bar-targetlist"></div>
                            </div>
                        )}
                  </div>
                </div>
                
              </div>

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

export default FinalListTarget;
