import React, { useState, useEffect,useContext } from 'react';
import ProgressBar from './Sub_Component_elist/ProgressBar_elist';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contextProvider/AuthContext';
import { AddIcon,CartSvg,CircleSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "./../../../assets_elist/index";
const FinalListelist= () => {
    
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleDataEntry = () => {
  navigate('/dataEntry_elect');
};
const handlePreviousOfList = () => {
  navigate('/upstream-emission-homepage');
};
    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://127.0.0.1:8080/purchasedelectricityDataentry');
              const jsonData = await response.json();
              setDataArray(jsonData);
              setFilteredData(jsonData); // Initially set filtered data to all data
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
            setFilteredData(dataArray);
        }
    };

  return (
    <div>
    {auth.isAuthenticated ? (
    <div className="mobile-combustion-list-elist">
      <div className="rectangle-parent-elist">
        <div className="frame-child-elist" />
        <div className="white-variation-1-wrapper-elist">
          <img
            className="white-variation-1-elist"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-elist">
          <div className="frame-parent-elist">
            <div className="data-management-3-wrapper-elist">
              <img
                className="data-management-3-icon-elist"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-elist">
              <div className="data-management-2-wrapper-elist">
                <img
                  className="data-management-2-icon-elist"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-elist"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input co2-elist"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-elist" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-elist">
          <img
            className="data-management-4-icon-elist"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-elist">
        <section className="frame-container-elist">
          <div className="frame-div-elist">
            <div className="left-arrow-in-circular-button-parent-elist">
              <img
                className="left-arrow-in-circular-button-icon-elist"
                loading="lazy"
                alt=""
                src={LeftArrow}
                onClick={handlePreviousOfList}
              />
              <div className="frame-parent1-elist">
                <div className="frame-wrapper1-elist">
                  <div className="frame-parent2-elist">
                    <div className="reporting-year-wrapper-elist">
                      <div className="reporting-year-elist">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-elist">
                      <div className="">
                      
                        <div className="menu-label-wrapper-elist">
                        
                          <div className="menu-label-elist">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header-elist"
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
                <div className="ellipse-parent-elist">
                  <div className="frame-inner-elist" />
                  <img
                    className="user-5-1-elist"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-elist">
            <div className="mobile-combustion-wrapper-elist">
              <h1 className="mobile-combustion-elist">PURCHASED ELECTRICITY</h1>
            </div>
            <img
              className="filter-1-icon-elist"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-elist">
              <div className="frame-parent4-elist">
                <div className="status-parent-elist">
                  <b className="status-elist">STATUS</b>
                  <b className="reporting-year1-elist">REPORTING YEAR</b>
                  <b className="responsibility-elist">RESPONSIBILITY</b>
                  <b className="facility-elist">FACILITY</b>
                  <b className="emission-type-elist">EMISSION TYPE</b>
                  <div className={`rectangle-group-container-elist ${hasMoreUsers ? 'scrollable-elist' : ''}`}>
                  <div>
                   {filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group-elist">
                    <div className="rectangle-div-elist" />
                    <div className="frame-wrapper2-elist">
                      <div className="frame-parent5-elist">
                        <div className="cart-2-parent-elist">
                          <div className="cart-2-elist" />
                          <img
                            className="cart-10-icon-elist"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-elist">
                          <div className="company-owned-vehicles-elist">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-elist">
                      <div className="facility-1-elist">{item.facilityName}</div>
                    </div>
                    <div className="manoj-wrapper-elist">
                      <div className="manoj-elist">{item.responsibility}</div>
                    </div>
                    <div className="wrapper-elist">
                      <div className="div-elist ">{item.reportingYear}</div>
                    </div>
                    <div className="frame-wrapper3-elist">
                      <div className="rectangle-container-elist">
                        <div className="frame-child1-elist" >

                            <ProgressBar progress={item.status} />
                        </div>
                       
                      </div>
                    </div>
                     <button className="frame-button-elist" onClick={handleDataEntry}>
                     {item.button?.text || ''}
                                                        <div className="frame-child13-elist" />
                                                        <div className="add-1-wrapper-elist">
                                                            <img className="add-1-icon-elist" alt="" src={AddIcon} />
                                                        </div>
                                                        <b className="add-data-elist">ADD DATA</b>
                                                    </button>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-elist">
                                <div className="scroll-bar-elist"></div>
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

export default FinalListelist;
