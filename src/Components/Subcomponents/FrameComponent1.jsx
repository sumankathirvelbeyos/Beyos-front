import { useCallback } from "react";
import PropTypes from "prop-types";
import {datamanagement1,datamanagement2,datamanagement3,datamanagement4,group,whitevariation} from "../../Assets_facility_homepage"

const FrameComponent1 = ({ className = "" }) => {
  const onDataManagement3IconClick = useCallback(() => {
    // Please sync "Emission Measurement - Home Page" to the project
  }, []);

  const onDataManagement2IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 20" to the project
  }, []);

  const onDataManagement1IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 17" to the project
  }, []);

  const onDataManagement4IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 21" to the project
  }, []);

  return (
    <div className={`background-parent ${className}`}>
      <div className="background" />
      <div className="white-variation-1-wrapper">
        <img
          className="white-variation-15"
          loading="lazy"
          alt=""
          src={whitevariation}
        />
      </div>
      <div className="frame-wrapper7">
        <div className="frame-parent26">
          <div className="data-management-3-wrapper">
            <img
              className="data-management-3-icon4"
              loading="lazy"
              alt=""
              src={datamanagement3}
              onClick={onDataManagement3IconClick}
            />
          </div>
          <div className="frame-parent27">
            <div className="data-management-2-wrapper">
              <img
                className="data-management-2-icon4"
                loading="lazy"
                alt=""
                src={datamanagement2}
                onClick={onDataManagement2IconClick}
              />
            </div>
            <div className="data-management-1-wrapper">
              <img
                className="data-management-1-icon4"
                alt=""
                src={datamanagement1}
                onClick={onDataManagement1IconClick}
              />
            </div>
            <div className="co24">
              <img className="" alt="" src={group}/>
            </div>
          </div>
        </div>
      </div>
      <img className="frame-child5" loading="lazy" alt="" src="/arrow-1.svg" />
      <div className="data-management-4-wrapper">
        <img
          className="data-management-4-icon4"
          loading="lazy"
          alt=""
          src={datamanagement4}
          onClick={onDataManagement4IconClick}
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
