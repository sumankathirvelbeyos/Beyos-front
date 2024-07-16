import { useMemo, useState,useContext } from "react";
import { AuthContext } from '../../Components/contextProvider/AuthContext';
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  lightDutyTruck,
  constructionVehicle,
  commuterTrain,
  propLeft,
  propGap,
  propHeight,
  propDisplay,
  propHeight1,
  propDisplay1,
  propHeight2,
  propDisplay2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const vehiclesStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const lightDutyTruckStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const constructionVehicleStyle = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay1,
    };
  }, [propHeight1, propDisplay1]);

  const commuterTrainStyle = useMemo(() => {
    return {
      height: propHeight2,
      display: propDisplay2,
    };
  }, [propHeight2, propDisplay2]);
  const[checkboxes, setcheckboxes]=useState({
    checkbox5:false,
    checkbox6:false,
    checkbox7:false
  })

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setcheckboxes({
      ...checkboxes,
      [name]: checked
    });
  };

  const handleButtonClick = () => {
    const checkboxStatusArray = Object.values(checkboxes);
    console.log(checkboxStatusArray);
    // You can further process the checkboxStatusArray here
  };
       // eslint-disable-next-line
       const { auth, logout } = useContext(AuthContext);

  return (
    <div>
    {auth.isAuthenticated ? (
    <div className={styles.truckBusParent} style={frameDivStyle}>
      <div className={styles.truckBus}>
        <div className={styles.truckBusSelection}>
          <input 
            className={styles.checkbox5}
            type="checkbox"
            name="checkbox5"
            checked={checkboxes.checkbox5}
            onChange={handleCheckboxChange}
            />
          <input 
            className={styles.checkbox6}
            type="checkbox"
            name="checkbox6"
            checked={checkboxes.checkbox6}
            onChange={handleCheckboxChange}
            />
          <input 
            className={styles.checkbox7} 
            type="checkbox"
            name="checkbox7"
            checked={checkboxes.checkbox7}
            onChange={handleCheckboxChange}
            />
        </div>
      </div>
      <div className={styles.vehicles} style={vehiclesStyle}>
        <div className={styles.lightDutyTruck} style={lightDutyTruckStyle}>
          {lightDutyTruck}
        </div>
        <div
          className={styles.constructionVehicle}
          style={constructionVehicleStyle}
        >
          {constructionVehicle}
        </div>
        <div className={styles.commuterTrain} style={commuterTrainStyle}>
          {commuterTrain}
        </div>
      </div>
    </div>
  ) : (
      <p>You are not logged in.</p>
    )}
  </div>
  );
};

export default FrameComponent;
