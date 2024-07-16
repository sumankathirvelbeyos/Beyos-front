import styles from "./FacilityDeclarationPage.module.css";
import React, { useState,useContext } from 'react';
import '../../App.css'; // Ensure this is imported to use the styles
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';
const FacilityDeclarationPage = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleghg1 = () => {
  navigate('/ghg1');
};

const handleEmissionmanagementHome = () => {
  navigate('/emission');
};
  const [formData,setFormData]=useState({
    input1:'',
    input2:'',
    input3:'',
    input4:'',
    input5:'',
    input6:'',
    input7:'',
    input8:'',
    input9:'',
    input10:'',
    input11:'',
    input12:'',
    input13:'',
    input14:'',
    input15:'',
    input16:'',
    input17:'',
    input18:'',
    input19:'',
    input20:'',
    input21:'',
    input22:'',
    input23:'',
    input24:'',
    input25:'',
  })

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
    
    fetch('https://backend-new-419p.onrender.com/facilitydeclaration', {
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
    <div >
      <h1 className={styles.beyoss}>BeyOS</h1>
      <div className={styles.rectangle}></div>
      <div className={styles.facilityname}>FACILITY NAME</div>
      <div className={styles.facilityid}>FACILITY ID</div>
      <div className={styles.country}>COUNTRY</div>
      <div className={styles.latitude}>LATITUDE</div>
      <div className={styles.longitude}>LONGITUDE</div>
      <img className={styles.logo} alt=""/>
      <img className={styles.settings} alt=""/>
      <img className={styles.user} alt=""/>
      <div className={styles.scroll}></div>
      <div className={styles.scroll2}></div>
      <input
        className={styles.facilityname1}
        type='text'
        name='input1'
        placeholder="Enter Facility Name"
        value={formData.input1}
        onChange={handleInputChange}
      />
      <input
        className={styles.facilityid1}
        type='text'
        name='input2'
        placeholder="Enter Facility ID"
        value={formData.input2}
        onChange={handleInputChange}
      />
      <input
        className={styles.country1}
        type='text'
        name='input3'
        placeholder="Select Country"
        value={formData.input3}
        onChange={handleInputChange}
      />
      <input
        className={styles.latitude1}
        type='text'
        name='input4'
        placeholder="Enter Latitude"
        value={formData.input4}
        onChange={handleInputChange}
      />
      <input
        className={styles.longitude1}
        type='text'
        name='input5'
        placeholder="Enter Longitude"
        value={formData.input5}
        onChange={handleInputChange}
      />
      <button
        className={styles.button1}
      >CONFIGURE ASSETS</button>
      <div className={styles.line1}></div>

      <input
        className={styles.facilityname2}
        type='text'
        name='input6'
        placeholder="Enter Facility Name"
        value={formData.input6}
        onChange={handleInputChange}
      />
      <input
        className={styles.facilityid2}
        type='text'
        name='input7'
        placeholder="Enter Facility ID"
        value={formData.input7}
        onChange={handleInputChange}
      />
      <input
        className={styles.country2}
        type='text'
        name='input8'
        placeholder="Select Country"
        value={formData.input8}
        onChange={handleInputChange}
      />
      <input
        className={styles.latitude2}
        type='text'
        name='input9'
        placeholder="Enter Latitude"
        value={formData.input9}
        onChange={handleInputChange}
      />
      <input
        className={styles.longitude2}
        type='text'
        name='input10'
        placeholder="Enter Longitude"
        value={formData.input10}
        onChange={handleInputChange}
      />
      <button
        className={styles.button2}
      >CONFIGURE ASSETS</button>
      <div className={styles.line2}></div>

      <input
        className={styles.facilityname3}
        type='text'
        name='input11'
        placeholder="Enter Facility Name"
        value={formData.input11}
        onChange={handleInputChange}
      />
      <input
        className={styles.facilityid3}
        type='text'
        name='input12'
        placeholder="Enter Facility ID"
        value={formData.input12}
        onChange={handleInputChange}
      />
      <input
        className={styles.country3}
        type='text'
        name='input13'
        placeholder="Select Country"
        value={formData.input13}
        onChange={handleInputChange}
      />
      <input
        className={styles.latitude3}
        type='text'
        name='input14'
        placeholder="Enter Latitude"
        value={formData.input14}
        onChange={handleInputChange}
      />
      <input
        className={styles.longitude3}
        type='text'
        name='input15'
        placeholder="Enter Longitude"
        value={formData.input15}
        onChange={handleInputChange}
      />
      <button
        className={styles.button3}
      >CONFIGURE ASSETS</button>
      <div className={styles.line3}></div>

      <input
        className={styles.facilityname4}
        type='text'
        name='input16'
        placeholder="Enter Facility Name"
        value={formData.input16}
        onChange={handleInputChange}
      />
      <input
        className={styles.facilityid4}
        type='text'
        name='input17'
        placeholder="Enter Facility ID"
        value={formData.input17}
        onChange={handleInputChange}
      />
      <input
        className={styles.country4}
        type='text'
        name='input18'
        placeholder="Select Country"
        value={formData.input18}
        onChange={handleInputChange}
      />
      <input
        className={styles.latitude4}
        type='text'
        name='input19'
        placeholder="Enter Latitude"
        value={formData.input19}
        onChange={handleInputChange}
      />
      <input
        className={styles.longitude4}
        type='text'
        name='input20'
        placeholder="Enter Longitude"
        value={formData.input20}
        onChange={handleInputChange}
      />
      <button
        className={styles.button4} onClick={handleghg1}
      >CONFIGURE ASSETS</button>
      <div className={styles.line4}></div>

      <input
        className={styles.facilityname5}
        type='text'
        name='input21'
        placeholder="Enter Facility Name"
        value={formData.input21}
        onChange={handleInputChange}
      />
      <input
        className={styles.facilityid5}
        type='text'
        name='input22'
        placeholder="Enter Facility ID"
        value={formData.input21}
        onChange={handleInputChange}
      />
      <input
        className={styles.country5}
        type='text'
        name='input23'
        placeholder="Select Country"
        value={formData.input18}
        onChange={handleInputChange}
      />
      <input
        className={styles.latitude5}
        type='text'
        name='input24'
        placeholder="Enter Latitude"
        value={formData.input24}
        onChange={handleInputChange}
      />
      <input
        className={styles.longitude5}
        type='text'
        name='input25'
        placeholder="Enter Longitude"
        value={formData.input25}
        onChange={handleInputChange}
      />
      <button
        className={styles.button5}
      >CONFIGURE ASSETS</button>
      <div className={styles.line5}></div>
      <div onClick={handleEmissionmanagementHome}>
      <button className={styles.button6} onClick={handleSubmit}>NEXT</button>
      </div>
    </div>
  ) : (
      <p>You are not logged in.</p>
    )}
  </div>
  );
};

export default FacilityDeclarationPage;
