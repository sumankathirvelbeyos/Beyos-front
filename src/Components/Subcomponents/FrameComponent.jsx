import { useMemo } from "react";
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
          <div className="content269" />
          <div className="content270" />
          <div className="content271" />
          <div className="content272" />
          <div className="content273" />
          <div className="content274" />
          <div className="content275" />
          <div className="content276" />
          <div className="content277" />
          <div className="content278" />
        </div>
        <div className="content-parent25">
          <div className="content279" />
          <div className="content280" />
          <div className="content281" />
          <div className="content282" />
          <div className="content283" />
          <div className="content284" />
          <div className="content285" />
          <div className="content286" />
          <div className="content287" />
          <div className="content288" />
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
              <div className="content298" />
              <div className="content299" />
              <div className="content300" />
              <div className="content301" />
              <div className="content302" />
              <div className="content303" />
              <div className="content304" />
              <div className="content305" />
              <div className="content306" />
              <div className="content307" />
            </div>
            <div className="content-parent28">
              <div className="content308" />
              <div className="content309" />
              <div className="content310" />
              <div className="content311" />
              <div className="content312" />
              <div className="content313" />
              <div className="content314" />
              <div className="content315" />
              <div className="content316" />
              <div className="content317" />
            </div>
            <div className="content-parent29">
              <div className="content318" />
              <div className="content319" />
              <div className="content320" />
              <div className="content321" />
              <div className="content322" />
              <div className="content323" />
              <div className="content324" />
              <div className="content325" />
              <div className="content326" />
              <div className="content327" />
            </div>
            <div className="content-parent30">
              <div className="content328" />
              <div className="content329" />
              <div className="content330" />
              <div className="content331" />
              <div className="content332" />
              <div className="content333" />
              <div className="content334" />
              <div className="content335" />
              <div className="content336" />
              <div className="content337" />
            </div>
            <div className="content-parent31">
              <div className="content338" />
              <div className="content339" />
              <div className="content340" />
              <div className="content341" />
              <div className="content342" />
              <div className="content343" />
              <div className="content344" />
              <div className="content345" />
              <div className="content346" />
              <div className="content347" />
            </div>
            <div className="content-parent32">
              <div className="content348" />
              <div className="content349" />
              <div className="content350" />
              <div className="content351" />
              <div className="content352" />
              <div className="content353" />
              <div className="content354" />
              <div className="content355" />
              <div className="content356" />
              <div className="content357" />
            </div>
            <div className="content-parent33">
              <div className="content358" />
              <div className="content359" />
              <div className="content360" />
              <div className="content361" />
              <div className="content362" />
              <div className="content363" />
              <div className="content364" />
              <div className="content365" />
              <div className="content366" />
              <div className="content367" />
            </div>
            <div className="content-parent34">
              <div className="content368" />
              <div className="content369" />
              <div className="content370" />
              <div className="content371" />
              <div className="content372" />
              <div className="content373" />
              <div className="content374" />
              <div className="content375" />
              <div className="content376" />
              <div className="content377" />
            </div>
            <div className="content-parent35">
              <div className="content378" />
              <div className="content379" />
              <div className="content380" />
              <div className="content381" />
              <div className="content382" />
              <div className="content383" />
              <div className="content384" />
              <div className="content385" />
              <div className="content386" />
              <div className="content387" />
              <div className="content388" />
              <div className="content389" />
              <div className="content390" />
              <div className="content391" />
              <div className="content392" />
              <div className="content393" />
              <div className="content394" />
              <div className="content395" />
              <div className="content396" />
              <div className="content397" />
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