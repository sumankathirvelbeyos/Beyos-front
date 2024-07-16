import PropTypes from "prop-types";
import styles from "./EmissionsVisualization.module.css";
import upstream from "./upstream.png";
import facilityp from "./facility.png";
import downstreamp from "./downstream.png";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/contextProvider/AuthContext';
const EmissionsVisualization = ({ className = "" }) => {
     // eslint-disable-next-line
     const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleUpstream = () => {
    navigate('/upstream-emission-homepage');
};
const handleFacilityStream = () => {
  navigate('/emissionm');
};
  const handleClick = () =>{
    console.log("clicked");
  }
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className={[styles.emissionsVisualization, className].join(" ")}>
      {/* <div className={styles.diagramStructure}>
        <div className={styles.vectorParent}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-13.svg"
          />
          <div className={styles.upstreamCircleParent}>
            <div className={styles.upstreamCircle}>
              <div className={styles.upstreamIcons}>
                <div className={styles.upstreamEmissions} />
                <div className={styles.downstreamIcons} />
                <div className={styles.downstreamEmissions} />
              </div>
              <div className={styles.facilityIcons}>
                <img
                  className={styles.facilityEmissionOne}
                  alt=""
                  src="/facility-emission-one.svg"
                />
                <img
                  className={styles.facilityEmissionTwo}
                  alt=""
                  src="/facility-emission-two.svg"
                />
                <img
                  className={styles.facilityEmissionThree}
                  loading="lazy"
                  alt=""
                  src="/vector-16.svg"
                />
              </div>
            </div>
            <div className={styles.emissionCategories}>
              <h1 className={styles.upstream}>UPSTREAM</h1>
              <div className={styles.totalEmissions}>
                <div className={styles.emissions}>EMISSIONS</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vectorGroup}>
          <img className={styles.instanceItem} alt="" src="/rectangle-13.svg" />
          <div className={styles.vectorContainer}>
            <img className={styles.frameChild} loading="lazy" alt="" />
            <div className={styles.frameWrapper}>
              <div className={styles.facilityParent}>
                <h1 className={styles.facility}>FACILITY</h1>
                <div className={styles.emissionCount}>
                  <div className={styles.emissions1}>EMISSIONS</div>
                </div>
              </div>
            </div>
            <img
              className={styles.connectorOneIcon}
              alt=""
              src="/connector-one.svg"
            />
            <img
              className={styles.connectorTwoIcon}
              alt=""
              src="/connector-two.svg"
            />
            <img
              className={styles.connectorThreeIcon}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
            <div className={styles.circleOne} />
            <div className={styles.circleTwo} />
            <div className={styles.circleThree} />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.instanceInner}
            alt=""
            src="/rectangle-13.svg"
          />
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.upstreamEmissionOneParent}>
                  <div className={styles.upstreamEmissionOne} />
                  <div className={styles.upstreamEmissionTwo} />
                  <div className={styles.upstreamEmissionThree} />
                </div>
                <div className={styles.downstreamEmissionOneParent}>
                  <img
                    className={styles.downstreamEmissionOne}
                    alt=""
                    src="/vector-16-1.svg"
                  />
                  <img
                    className={styles.downstreamEmissionTwo}
                    alt=""
                    src="/vector-15-1.svg"
                  />
                  <img
                    className={styles.downstreamEmissionThree}
                    loading="lazy"
                    alt=""
                    src="/vector-14-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.downstreamParent}>
              <h1 className={styles.downstream}>DOWNSTREAM</h1>
              <div className={styles.emissionsWrapper}>
                <div className={styles.emissions2}>EMISSIONS</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <button onClick={handleClick} className={styles.button1}>
        <img
          className={styles.upstreampng}
          src={upstream}
          onClick={handleUpstream}
          alt=""
        />
        </button>
        <button className={styles.button1}>
        <img
          className={styles.facilitypng}
          src={facilityp}
          onClick={handleFacilityStream}
          alt=""
        />
        </button>
        <button className={styles.button1}>
        <img
          className={styles.downstreampng}
          src={downstreamp}
          alt=""
        />
        </button>
      </div>
    </div>
    ) : (
      <p>You are not logged in.</p>
    )}
  </div>
  );
};

EmissionsVisualization.propTypes = {
  className: PropTypes.string,
};

export default EmissionsVisualization;
