import {useState,useContext} from "react";
import FrameComponent1 from "./Subcomponents/FrameComponent1";
import FrameComponent from "./Subcomponents/FrameComponent";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/contextProvider/AuthContext';
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
                          <div className="content2" />
                          <div className="content3" />
                          <div className="content4" />
                          <div className="content5" />
                          <div className="content6" />
                          <div className="content7" />
                          <div className="content8" />
                          <div className="content9" />
                          <div className="content10" />
                          <div className="content11" />
                          <div className="content12" />
                          <div className="content13" />
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
                            <div className="content16" />
                            <div className="content17" />
                            <div className="content18" />
                            <div className="content19" />
                            <div className="content20" />
                            <div className="content21" />
                            <div className="content22" />
                            <div className="content23" />
                            <div className="content24" />
                            <div className="content25" />
                            <div className="content26" />
                            <div className="content27" />
                            <div className="content28" />
                            <div className="content29" />
                            <div className="content30" />
                            <div className="content31" />
                            <div className="content32" />
                            <div className="content33" />
                            <div className="content34" />
                            <div className="content35" />
                            <div className="content36" />
                            <div className="content37" />
                            <div className="content38" />
                            <div className="content39" />
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
                                <div className="content47" />
                                <div className="content48" />
                                <div className="content49" />
                                <div className="content50" />
                                <div className="content51" />
                                <div className="content52" />
                                <div className="content53" />
                                <div className="content54" />
                                <div className="content55" />
                                <div className="content56" />
                                <div className="content57" />
                                <div className="content58" />
                                <div className="content59" />
                                <div className="content60" />
                                <div className="content61" />
                                <div className="content62" />
                                <div className="content63" />
                                <div className="content64" />
                                <div className="content65" />
                                <div className="content66" />
                                <div className="content67" />
                                <div className="content68" />
                                <div className="content69" />
                                <div className="content70" />
                                <div className="content71" />
                                <div className="content72" />
                                <div className="content73" />
                                <div className="content74" />
                                <div className="content75" />
                                <div className="content76" />
                                <div className="content77" />
                                <div className="content78" />
                                <div className="content79" />
                                <div className="content80" />
                                <div className="content81" />
                                <div className="content82" />
                              </div>
                            </div>
                            <div className="content-parent5">
                              <div className="content83" />
                              <div className="content84" />
                              <div className="content85" />
                              <div className="content86" />
                              <div className="content87" />
                              <div className="content88" />
                              <div className="content89" />
                              <div className="content90" />
                              <div className="content91" />
                              <div className="content92" />
                              <div className="content93" />
                              <div className="content94" />
                            </div>
                            <div className="content-parent6">
                              <div className="content95" />
                              <div className="content96" />
                              <div className="content97" />
                              <div className="content98" />
                              <div className="content99" />
                              <div className="content100" />
                              <div className="content101" />
                              <div className="content102" />
                              <div className="content103" />
                              <div className="content104" />
                              <div className="content105" />
                              <div className="content106" />
                            </div>
                            <div className="content-parent7">
                              <div className="content107" />
                              <div className="content108" />
                              <div className="content109" />
                              <div className="content110" />
                              <div className="content111" />
                              <div className="content112" />
                              <div className="content113" />
                              <div className="content114" />
                              <div className="content115" />
                              <div className="content116" />
                              <div className="content117" />
                              <div className="content118" />
                              <div className="content119" />
                              <div className="content120" />
                              <div className="content121" />
                              <div className="content122" />
                              <div className="content123" />
                              <div className="content124" />
                              <div className="content125" />
                              <div className="content126" />
                              <div className="content127" />
                              <div className="content128" />
                              <div className="content129" />
                              <div className="content130" />
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
                              <div className="content132" />
                              <div className="content133" />
                              <div className="content134" />
                              <div className="content135" />
                              <div className="content136" />
                              <div className="content137" />
                              <div className="content138" />
                              <div className="content139" />
                              <div className="content140" />
                              <div className="content141" />
                            </div>
                            <div className="content-parent10">
                              <div className="content142" />
                              <div className="content143" />
                              <div className="content144" />
                              <div className="content145" />
                              <div className="content146" />
                              <div className="content147" />
                              <div className="content148" />
                              <div className="content149" />
                              <div className="content150" />
                              <div className="content151" />
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
                                <div className="content-parent12">
                                  <div className="content161" />
                                  <div className="content162" />
                                  <div className="content163" />
                                  <div className="content164" />
                                  <div className="content165" />
                                  <div className="content166" />
                                  <div className="content167" />
                                  <div className="content168" />
                                  <div className="content169" />
                                  <div className="content170" />
                                </div>
                                <div className="content-parent13">
                                  <div className="content171" />
                                  <div className="content172" />
                                  <div className="content173" />
                                  <div className="content174" />
                                  <div className="content175" />
                                  <div className="content176" />
                                  <div className="content177" />
                                  <div className="content178" />
                                  <div className="content179" />
                                  <div className="content180" />
                                </div>
                                <div className="content-parent14">
                                  <div className="content181" />
                                  <div className="content182" />
                                  <div className="content183" />
                                  <div className="content184" />
                                  <div className="content185" />
                                  <div className="content186" />
                                  <div className="content187" />
                                  <div className="content188" />
                                  <div className="content189" />
                                  <div className="content190" />
                                </div>
                                <div className="content-parent15">
                                  <div className="content191" />
                                  <div className="content192" />
                                  <div className="content193" />
                                  <div className="content194" />
                                  <div className="content195" />
                                  <div className="content196" />
                                  <div className="content197" />
                                  <div className="content198" />
                                  <div className="content199" />
                                  <div className="content200" />
                                </div>
                                <div className="content-parent16">
                                  <div className="content201" />
                                  <div className="content202" />
                                  <div className="content203" />
                                  <div className="content204" />
                                  <div className="content205" />
                                  <div className="content206" />
                                  <div className="content207" />
                                  <div className="content208" />
                                  <div className="content209" />
                                  <div className="content210" />
                                </div>
                                <div className="content-parent17">
                                  <div className="content211" />
                                  <div className="content212" />
                                  <div className="content213" />
                                  <div className="content214" />
                                  <div className="content215" />
                                  <div className="content216" />
                                  <div className="content217" />
                                  <div className="content218" />
                                  <div className="content219" />
                                  <div className="content220" />
                                </div>
                                <div className="content-parent18">
                                  <div className="content221" />
                                  <div className="content222" />
                                  <div className="content223" />
                                  <div className="content224" />
                                  <div className="content225" />
                                  <div className="content226" />
                                  <div className="content227" />
                                  <div className="content228" />
                                  <div className="content229" />
                                  <div className="content230" />
                                </div>
                                <div className="content-parent19">
                                  <div className="content231" />
                                  <div className="content232" />
                                  <div className="content233" />
                                  <div className="content234" />
                                  <div className="content235" />
                                  <div className="content236" />
                                  <div className="content237" />
                                  <div className="content238" />
                                  <div className="content239" />
                                  <div className="content240" />
                                </div>
                                <div className="content-parent20">
                                  <div className="content241" />
                                  <div className="content242" />
                                  <div className="content243" />
                                  <div className="content244" />
                                  <div className="content245" />
                                  <div className="content246" />
                                  <div className="content247" />
                                  <div className="content248" />
                                  <div className="content249" />
                                  <div className="content250" />
                                  <div className="content251" />
                                  <div className="content252" />
                                  <div className="content253" />
                                  <div className="content254" />
                                  <div className="content255" />
                                  <div className="content256" />
                                  <div className="content257" />
                                  <div className="content258" />
                                  <div className="content259" />
                                  <div className="content260" />
                                </div>
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
