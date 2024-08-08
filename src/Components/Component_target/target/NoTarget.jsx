import {useCallback ,useState ,useContext} from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { AuthContext } from '../../contextProvider/AuthContext';
import {AddIcon,userIcon,vector1,vector2,vector3,LeftArrow,whiteVariationSvg,DataManagement1,DataManagement2,DataManagement3,DataManagement4,DataManagement5,Group1} from "./../../../assets_target"
import PopUpTarget from "./SubComponent/PopUpTarget"
const NoTarget = ({ className = "" }) => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);

  const navigate = useNavigate();
    const handlepreviousOffset = () => {
    navigate('/dataEntryOffsets');
};
const handleNextTargetlist = () => {
  navigate('/finalListtarget');
}; 


    const [selectedYear, setSelectedYear] = useState(''); 
    const [isPopupOpen, setIsPopupOpen] = useState(false);
   

    const yearRanges = [
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
         '2017-2018',

      ];

      
      const openPopup = () => {
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };
   
      const handleYearChange = (event) => {
        const selected = event.target.value;
        setSelectedYear(selected);
      }
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
    <div className={`targets-page-no-target-targetpage ${className}`}>
      <div className="targets-page-no-target-child-targetpage" />
      <img
        className="white-variation-1-targetpage"
        alt=""
        src={whiteVariationSvg}
      />
      <img className="user-5-1-targetpage" alt="" src={userIcon}/>
      <img
        className="data-management-1-icon-targetpage"
        alt=""
        src={DataManagement1}
        onClick={onDataManagement1IconClick}
      />
      <img
        className="data-management-4-icon-targetpage"
        alt=""
        src={DataManagement4}
        onClick={onDataManagement4IconClick}
      />
      <img
        className="data-management-2-icon-targetpage"
        alt=""
        src={DataManagement2}
        onClick={onDataManagement2IconClick}
      />
      <div className="co2-parent-targetpage">
        {/* <div className="co2">CO2</div> */}
        <img className="co2" alt="" src={Group1}/>
      </div>
      <img
        className="data-management-3-icon-targetpage"
        alt=""
        src={DataManagement3}
        onClick={onDataManagement3IconClick}
      />
      <img
        className="left-arrow-in-circular-button-icon-targetpage"
        onClick={handlepreviousOffset}
        alt=""
        src={LeftArrow}
      />
      <div className="targets-page-no-target-item-targetpage" />
      <b className="targets-targetpage">TARGETS</b>
      <div className="targets-page-no-target-inner-targetpage" onClick={openPopup} />
      <b className="set-target-targetpage">SET TARGET</b>
      <img className="add-4-icon-targetpage" alt="" src={AddIcon}/>
      <div className="user-configuration-1st-time-us-child1-targetpage" onClick={handleNextTargetlist}/>
      
      <b className="next1-targetpage">NEXT</b>
      <div className="rectangle-div-targetpage" />
      <img
        className="data-management-5-icon-targetpage"
        alt=""
        src={DataManagement5}
      />
      <b className="base-year-targetpage">BASE YEAR</b>
      <b className="target-year-targetpage">TARGET YEAR</b>
      <b className="coverage-targetpage">COVERAGE</b>
      <b className="type-of-target-targetpage">TYPE OF TARGET</b>
      <b className="reductions-targetpage">% REDUCTIONS</b>
      <b className="target-emissions-targetpage">TARGET EMISSIONS</b>
      <b className="base-emissions-targetpage">BASE EMISSIONS</b>
      <img className="vector-icon-targetpage" alt="" src={vector1} />
      <img
        className="targets-page-no-target-child1-targetpage"
        alt=""
        src={vector2}
      />
      <img
        className="targets-page-no-target-child2-targetpage"
        alt=""
        src={vector3}
      />
      <div className="ellipse-div-targetpage" />
      <div className="targets-page-no-target-child3-targetpage" />
      <div className="targets-page-no-target-child4-targetpage" />
      <div className="white-variation-2-targetpage" />
      <div className="dropdown-box-targetpage">
        <div className="">
          <div className="menu-label-targetpage">
          <div className="menu-label1-targetpage">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-targetpage header-targetpage"
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
      <div className="reporting-year-targetpage">Reporting Year</div>
      
      <PopUpTarget className={isPopupOpen ? 'open' : 'closed'} onClose={closePopup} />
    </div>
  ) : (
    <div className={`targets-page-no-target-targetpage ${className}`}>
      <div className="targets-page-no-target-child-targetpage" />
      <img
        className="white-variation-1-targetpage"
        alt=""
        src={whiteVariationSvg}
      />
      <img className="user-5-1-targetpage" alt="" src={userIcon}/>
      <img
        className="data-management-1-icon-targetpage"
        alt=""
        src={DataManagement1}
        onClick={onDataManagement1IconClick}
      />
      <img
        className="data-management-4-icon-targetpage"
        alt=""
        src={DataManagement4}
        onClick={onDataManagement4IconClick}
      />
      <img
        className="data-management-2-icon-targetpage"
        alt=""
        src={DataManagement2}
        onClick={onDataManagement2IconClick}
      />
      <div className="co2-parent-targetpage">
        {/* <div className="co2">CO2</div> */}
        <img className="co2" alt="" src={Group1}/>
      </div>
      <img
        className="data-management-3-icon-targetpage"
        alt=""
        src={DataManagement3}
        onClick={onDataManagement3IconClick}
      />
      <img
        className="left-arrow-in-circular-button-icon-targetpage"
        onClick={handlepreviousOffset}
        alt=""
        src={LeftArrow}
      />
      <div className="targets-page-no-target-item-targetpage" />
      <b className="targets-targetpage">TARGETS</b>
      <div className="targets-page-no-target-inner-targetpage" onClick={openPopup} />
      <b className="set-target-targetpage">SET TARGET</b>
      <img className="add-4-icon-targetpage" alt="" src={AddIcon}/>
      <div className="user-configuration-1st-time-us-child1-targetpage" onClick={handleNextTargetlist}/>
      
      <b className="next1-targetpage">NEXT</b>
      <div className="rectangle-div-targetpage" />
      <img
        className="data-management-5-icon-targetpage"
        alt=""
        src={DataManagement5}
      />
      <b className="base-year-targetpage">BASE YEAR</b>
      <b className="target-year-targetpage">TARGET YEAR</b>
      <b className="coverage-targetpage">COVERAGE</b>
      <b className="type-of-target-targetpage">TYPE OF TARGET</b>
      <b className="reductions-targetpage">% REDUCTIONS</b>
      <b className="target-emissions-targetpage">TARGET EMISSIONS</b>
      <b className="base-emissions-targetpage">BASE EMISSIONS</b>
      <img className="vector-icon-targetpage" alt="" src={vector1} />
      <img
        className="targets-page-no-target-child1-targetpage"
        alt=""
        src={vector2}
      />
      <img
        className="targets-page-no-target-child2-targetpage"
        alt=""
        src={vector3}
      />
      <div className="ellipse-div-targetpage" />
      <div className="targets-page-no-target-child3-targetpage" />
      <div className="targets-page-no-target-child4-targetpage" />
      <div className="white-variation-2-targetpage" />
      <div className="dropdown-box-targetpage">
        <div className="">
          <div className="menu-label-targetpage">
          <div className="menu-label1-targetpage">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-targetpage header-targetpage"
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
      <div className="reporting-year-targetpage">Reporting Year</div>
      
      <PopUpTarget className={isPopupOpen ? 'open' : 'closed'} onClose={closePopup} />
    </div>
      )}
    </div>
  );
};

NoTarget.propTypes = {
  className: PropTypes.string,
};

export default NoTarget;
