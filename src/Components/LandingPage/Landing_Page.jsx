import {useContext } from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';
import {Rectangle1,Rectangle2,WhiteVariation,Previous,Next,Lock1,Lock2,Settings,User} from "../../assets_lp";
// eslint-disable-next-line
const LandingPage = ({ className = "" }) => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/get_company_details');
};

 
  
// eslint-disable-next-line
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className={`landing-page-with-all-modules ${className}`}>
      <div className="landing-page-with-all-modules-child" />
      <img
        className="white-variation-1"
        alt=""
        src={WhiteVariation}
      />
      <img className="user-5-1" alt="" src={User} />
    <div className="landing-page-with-all-modules-item-wrapper">
    <img
        className="landing-page-with-all-modules-item"
        alt=""
        src={Rectangle1} 
      />
    </div>

      
      <div className="landing-page-with-all-modules-inner" />
      <div className="emission-management">EMISSION MANAGEMENT</div>
      <div className="measure-and-track">
        Measure and Track your emissions effortlessly across facilities. Account
        offsets and reductions with ease.
      </div>
      
      
      
      <img className="rectangle-icon" alt="" src={Rectangle2} />
      <div className="landing-page-with-all-modules-child3" />
      <div
        className="landing-page-with-all-modules-child4"
        onClick={handleNextPage}
      />
      <div className="landing-page-with-all-modules-child1" />
      <div className="esg-management">{`ESG MANAGEMENT & REPORTING`}</div>
      <div className="right-from-understanding">{`Right from understanding your material topics to reporting frameworks, your one solution for ESG management `}</div>
      <div className="landing-page-with-all-modules-child2" />
      <b className="enter-module" onClick={handleNextPage}>Enter Module</b>
      <b className="locked">Locked</b>
      <div className="ellipse-div" />
      <div className="landing-page-with-all-modules-child5" />
      <div className="landing-page-with-all-modules-child6" />
      <b className="beyos-up">BeyOS</b>
      <img className="settings-1-icon" alt="" src={Settings} />
      <img className="lock-1-icon" alt="" src={Lock1} />
      <img className="lock-2-icon" alt="" src={Lock2} />
      <img className="next-3-1" alt="" src={Next} />
      <img className="next-3-2" alt="" src={Previous} />
    </div>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;
