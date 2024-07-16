import { useCallback,useState ,useContext} from "react";
import PropTypes from "prop-types";
import {cart9,datamanagement1,datamanagement2,Group,datamanagement3,datamanagement4,left,next1,next2,user,whiteVariation,vector11,vector13,vectormiddle} from "./../../assets_upstream"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';;

const UpstreamEmissionsHome = ({ className = "" }) => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  // eslint-disable-next-line
  const navigate = useNavigate();
    const handleViewDataElist = () => {
    navigate('/finalList_elist');
};
const handlePrevious = () => {
  navigate('/emission');
};
// eslint-disable-next-line
  const [formData, setFormData] = useState(
);
  const yearRanges = [
    '2022-2023',
    '2021-2022',
    '2020-2021',
    '2019-2020',
    '2018-2019',
    '2017-2018',
];
  const handleYearChange = (event) => {
    const yearValue = event.target.value;
    setFormData(prevData => ({
        ...prevData,
        year: yearValue
    }));
};

  const onDataManagement1IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 17" to the project
  }, []);

  const onDataManagement4IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 21" to the project
  }, []);

  const onDataManagement2IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 20" to the project
  }, []);

  const onDataManagement3IconClick = useCallback(() => {
    // Please sync "Emission Measurement - Home Page" to the project
  }, []);

  

  return (

    <div> 
     {auth.isAuthenticated ? (
    <div className={`upstream-emissions-home-up-hm ${className}`}>
    
      <div className="upstream-emissions-home-child-up-hm" />

      <img
        className="white-variation-1-up-hm"
        alt=""
        src={whiteVariation}
      />
      <img className="user-5-1-up-hm" alt="" src={user} />
      <img
        className="data-management-1-icon-up-hm"
        alt=""
        src={datamanagement1}
        onClick={onDataManagement1IconClick}
      />
      <img
        className="data-management-4-icon-up-hm"
        alt=""
        src={datamanagement4}
        onClick={onDataManagement4IconClick}
      />
      <img
        className="data-management-2-icon-up-hm"
        alt=""
        src={datamanagement2}
        onClick={onDataManagement2IconClick}
      />
      <div className="co2-parent-up-hm">
        
        <img className=" co2" alt="" src={Group} />
      </div>
      <div className="dropdown-box-up-hm">
      <select
                            //  value={formData.selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-up-hm header-up-hm"
                            >
                         <option value="">Reporting Year</option>
                            {yearRanges.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select>

      </div>
      <div className="reporting-year-up-hm">Reporting Year</div>
      <img
        className="data-management-3-icon-up-hm"
        alt=""
        src={datamanagement3}
        onClick={onDataManagement3IconClick}
      />
      <img
        className="left-arrow-in-circular-button-icon-up-hm"
        onClick={handlePrevious}
        alt=""
        src={left}
      />
      <div className="rectangle-parent-up-hm">
        <div className="group-item-up-hm" />
        <div className="div-up-hm">1423</div>
        <div className="mtco2-up-hm">MTCO2</div>
        <div className="group-inner-up-hm" />
      </div>
      <div className="upstream-emissions-home-item-up-hm" />
      <div className="upstream-emissions-home-inner-up-hm" />
      <div className="rectangle-div-up-hm" />
      <div className="upstream-emissions-home-child1-up-hm" />
      <div className="upstream-emissions-home-child2-up-hm" />
      <div className="upstream-emissions-home-child3-up-hm" />
      <div className="upstream-emissions-home-child4-up-hm" />
      <div className="upstream-emissions-home-child5-up-hm" />
      <div className="upstream-emissions-home-child6-up-hm" />
      <div className="upstream-emissions-home-child7-up-hm" />
      <div className="upstream-emissions-home-child8-up-hm" />
      <div className="upstream-emissions-home-child9-up-hm" />
      <div className="container-up-hm">
      <div className="facility-1-up-hm">Facility 1</div>
      <div className="line-div-up-hm" />
      <div className="upstream-emissions-home-child10-up-hm" />
      <div className="upstream-emissions-home-child11-up-hm" />
      <div className="upstream-emissions-home-child12-up-hm" />
      <div className="upstream-emissions-home-child13-up-hm" />
      <div className="upstream-emissions-home-child14-up-hm" />
      <div className="upstream-emissions-home-child15-up-hm" />
      <div className="upstream-emissions-home-child16-up-hm" />
      <div className="upstream-emissions-home-child17-up-hm" />
      <div className="upstream-emissions-home-child18-up-hm" />
      <div className="upstream-emissions-home-child19-up-hm" />
      <div className="upstream-emissions-home-child20-up-hm" />
      <div className="upstream-emissions-home-child21-up-hm" />
      <div className="facility-2-up-hm">Facility 2</div>
      <div className="facility1-div-up-hm">
      <div className="upstream-emissions-home-child22-up-hm" />
      <div className="upstream-emissions-home-child23-up-hm" />
      <div className="upstream-emissions-home-child24-up-hm" />
      <div className="upstream-emissions-home-child25-up-hm" />
      <div className="upstream-emissions-home-child26-up-hm" />
      <div className="upstream-emissions-home-child27-up-hm" />
      <div className="upstream-emissions-home-child28-up-hm" />
      <div className="upstream-emissions-home-child29-up-hm" />
      <div className="upstream-emissions-home-child30-up-hm" />
      <div className="upstream-emissions-home-child31-up-hm" />
      <div className="upstream-emissions-home-child32-up-hm" />
      <div className="upstream-emissions-home-child33-up-hm" />
      <div className="upstream-emissions-home-child34-up-hm" />
      </div>
      <div className="facility-3-up-hm">Facility 3</div>
      <div className="upstream-emissions-home-child35-up-hm" />
      <div className="upstream-emissions-home-child36-up-hm" />
      <div className="upstream-emissions-home-child37-up-hm" />
      <div className="upstream-emissions-home-child38-up-hm" />
      <div className="upstream-emissions-home-child39-up-hm" />
      <div className="upstream-emissions-home-child40-up-hm" />
      <div className="upstream-emissions-home-child41-up-hm" />
      <div className="upstream-emissions-home-child42-up-hm" />
      <div className="upstream-emissions-home-child43-up-hm" />
      <div className="upstream-emissions-home-child44-up-hm" />
      <div className="upstream-emissions-home-child45-up-hm" />
      <div className="upstream-emissions-home-child46-up-hm" />
      <div className="upstream-emissions-home-child47-up-hm" />
      <div className="facility-4-up-hm">Facility 4</div>
      <div className="upstream-emissions-home-child48-up-hm" />
      <div className="upstream-emissions-home-child49-up-hm" />
      <div className="upstream-emissions-home-child50-up-hm" />
      <div className="upstream-emissions-home-child51-up-hm" />
      <div className="upstream-emissions-home-child52-up-hm" />
      <div className="upstream-emissions-home-child53-up-hm" />
      <div className="upstream-emissions-home-child54-up-hm" />
      <div className="upstream-emissions-home-child55-up-hm" />
      <div className="upstream-emissions-home-child56-up-hm" />
      <div className="upstream-emissions-home-child57-up-hm" />
      <div className="upstream-emissions-home-child58-up-hm" />
      <div className="upstream-emissions-home-child59-up-hm" />
      <div className="upstream-emissions-home-child60-up-hm" />
      <div className="facility-5-up-hm">Facility 5</div>
      <div className="upstream-emissions-home-child61-up-hm" />
      <div className="upstream-emissions-home-child62-up-hm" />
      <div className="upstream-emissions-home-child63-up-hm" />
      <div className="upstream-emissions-home-child64-up-hm" />
      <div className="upstream-emissions-home-child65-up-hm" />
      <div className="upstream-emissions-home-child66-up-hm" />
      <div className="upstream-emissions-home-child67-up-hm" />
      <div className="upstream-emissions-home-child68-up-hm" />
      <div className="upstream-emissions-home-child69-up-hm" />
      <div className="upstream-emissions-home-child70-up-hm" />
      <div className="upstream-emissions-home-child71-up-hm" />
      <div className="upstream-emissions-home-child72-up-hm" />
      <div className="upstream-emissions-home-child73-up-hm" />
      <div className="facility-6-up-hm">Facility 6</div>
      <div className="upstream-emissions-home-child74-up-hm" />
      <div className="upstream-emissions-home-child75-up-hm" />
      <div className="upstream-emissions-home-child76-up-hm" />
      <div className="upstream-emissions-home-child77-up-hm" />
      <div className="upstream-emissions-home-child78-up-hm" />
      <div className="upstream-emissions-home-child79-up-hm" />
      <div className="upstream-emissions-home-child80-up-hm" />
      <div className="upstream-emissions-home-child81-up-hm" />
      <div className="upstream-emissions-home-child82-up-hm" />
      <div className="upstream-emissions-home-child83-up-hm" />
      <div className="upstream-emissions-home-child84-up-hm" />
      <div className="upstream-emissions-home-child85-up-hm" />
      <div className="upstream-emissions-home-child86-up-hm" />
      <div className="facility-7-up-hm">Facility 7</div>
      <div className="upstream-emissions-home-child87-up-hm" />
      <div className="upstream-emissions-home-child88-up-hm" />
      <div className="upstream-emissions-home-child89-up-hm" />
      <div className="upstream-emissions-home-child90-up-hm" />
      <div className="upstream-emissions-home-child91-up-hm" />
      <div className="upstream-emissions-home-child92-up-hm" />
      <div className="upstream-emissions-home-child93-up-hm" />
      <div className="upstream-emissions-home-child94-up-hm" />
      <div className="upstream-emissions-home-child95-up-hm" />
      <div className="upstream-emissions-home-child96-up-hm" />
      <div className="upstream-emissions-home-child97-up-hm" />
      <div className="upstream-emissions-home-child98-up-hm" />
      <div className="upstream-emissions-home-child99-up-hm" />
      <div className="facility-8-up-hm">Facility 8</div>
      <div className="upstream-emissions-home-child100-up-hm" />
      <div className="upstream-emissions-home-child101-up-hm" />
      <div className="upstream-emissions-home-child102-up-hm" />
      <div className="upstream-emissions-home-child103-up-hm" />
      <div className="upstream-emissions-home-child104-up-hm" />
      <div className="upstream-emissions-home-child105-up-hm" />
      <div className="upstream-emissions-home-child106-up-hm" />
      <div className="upstream-emissions-home-child107-up-hm" />
      <div className="upstream-emissions-home-child108-up-hm" />
      <div className="upstream-emissions-home-child109-up-hm" />
      <div className="upstream-emissions-home-child110-up-hm" />
      <div className="upstream-emissions-home-child111-up-hm" />
      <div className="upstream-emissions-home-child112-up-hm" />
      <div className="facility-9-up-hm">Facility 9</div>
      <div className="upstream-emissions-home-child113-up-hm" />
      <div className="upstream-emissions-home-child114-up-hm" />
      <div className="upstream-emissions-home-child115-up-hm" />
      <div className="upstream-emissions-home-child116-up-hm" />
      <div className="upstream-emissions-home-child117-up-hm" />
      <div className="upstream-emissions-home-child118-up-hm" />
      <div className="upstream-emissions-home-child119-up-hm" />
      <div className="upstream-emissions-home-child120-up-hm" />
      <div className="upstream-emissions-home-child121-up-hm" />
      <div className="upstream-emissions-home-child122-up-hm" />
      <div className="upstream-emissions-home-child123-up-hm" />
      <div className="upstream-emissions-home-child124-up-hm" />
      <div className="upstream-emissions-home-child125-up-hm" />
      <div className="facility-10-up-hm">Facility 10</div>
      </div>
      <div className="upstream-emissions-home-child126-up-hm" />
      <img className="vector-icon-up-hm" alt="" src={vector11} />
      <img
        className="upstream-emissions-home-child127-up-hm"
        alt=""
        src={vectormiddle}
      />
      <img
        className="upstream-emissions-home-child128-up-hm"
        alt=""
        src={vector13}
      />
      <div className="ellipse-div-up-hm" />
      <div className="upstream-emissions-home-child1323-up-hm" />
      <div className="upstream-emissions-home-child2313-up-hm" />
      <div className="upstream-emissions-home-child129-up-hm" />
      
      <div className="div1-up-hm">4352</div>
      <div className="mtco21-up-hm">MTCO2</div>
      <div className="welcome-up-hm">Welcome !</div>
      <div className="name-of-client-up-hm">Name of Client</div>
      <div className="upstream-emissions-home-child131-up-hm" />
      <div className="upstream-emissions-home-child132-up-hm" />
      <div className="upstream-emissions-home-child133-up-hm" />
      <div
        className="upstream-emissions-home-child134-up-hm"
        onClick={handleViewDataElist}
      />
      <b className="purchased-electricity-up-hm" onClick={handleViewDataElist}>Purchased Electricity</b>
      <img className="cart-9-icon-up-hm" alt="" src={cart9} />
      <img className="next-3-1-up-hm" alt="" src={next1} />
      <img className="next-3-2-up-hm" alt="" src={next2} />
      
    </div>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

UpstreamEmissionsHome.propTypes = {
  className: PropTypes.string,
};

export default UpstreamEmissionsHome;
