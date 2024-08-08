import {useState,useContext} from "react";
import FrameComponent1 from "./Subcomponents/FrameComponent1";
import FrameComponent from "./Subcomponents/FrameComponent";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/contextProvider/AuthContext';
import ProgressBar from "./FacilityHome_SubComponent/ProgressBar";
import {cart10,cart11,cart12,cart2,left,user,vector11,vector12,vector13} from "../Assets_facility_homepage"

const FacilityEmissionsHome = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  // eslint-disable-next-line
  const [dataArray, setDataArray] = useState([]);// eslint-disable-next-line
  const [selectedYear, setSelectedYear] = useState('');// eslint-disable-next-line 
  const [filteredData, setFilteredData] = useState([]);// eslint-disable-next-line




  const navigate = useNavigate();
  const handleListdata = () => {
    navigate('/finalList_sc');
};
const handleListdataMC = () => {
  navigate('/finalList_mc');
};
const handleListdataFE = () => {
  navigate('/finalList_fe');
};

const handleListdataPE = () => {
  navigate('/finalList_pe');
};
const handlePrev = () => {
  navigate('/emissionm');
};
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


  return (
    
    <div>
    {auth.isAuthenticated ? (
    <div className="facility-emissions-home">
      <FrameComponent1 />
      <div className="facility-emissions-home-inner">
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="left-arrow-in-circular-button-parent" >
              <img
                className="left-arrow-in-circular-button-icon"
                loading="lazy"
                alt=""
                src={left}
                onClick={handlePrev}
              />
              <div className="welcome-parent">
                <h1 className="welcome">Welcome !</h1>
                <div className="name-of-client-wrapper">
                  <h1 className="name-of-client">Name of Client</h1>
                </div>
              </div>
              <div className="frame-group">
                <div className="frame-container">
                  <div className="frame-div">
                    <div className="source-icons-parent">
                      <div className="source-icons" />
                      <img
                        className="cart-2-icon"
                        loading="lazy"
                        alt=""
                        src={cart2}
                      />
                    </div>
                    <div className="emission-sources-parent">
                      <div className="emission-sources" />
                      <div className="units-wrapper">
                        <div className="units">1423</div>
                      </div>
                      <div className="mtco2">MTCO2</div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="rectangle-parent">
                      <div className="frame-child" />
                      <img
                        className="cart-12-icon"
                        loading="lazy"
                        alt=""
                        src={cart12}
                      />
                    </div>
                    <div className="rectangle-group">
                      <div className="frame-item" />
                      <div className="wrapper">
                        <b className="b">567</b>
                      </div>
                      <div className="mtco21">MTCO2</div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent2">
                  <div className="frame-parent3">
                    <div className="content-parent">
                      <div className="content" onClick={handleListdata}/>
                      <b className="stationary-combustion" >
                        Stationary Combustion
                      </b>
                    </div>
                    <div className="frame-parent4">
                      <div className="frame-parent5">
                        <div className="facility-1-parent">
                          <div className="facility-1">Facility 1</div>
                          <div className="content1" />
                        </div>
                        <div className="content-group">
                        <div className="checkbox-row-00" >
                               <ProgressBar progress={60} />
                        </div>
                        </div>
                      </div>
                      <div className="frame-parent6">
                        <div className="facility-2-parent">
                          <div className="facility-2">Facility 2</div>
                          <div className="frame-wrapper1">
                            <div className="facility-3-parent">
                              <div className="facility-3">Facility 3</div>
                              <div className="content14" />
                            </div>
                          </div>
                        </div>
                        <div className="content-container">
                          <div className="content15" />
                          <div className="content-parent1">
                          <div className="checkbox-row-01" >
                               <ProgressBar progress={60} />
                        </div>
                        <div className="checkbox-row-02" >
                               <ProgressBar progress={20} />
                        </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent7">
                        <div className="facility-4-parent">
                          <div className="facility-4">Facility 4</div>
                          <div className="facility-5">Facility 5</div>
                          <div className="facility-6-wrapper">
                            <div className="facility-6">Facility 6</div>
                          </div>
                          <div className="facility-7">Facility 7</div>
                          <div className="facility-8">Facility 8</div>
                          <div className="facility-9">Facility 9</div>
                          <div className="frame-wrapper2">
                            <div className="facility-10-parent">
                              <div className="facility-10">Facility 10</div>
                              <div className="content40" />
                            </div>
                          </div>
                        </div>
                        <div className="content-parent2">
                          <div className="content41" />
                          <div className="content42" />
                          <div className="content43" />
                          <div className="content44" />
                          <div className="frame-parent8">
                            <div className="content-parent3">
                              <div className="content45" />
                              <div className="content46" />
                              <div className="content-parent4">
                              <div className="checkbox-row-03" >
                               <ProgressBar progress={80} />
                        </div>
                        <div className="checkbox-row-04" >
                               <ProgressBar progress={50} />
                        </div>
                               
                        <div className="checkbox-row-05" >
                               <ProgressBar progress={70} />
                        </div>
                              </div>
                            </div>
                            <div className="content-parent5">
                            <div className="checkbox-row-06" >
                               <ProgressBar progress={60} />
                        </div>
                            </div>
                            <div className="content-parent6">
                            <div className="checkbox-row-07" >
                               <ProgressBar progress={110} />
                        </div>
                            </div>
                            <div className="content-parent7">
                            <div className="checkbox-row-08" >
                               <ProgressBar progress={70} />
                        </div>
                        <div className="checkbox-row-09" >
                               <ProgressBar progress={30} />
                        </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent9">
                    <div className="content-parent8" onClick={handleListdataMC}>
                      <div className="content131"  />
                      <b className="mobile-combustion">Mobile Combustion</b>
                    </div>
                    <div className="frame-parent10">
                      <div className="facility-1-group">
                        <div className="facility-11">Facility 1</div>
                        <div className="facility-21">Facility 2</div>
                        <div className="facility-3-wrapper">
                          <div className="facility-31">Facility 3</div>
                        </div>
                        <div className="facility-41">Facility 4</div>
                        <div className="facility-51">Facility 5</div>
                        <div className="facility-6-container">
                          <div className="facility-61">Facility 6</div>
                        </div>
                        <div className="facility-71">Facility 7</div>
                        <div className="facility-81">Facility 8</div>
                        <div className="facility-91">Facility 9</div>
                        <div className="facility-10-wrapper">
                          <div className="facility-101">Facility 10</div>
                        </div>
                      </div>
                      <div className="frame-parent11">
                        <div className="frame-parent12">
                          <div className="frame-parent13">
                            <div className="content-parent9">
                            <div className="checkbox-row-10" >
                               <ProgressBar progress={0} />
                        </div>
                        <div className="checkbox-row-11" >
                               <ProgressBar progress={10} />
                        </div>
                        <div className="checkbox-row-12" >
                               <ProgressBar progress={20} />
                        </div>
                        <div className="checkbox-row-13" >
                               <ProgressBar progress={30} />
                        </div>
                        <div className="checkbox-row-14" >
                               <ProgressBar progress={40} />
                        </div>
                        <div className="checkbox-row-15" >
                               <ProgressBar progress={50} />
                        </div>
                        <div className="checkbox-row-16" >
                               <ProgressBar progress={60} />
                        </div>
                        <div className="checkbox-row-17" >
                               <ProgressBar progress={70} />
                        </div>
                        <div className="checkbox-row-18" >
                               <ProgressBar progress={80} />
                        </div>
                        <div className="checkbox-row-19" >
                               <ProgressBar progress={90} />
                        </div>
                            </div>
                            <div className="content-parent10">
                              
                            </div>
                            <div className="content-parent11">
                              <div className="content152" />
                              <div className="content153" />
                              <div className="content154" />
                              <div className="content155" />
                              <div className="content156" />
                              <div className="content157" />
                              <div className="content158" />
                              <div className="content159" />
                              <div className="content160" />
                              <div className="frame-parent14">
                               
                               
                                
                                
                               
                              </div>
                            </div>
                          </div>
                          <div className="content261" />
                        </div>
                        <div className="content262" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent15">
            <div className="frame-wrapper3">
              <div className="frame-parent16">
                <div className="frame-wrapper4">
                  <div className="frame-parent17">
                    <div className="reporting-year-wrapper">
                      <div className="reporting-year">Reporting Year</div>
                    </div>
                    <div className="dropdown-box">
                      <div className="">
                        
                        <div className="menu-label-wrapper">
                          <div className="menu-label">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header"
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
                      {/* <div className="items-frame">
                        <ItemsList />
                      </div> */}
                    </div>
                  </div>
                </div>
                <img
                  className="user-5-1"
                  loading="lazy"
                  alt=""
                  src={user}
                />
              </div>
            </div>
            <div className="frame-parent18">
              <div className="frame-wrapper5">
                <div className="content-parent21">
                  <div className="content263" />
                  <div className="content264" />
                  <div className="content265" />
                </div>
              </div>
              <div className="frame-parent19">
                <div className="frame-parent20">
                  <div className="frame-parent21">
                    <div className="frame-parent22">
                      <div className="rectangle-container">
                        <div className="frame-inner" />
                        <img
                          className="cart-10-icon"
                          loading="lazy"
                          alt=""
                          src={cart10}
                        />
                      </div>
                      <div className="rectangle-parent1">
                        <div className="rectangle-div" />
                        <div className="div">45</div>
                        <div className="mtco2-wrapper">
                          <div className="mtco22">MTCO2</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-parent22">
                      <div className="content266" onClick={handleListdataFE} />
                      <b className="fugitive-emissions">Fugitive Emissions</b>
                    </div>
                  </div>
                  <FrameComponent />
                </div>
                <div className="frame-parent23">
                  <div className="frame-parent24">
                    <div className="rectangle-parent2">
                      <div className="frame-child1" />
                      <div className="div1">3654</div>
                      <div className="mtco2-container">
                        <div className="mtco23">MTCO2</div>
                      </div>
                    </div>
                    <div className="rectangle-parent3">
                      <div className="frame-child2" />
                      <img
                        className="cart-11-icon"
                        loading="lazy"
                        alt=""
                        src={cart11}
                      />
                    </div>
                    <img className="vector-icon" alt="" src={vector11} />
                    <img className="frame-child3" alt="" src={vector12} />
                    <img
                      className="frame-child4"
                      loading="lazy"
                      alt=""
                      src={vector13}
                    />
                    <div className="frame-parent25">
                      <div className="parent">
                        <div className="div2">{`5678 `}</div>
                        <div className="content-parent23">
                          <div
                            className="content267"
                            onClick={handleListdataPE}
                          />
                          <b className="process-emissions">Process Emissions</b>
                        </div>
                      </div>
                      <div className="mtco2-frame">
                        <div className="mtco24">MTCO2</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper6">
                    <FrameComponent
                      propGap="48px"
                      propWidth="55px"
                      propWidth1="55px"
                      propWidth2="55px"
                      propWidth3="55px"
                      propRight="-215px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default FacilityEmissionsHome;
