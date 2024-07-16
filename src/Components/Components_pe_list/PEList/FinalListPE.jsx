import React, { useState, useEffect ,useContext} from 'react';
import { AuthContext } from '../../contextProvider/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import ProgressBarPEList from "./Sub_Component_PE_list/ProgressBarPEList"
import { AddIcon,CartSvg,CircleSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "../../../assets_pe_list";
const FinalListPE= () => {

  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
    const handlePrevOfPEList = () => {
    navigate('/facility-emission-homepage');
};
const handleMCDataentry = () => {
  navigate('/data-entry_pe');
};
    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://127.0.0.1:8080/processemission/dataentry');
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
    <div className="mobile-combustion-list-pe-list">
      <div className="rectangle-parent-pe-list">
        <div className="frame-child-pe-list" />
        <div className="white-variation-1-wrapper-pe-list">
          <img
            className="white-variation-1-pe-list"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-pe-list">
          <div className="frame-parent-pe-list">
            <div className="data-management-3-wrapper-pe-list">
              <img
                className="data-management-3-icon-pe-list"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-pe-list">
              <div className="data-management-2-wrapper-pe-list">
                <img
                  className="data-management-2-icon-pe-list"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input-pe-list"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input-pe-list co2-pe-list"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-pe-list" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-pe-list">
          <img
            className="data-management-4-icon-pe-list"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-pe-list">
        <section className="frame-container-pe-list">
          <div className="frame-div-pe-list">
            <div className="left-arrow-in-circular-button-parent-pe-list" onClick={handlePrevOfPEList}>
              <img
                className="left-arrow-in-circular-button-icon-pe-list"
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1-pe-list">
                <div className="frame-wrapper1-pe-list">
                  <div className="frame-parent2-pe-list">
                    <div className="reporting-year-wrapper-pe-list">
                      <div className="reporting-year-pe-list">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-pe-list-pe-list">
                      <div className="">
                      
                        <div className="menu-label-wrapper-pe-list">
                        
                          <div className="menu-label-pe-list">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-pe-list header-pe-list"
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
                <div className="ellipse-parent-pe-list">
                  <div className="frame-inner-pe-list" />
                  <img
                    className="user-5-1-pe-list"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-pe-list">
            <div className="mobile-combustion-wrapper-pe-list">
              <h1 className="mobile-combustion-pe-list">PROCESS EMISSIONS</h1>
            </div>
            <img
              className="filter-1-icon-pe-list"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-pe-list">
              <div className="frame-parent4-pe-list">
                <div className="status-parent-pe-list">
                  <b className="status-pe-list">STATUS</b>
                  <b className="reporting-year1-pe-list">REPORTING YEAR</b>
                  <b className="responsibility-pe-list">RESPONSIBILITY</b>
                  <b className="facility-pe-list">FACILITY</b>
                  <b className="emission-type-pe-list">EMISSION TYPE</b>
                  <div className={`rectangle-group-container-pe-list ${hasMoreUsers ? 'scrollable-pe-list' : ''}`}>
                  <div>
                   {filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group-pe-list">
                    <div className="rectangle-div-pe-list" />
                    <div className="frame-wrapper2-pe-list">
                      <div className="frame-parent5-pe-list">
                        <div className="cart-2-parent-pe-list">
                          <div className="cart-2-pe-list" />
                          <img
                            className="cart-10-icon-pe-list"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-pe-list">
                          <div className="company-owned-vehicles-pe-list">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-pe-list">
                      <div className="facility-1-pe-list">{item.facilityName}</div>
                    </div>
                    <div className="manoj-wrapper-pe-list">
                      <div className="manoj-pe-list">{item.responsibility}</div>
                    </div>
                    <div className="wrapper-pe-list">
                      <div className="div-pe-list ">{item.year}</div>
                    </div>
                    <div className="frame-wrapper3-pe-list">
                      <div className="rectangle-container-pe-list">
                        <div className="frame-child1-pe-list" >

                            <ProgressBarPEList progress={item.status} />
                        </div>
                       
                      </div>
                    </div>
                     <button className="frame-button-pe-list" onClick={handleMCDataentry}>
                                                        {item.button.text}
                                                        <div className="frame-child13-pe-list" />
                                                        <div className="add-1-wrapper-pe-list">
                                                            <img className="add-1-icon-pe-list" alt="" src={AddIcon} />
                                                        </div>
                                                        <b className="add-data-pe-list">ADD DATA</b>
                                                    </button>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-pe-list">
                                <div className="scroll-bar-pe-list"></div>
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

export default FinalListPE;
