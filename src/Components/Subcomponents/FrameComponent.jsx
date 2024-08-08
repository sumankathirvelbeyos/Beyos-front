import { useMemo } from "react";
import ProgressBar from "../FacilityHome_SubComponent/ProgressBar";
import PropTypes from "prop-types";


const FrameComponent = ({
  className = "",
  propGap,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propRight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const facility10Style = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const contentStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div className={`frame-parent28 ${className}`} style={frameDivStyle}>
      <div className="facility-1-container" style={frameDiv1Style}>
        <div className="facility-17">Facility 1</div>
        <div className="facility-27">Facility 2</div>
        <div className="facility-3-container">
          <div className="facility-37">Facility 3</div>
        </div>
        <div className="facility-47">Facility 4</div>
        <div className="facility-57">Facility 5</div>
        <div className="facility-6-frame">
          <div className="facility-67">Facility 6</div>
        </div>
        <div className="facility-77">Facility 7</div>
        <div className="facility-87">Facility 8</div>
        <div className="facility-97">Facility 9</div>
        <div className="frame-wrapper8" style={frameDiv2Style}>
          <div className="facility-10-group" style={frameDiv3Style}>
            <div className="facility-107" style={facility10Style}>
              Facility 10
            </div>
            <div className="content268" style={contentStyle} />
          </div>
        </div>
      </div>
      <div className="frame-parent29">
        <div className="content-parent24">
        <div className="checkbox-row-20" >
            <ProgressBar progress={20} />
        </div>
        <div className="checkbox-row-21" >
            <ProgressBar progress={40} />
        </div>
        <div className="checkbox-row-22" >
            <ProgressBar progress={60} />
        </div>
        <div className="checkbox-row-23" >
            <ProgressBar progress={80} />
        </div>
        <div className="checkbox-row-24" >
            <ProgressBar progress={100} />
        </div>
        <div className="checkbox-row-25" >
            <ProgressBar progress={120} />
        </div>
        <div className="checkbox-row-26" >
            <ProgressBar progress={100} />
        </div>
        <div className="checkbox-row-27" >
            <ProgressBar progress={80} />
        </div>
        <div className="checkbox-row-28" >
            <ProgressBar progress={60} />
        </div>
        <div className="checkbox-row-29" >
            <ProgressBar progress={40} />
        </div>
        </div>
        <div className="content-parent25">
          
        </div>
        <div className="content-parent26">
          <div className="content289" />
          <div className="content290" />
          <div className="content291" />
          <div className="content292" />
          <div className="content293" />
          <div className="content294" />
          <div className="content295" />
          <div className="content296" />
          <div className="content297" />
          <div className="frame-parent30">
            <div className="content-parent27">
              
            </div>
            <div className="content-parent28">
              
            </div>
            <div className="content-parent29">
              
            </div>
            <div className="content-parent30">
              
            </div>
            <div className="content-parent31">
              
            </div>
            <div className="content-parent32">
              
            </div>
            <div className="content-parent33">
              
            </div>
            <div className="content-parent34">
              
            </div>
            <div className="content-parent35">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propWidth3: PropTypes.any,
  propRight: PropTypes.any,
};

export default FrameComponent;