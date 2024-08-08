import styles from "./GHGInventoryPage.module.css";
import React,{ useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';
const GHGInventoryPage = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const[formData,setFormData]=useState({
    email:'aswath@gmail.com',
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false,
    checkbox5:false,
    checkbox6:false,
    checkbox7:false,
    checkbox8:false,
    checkbox9:false,
    checkbox10:false,
    checkbox11:false,
    checkbox12:false,
    checkbox13:false,
    checkbox14:false,
    checkbox15:false,
    checkbox16:false,
    checkbox17:false,
    checkbox18:false,
    checkbox19:false,
    checkbox20:false,
    checkbox21:false,
    checkbox22:false,
    checkbox23:false,
    checkbox24:false,
    checkbox25:false,
    checkbox26:false,
    checkbox27:false,
    checkbox28:false,
    checkbox29:false,
    input1:'',
    input2:'',

  });

  const navigate = useNavigate();
  const handleghg2 = () => {
  navigate('/ghg2');
};
const handlelogo=()=>{
  navigate('/landingpage')
}

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () =>{
    const jsonObject ={
      checkboxes:{
        Boiler:formData.checkbox1,
        Furnace:formData.checkbox2,
        Dryer:formData.checkbox3,
        PowerGenerator:formData.checkbox4,
        ThermicFluidHeater:formData.checkbox5,
        ThermalOxidizers:formData.checkbox6,
        Kiln:formData.checkbox7,
        Flares:formData.checkbox8,
        Incinerator:formData.checkbox9,
        ProcessHeaterOven:formData.checkbox10,
        CombustionTurbine:formData.checkbox11,
        Others:formData.checkbox12,
        Car:formData.checkbox13,
        Motorcycle:formData.checkbox14,
        LightDutyTruck:formData.checkbox15,
        HeavyDutyTruck:formData.checkbox16,
        PassengerBus:formData.checkbox17,
        PassengerVan:formData.checkbox18,
        Crane:formData.checkbox19,
        Forklift:formData.checkbox20,
        ConstructionVehicle:formData.checkbox21,
        AgricultureVehicle:formData.checkbox22,
        CommercialFlight:formData.checkbox23,
        ExecutiveJet:formData.checkbox24,
        FreightTrain:formData.checkbox25,
        CommuterTrain:formData.checkbox26,
        Ship:formData.checkbox27,
        Boat:formData.checkbox28,
        Otherss:formData.checkbox29
      },
      inputs:{
        EquipmentType1:formData.input1,
        EquipmentType2:formData.input2
      }
    }
    console.log('Form Data: ',JSON.stringify(jsonObject,null,2))
  }


  return(
    <div >
    {auth.isAuthenticated ? (
    <>
      <h1 className={styles.beyos}>BeyOS</h1>
      <h1 className={styles.facility}>001 - FACILITY 1</h1>
      <div className={styles.rectangle}></div>
      <h4 className={styles.select}>Select the Equipments in the above identified facility that use fuel for combustion activities (Energy & Utility)</h4>
      <img className={styles.logo} onClick={handlelogo} src="./../../assets/logo.png"alt=""/>
      <img className={styles.settings} alt=""/>
      <img className={styles.user} alt=""/>


      <div className={styles.boiler}>Boiler</div>
      <input
        className={styles.checkbox1}
        type='checkbox'
        name='checkbox1'
        checked={formData.checkbox1}
        onChange={handleCheckboxChange}
      />
      <div className={styles.furnace}>Furnace</div>
      <input
        className={styles.checkbox2}
        type='checkbox'
        name='checkbox2'
        checked={formData.checkbox2}
        onChange={handleCheckboxChange}
      />
      <div className={styles.dryer}>Dryer</div>
      <input
        className={styles.checkbox3}
        type='checkbox'
        name='checkbox3'
        checked={formData.checkbox3}
        onChange={handleCheckboxChange}
      />
      <div className={styles.power}>Power Generator</div>
      <input
        className={styles.checkbox4}
        type='checkbox'
        name='checkbox4'
        checked={formData.checkbox4}
        onChange={handleCheckboxChange}
      />
      <div className={styles.thermic}>Thermic Fluid Heater</div>
      <input
        className={styles.checkbox5}
        type='checkbox'
        name='checkbox5'
        checked={formData.checkbox5}
        onChange={handleCheckboxChange}
      />
      <div className={styles.thermal}>Thermal Oxidizers</div>
      <input
        className={styles.checkbox6}
        type='checkbox'
        name='checkbox6'
        checked={formData.checkbox6}
        onChange={handleCheckboxChange}
      />
      <div className={styles.kiln}>Kiln</div>
      <input
        className={styles.checkbox7}
        type='checkbox'
        name='checkbox7'
        checked={formData.checkbox7}
        onChange={handleCheckboxChange}
      />
      <div className={styles.flares}>Flares</div>
      <input
        className={styles.checkbox8}
        type='checkbox'
        name='checkbox8'
        checked={formData.checkbox8}
        onChange={handleCheckboxChange}
      />
      <div className={styles.incinerator}>Incinerator</div>
      <input
        className={styles.checkbox9}
        type='checkbox'
        name='checkbox9'
        checked={formData.checkbox9}
        onChange={handleCheckboxChange}
      />
      <div className={styles.process}>Process Heater/Oven</div>
      <input
        className={styles.checkbox10}
        type='checkbox'
        name='checkbox10'
        checked={formData.checkbox10}
        onChange={handleCheckboxChange}
      />
      <div className={styles.combustion}>Combustion Turbine</div>
      <input
        className={styles.checkbox11}
        type='checkbox'
        name='checkbox11'
        checked={formData.checkbox11}
        onChange={handleCheckboxChange}
      />
      <div className={styles.others}>Others</div>
      <input
        className={styles.checkbox12}
        type='checkbox'
        name='checkbox12'
        checked={formData.checkbox12}
        onChange={handleCheckboxChange}
      />
      <input
        className={styles.type1}
        type='text'
        name='input1'
        placeholder="Enter Equipment Type"
        value={formData.input1}
        onChange={handleInputChange}
      />

      <h4 className={styles.select2}>Select the mobile combustion sources in the above identified facility that are owned/directly controlled (Note: Please do not include 3rd party managed Logistics)</h4>
      

      <div className={styles.car}>Car</div>
      <input
        className={styles.checkbox13}
        type='checkbox'
        name='checkbox13'
        checked={formData.checkbox13}
        onChange={handleCheckboxChange}
      />
      <div className={styles.motorcycle}>Motorcycle</div>
      <input
        className={styles.checkbox14}
        type='checkbox'
        name='checkbox14'
        checked={formData.checkbox14}
        onChange={handleCheckboxChange}
      />
      <div className={styles.light}>Light Duty Truck</div>
      <input
        className={styles.checkbox15}
        type='checkbox'
        name='checkbox15'
        checked={formData.checkbox15}
        onChange={handleCheckboxChange}
      />
      <div className={styles.heavy}>Heavy Duty Truck</div>
      <input
        className={styles.checkbox16}
        type='checkbox'
        name='checkbox16'
        checked={formData.checkbox16}
        onChange={handleCheckboxChange}
      />
      <div className={styles.passenger}>Passenger Bus</div>
      <input
        className={styles.checkbox17}
        type='checkbox'
        name='checkbox17'
        checked={formData.checkbox17}
        onChange={handleCheckboxChange}
      />
      <div className={styles.van}>Passenger Van</div>
      <input
        className={styles.checkbox18}
        type='checkbox'
        name='checkbox18'
        checked={formData.checkbox18}
        onChange={handleCheckboxChange}
      />
        <div className={styles.crane}>Crane</div>
      <input
        className={styles.checkbox19}
        type='checkbox'
        name='checkbox19'
        checked={formData.checkbox19}
        onChange={handleCheckboxChange}
      />
        <div className={styles.forklift}>Forklift</div>
      <input
        className={styles.checkbox20}
        type='checkbox'
        name='checkbox20'
        checked={formData.checkbox20}
        onChange={handleCheckboxChange}
      />
        <div className={styles.construction}>Construction Vehicle</div>
      <input
        className={styles.checkbox21}
        type='checkbox'
        name='checkbox21'
        checked={formData.checkbox21}
        onChange={handleCheckboxChange}
      />
        <div className={styles.agriculture}>Agriculture Vehicle</div>
      <input
        className={styles.checkbox22}
        type='checkbox'
        name='checkbox22'
        checked={formData.checkbox22}
        onChange={handleCheckboxChange}
      />
        <div className={styles.commercial}>Commercial Flight</div>
      <input
        className={styles.checkbox23}
        type='checkbox'
        name='checkbox23'
        checked={formData.checkbox23}
        onChange={handleCheckboxChange}
      />
       <div className={styles.executive}>Executive Jet</div>
      <input
        className={styles.checkbox24}
        type='checkbox'
        name='checkbox24'
        checked={formData.checkbox24}
        onChange={handleCheckboxChange}
      />
       <div className={styles.freight}>Freight Train</div>
      <input
        className={styles.checkbox25}
        type='checkbox'
        name='checkbox25'
        checked={formData.checkbox25}
        onChange={handleCheckboxChange}
      />
       <div className={styles.commuter}>Commuter Train</div>
      <input
        className={styles.checkbox26}
        type='checkbox'
        name='checkbox26'
        checked={formData.checkbox26}
        onChange={handleCheckboxChange}
      />
       <div className={styles.ship}>Ship</div>
      <input
        className={styles.checkbox27}
        type='checkbox'
        name='checkbox27'
        checked={formData.checkbox27}
        onChange={handleCheckboxChange}
      />
       <div className={styles.boat}>Boat</div>
      <input
        className={styles.checkbox28}
        type='checkbox'
        name='checkbox28'
        checked={formData.checkbox28}
        onChange={handleCheckboxChange}
      />
       <div className={styles.otherss}>Others</div>
      <input
        className={styles.checkbox29}
        type='checkbox'
        name='checkbox29'
        checked={formData.checkbox29}
        onChange={handleCheckboxChange}
      />
      <input
        className={styles.type2}
        type='text'
        name='input2'
        placeholder="Enter Equipment Type"
        value={formData.input2}
        onChange={handleInputChange}
      />
      <div onClick={handleghg2}>
      <button className={styles.next} onClick={handleSubmit}>NEXT</button>
      </div>
    </>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  )
};

export default GHGInventoryPage;
