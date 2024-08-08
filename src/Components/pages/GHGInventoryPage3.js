import styles from "./GHGInventoryPage3.module.css";
import React,{ useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';
const GHGInventoryPage3 = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const [formData,setFormData]=useState({
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
    input1:'',
    input2:'',
    input3:'',

  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const navigate = useNavigate();
  const handleFacility = () => {
  navigate('/facility');
};
// const handlelogo=()=>{
//   navigate('/landingpage')
// }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
      const data = {
        "email": "sumand1@gmail.com"
    };
    
    fetch('https://backend-new-419p.onrender.com/ghg3', {
        method: 'POST', // Specify the method
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data), // Convert the object to a JSON string
    })
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        console.log('Success:', data);
        alert(data) // Handle the success
    })
    .catch((error) => {
        console.error('Error:', error); // Handle the error
    });
    
    }catch(error){
        console.log(error);
      alert("No functional Api attached to this project");
    }
  };



  return (
    <div>
    {auth.isAuthenticated ? (
    <>
      <div className={styles.rectangle}></div>
      <h1 className={styles.beyos}>BeyOS</h1>
      <h1 className={styles.facility}>001-FACILITY 1</h1>
      <h4 className={styles.source}>Select the source of your purchased electricity in the above identified facility</h4>
      
      <div className={styles.nationalGrid}>National Grid</div>
      <input 
        className={styles.checkbox1}
        type='checkbox'
        name='checkbox1'
        checked={formData.checkbox1}
        onChange={handleCheckboxChange}
      />
      <div className={styles.solar}>Solar</div>
      <input
        className={styles.checkbox2}
        type='checkbox'
        name='checkbox2'
        checked={formData.checkbox2}
        onChange={handleCheckboxChange}
      />
      <div className={styles.wind}>Wind</div>
      <input
        className={styles.checkbox3}
        type='checkbox'
        name='checkbox3'
        checked={formData.checkbox3}
        onChange={handleCheckboxChange}
      />
      <div className={styles.hydro}>Hydro</div>
      <input
        className={styles.checkbox4}
        type='checkbox'
        name='checkbox4'
        checked={formData.checkbox4}
        onChange={handleCheckboxChange}
      />
      <div className={styles.nuclear}>Nuclear</div>
      <input
        className={styles.checkbox5}
        type='checkbox'
        name='checkbox5'
        checked={formData.checkbox5}
        onChange={handleCheckboxChange}
      />
      <div className={styles.naturalGas}>Natural Gas</div>
      <input
        className={styles.checkbox6}
        type='checkbox'
        name='checkbox6'
        checked={formData.checkbox6}
        onChange={handleCheckboxChange}
      />
      
      <div className={styles.biogas}>Biogas</div>
      <input
        className={styles.checkbox7}
        type='checkbox'
        name='checkbox7'
        checked={formData.checkbox7}
        onChange={handleCheckboxChange}
      />
      <div className={styles.coal}>Coal</div>
      <input
        className={styles.checkbox8}
        type='checkbox'
        name='checkbox8'
        checked={formData.checkbox8}
        onChange={handleCheckboxChange}
      />

      <h4 className={styles.serviceProvider}>Name of the Service Provider</h4>

      <input
        className={styles.input1}
        type='text'
        placeholder='Enter Service Provider Name'
        name='input1'
        value={formData.input1}
        onChange={handleInputChange}
      />
      <input
        className={styles.input2}
        type='text'
        placeholder="Emission factor provided by service provider (If Applicable)"
        name='input2'
        value={formData.input2}
        onChange={handleInputChange}
      />
      <input
        className={styles.input3}
        type='text'
        placeholder="SI Units"
        name='input3'
        value={formData.input3}
        onChange={handleInputChange}
      />

      <h4 className={styles.categories}>Select the Categories of Scope 3 applicable for this facility </h4>

      <div className={styles.purchasedGoods}>Purchased Goods and Services</div>
      <input
        className={styles.checkbox9}
        type='checkbox'
        name='checkbox9'
        checked={formData.checkbox9}
        onChange={handleCheckboxChange}
      />
      <div className={styles.capitalGoods}>Capital Goods</div>
      <input
        className={styles.checkbox10}
        type='checkbox'
        name='checkbox10'
        checked={formData.checkbox10}
        onChange={handleCheckboxChange}
      />
      <div className={styles.fuelEnergy}>Fuel & Energy related activities</div>
      <input
        className={styles.checkbox11}
        type='checkbox'
        name='checkbox11'
        checked={formData.checkbox11}
        onChange={handleCheckboxChange}
      />
      <div className={styles.upstream}>Upstream Transportation</div>
      <input
        className={styles.checkbox12}
        type='checkbox'
        name='checkbox12'
        checked={formData.checkbox12}
        onChange={handleCheckboxChange}
      />
      <div className={styles.waste}>Waste from operations</div>
      <input
        className={styles.checkbox13}
        type='checkbox'
        name='checkbox13'
        checked={formData.checkbox13}
        onChange={handleCheckboxChange}
      />
      <div className={styles.business}>Business Travel</div>
      <input
        className={styles.checkbox14}
        type='checkbox'
        name='checkbox14'
        checked={formData.checkbox14}
        onChange={handleCheckboxChange}
      />
      <div className={styles.employee}>Employee Commute</div>
      <input
        className={styles.checkbox15}
        type='checkbox'
        name='checkbox15'
        checked={formData.checkbox15}
        onChange={handleCheckboxChange}
      />
      <div className={styles.downstream}>Downstream Transportation</div>
      <input
        className={styles.checkbox16}
        type='checkbox'
        name='checkbox16'
        checked={formData.checkbox16}
        onChange={handleCheckboxChange}
      />
      <div className={styles.upstreamAssets}>Upstream Leased Assets</div>
      <input
        className={styles.checkbox17}
        type='checkbox'
        name='checkbox17'
        checked={formData.checkbox17}
        onChange={handleCheckboxChange}
      />
      <div className={styles.use}>Use of Sold Products</div>
      <input
        className={styles.checkbox18}
        type='checkbox'
        name='checkbox18'
        checked={formData.checkbox18}
        onChange={handleCheckboxChange}
      />
      <div className={styles.processing}>Processing of Sold Products</div>
      <input
        className={styles.checkbox19}
        type='checkbox'
        name='checkbox19'
        checked={formData.checkbox19}
        onChange={handleCheckboxChange}
      />
      <div className={styles.eol}>EOL of sold products</div>
      <input
        className={styles.checkbox20}
        type='checkbox'
        name='checkbox20'
        checked={formData.checkbox20}
        onChange={handleCheckboxChange}
      />
      <div className={styles.investment}>Investment</div>
      <input
        className={styles.checkbox21}
        type='checkbox'
        name='checkbox21'
        checked={formData.checkbox21}
        onChange={handleCheckboxChange}
      />
      <div className={styles.franchise}>Franchise</div>
      <input
        className={styles.checkbox22}
        type='checkbox'
        name='checkbox22'
        checked={formData.checkbox22}
        onChange={handleCheckboxChange}
      />
      <div className={styles.downstreamAssets}>Downstream Leased Assets</div>
      <input
        className={styles.checkbox23}
        type='checkbox'
        name='checkbox23'
        checked={formData.checkbox23}
        onChange={handleCheckboxChange}
      />
      
      
      <div onClick={handleFacility}>
      <button className={styles.complete} onClick={handleSubmit}>Complete</button>
      </div>
    </>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default GHGInventoryPage3;
