import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Sub_Component/ProgressBar';
import axios from "axios";
import { AuthContext } from '../../contextProvider/AuthContext';
import { AddIcon,CartSvg,CircleSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "../../../assets_list_sc";
const FinalListSC= () => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleDataEntrydata = () => {
    navigate('/data-entry_sc');
};

const handlePrevScList = () => {
  navigate('/facility-emission-homepage');
};
    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);
     useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.post('https://backend-new-419p.onrender.com/getstationarycombustion',{email:"suman@gmail.com"});
              const jsonData = response.data;
              console.log(jsonData,"jsonnnnnnnnnnnnnmn")
              setDataArray(response.data);
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
    
    <div className="mobile-combustion-list-sc">
      <div className="rectangle-parent-sc">
        <div className="frame-child-sc" />
        <div className="white-variation-1-wrapper-sc">
          <img
            className="white-variation-1-sc"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper-sc">
          <div className="frame-parent-sc">
            <div className="data-management-3-wrapper-sc">
              <img
                className="data-management-3-icon-sc"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group-sc">
              <div className="data-management-2-wrapper-sc">
                <img
                  className="data-management-2-icon-sc"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input-sc co2-sc"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item-sc" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper-sc">
          <img
            className="data-management-4-icon-sc"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner-sc">
        <section className="frame-container-sc">
          <div className="frame-div-sc">
            <div className="left-arrow-in-circular-button-parent-sc">
              <img
                className="left-arrow-in-circular-button-icon-sc" 
                onClick={handlePrevScList}
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1-sc">
                <div className="frame-wrapper1-sc">
                  <div className="frame-parent2-sc">
                    <div className="reporting-year-wrapper-sc">
                      <div className="reporting-year-sc">Reporting Year</div>
                    </div>
                    <div className="dropdown-box-sc">
                      <div className="">
                      
                        <div className="menu-label-wrapper-sc">
                        
                          <div className="menu-label-sc">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-sc header-sc"
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
                <div className="ellipse-parent-sc">
                  <div className="frame-inner-sc" />
                  <img
                    className="user-5-1-sc"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3-sc">
            <div className="mobile-combustion-wrapper-sc">
              <h1 className="mobile-combustion-sc">STATIONARY COMBUSTION</h1>
            </div>
            <img
              className="filter-1-icon-sc"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer-sc">
              <div className="frame-parent4-sc">
                <div className="status-parent-sc">
                  <b className="status-sc">STATUS</b>
                  <b className="reporting-year1-sc">REPORTING YEAR</b>
                  <b className="responsibility-sc">RESPONSIBILITY</b>
                  <b className="facility-sc">FACILITY</b>
                  <b className="emission-type-sc">EMISSION TYPE</b>
                  <div className={`rectangle-group-container-sc ${hasMoreUsers ? 'scrollable-sc' : ''}`}>
                  <div>
                   {dataArray.map((item) => ( 
                    
                    
                  <div key={item.id} className="rectangle-group-sc">
                   
                    <div className="rectangle-div-sc" />
                    <div className="frame-wrapper2-sc">
                      <div className="frame-parent5-sc">
                        <div className="cart-2-parent-sc">
                          <div className="cart-2-sc" />
                          <img
                            className="cart-10-icon-sc"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper-sc">
                          <div className="company-owned-vehicles-sc">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper-sc">
                      <div className="facility-1-sc">{item.facilityName}</div>
                    </div>
                    <div className="manoj-wrapper-sc">
                      <div className="manoj-sc">{item.responsibility}</div>
                    </div>
                    <div className="wrapper-sc">
                      <div className="div-sc ">{item.year}</div>
                    </div>
                    <div className="frame-wrapper3-sc">
                      <div className="rectangle-container-sc">
                        <div className="frame-child1-sc" >

                            <ProgressBar progress={item.status} />
                        </div>
                       
                      </div>

                    </div>
                     <button className="frame-button-sc" onClick={handleDataEntrydata}>
                     {item.button?.text || ''}
                                                        <div className="frame-child13-sc" />
                                                        <div className="add-1-wrapper-sc">
                                                            <img className="add-1-icon-sc" alt="" src={AddIcon} />
                                                        </div>
                                                        <b className="add-data-sc">ADD DATA</b>
                                                    </button>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper-sc">
                                <div className="scroll-bar-sc"></div>
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

export default FinalListSC;
