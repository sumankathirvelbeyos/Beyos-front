import styles from "./GHGInventoryPage2.module.css";
import { useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';
const GHGInventoryPage2 = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const [formData, setFormData] = useState({
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
    checkbox30:false,
    checkbox31:false,
    checkbox32:false,
    checkbox33:false,
    checkbox34:false,
    checkbox35:false,
    checkbox36:false,
    checkbox37:false,
    checkbox38:false,
    checkbox39:false,
    checkbox40:false,
    checkbox41:false,
    checkbox42:false,
    checkbox43:false,
    checkbox44:false,
    checkbox45:false,
    checkbox46:false,
    checkbox47:false,
    checkbox48:false,
    checkbox49:false,
    checkbox50:false,
    checkbox51:false,
    input1:''

  });

  const navigate = useNavigate();
  const handleghg3 = () => {
  navigate('/ghg3');
};

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    event.stopPropagation();
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

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
      const data = {
        "email": "sumand1@gmail.com"
    };
    
    fetch('https://backend-new-419p.onrender.com/ghg2', {
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
    <h1 className={styles.beyos}>BeyOS</h1>
    <h1 className={styles.facility}>001 - FACILITY 1</h1>
    <div className={styles.select1}>Select the Refrigerant gases used in the above identified facility for various Refrigeration and Air-Conditioning equipments</div>
    <div className={styles.rectangle}></div>

    <div className={styles.r401a}>R401-A</div>
    <input
      className={styles.checkbox1}
      type='checkbox'
      name='checkbox1'
      checked={formData.checkbox1}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r401b}>R401-B</div>
    <input
      className={styles.checkbox2}
      type='checkbox'
      name='checkbox2'
      checked={formData.checkbox2}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r401c}>R401-C</div>
    <input
      className={styles.checkbox3}
      type='checkbox'
      name='checkbox3'
      checked={formData.checkbox3}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r402a}>R402-A</div>
    <input
      className={styles.checkbox4}
      type='checkbox'
      name='checkbox4'
      checked={formData.checkbox4}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r402b}>R402-B</div>
    <input
      className={styles.checkbox5}
      type='checkbox'
      name='checkbox5'
      checked={formData.checkbox5}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r403b}>R403-B</div>
    <input
      className={styles.checkbox6}
      type='checkbox'
      name='checkbox6'
      checked={formData.checkbox6}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r404a}>R404-A</div>
    <input
      className={styles.checkbox7}
      type='checkbox'
      name='checkbox7'
      checked={formData.checkbox7}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r406a}>R406-A</div>
    <input
      className={styles.checkbox8}
      type='checkbox'
      name='checkbox8'
      checked={formData.checkbox8}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r407a}>R407-A</div>
    <input
      className={styles.checkbox9}
      type='checkbox'
      name='checkbox9'
      checked={formData.checkbox9}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r407b}>R407-B</div>
    <input
      className={styles.checkbox10}
      type='checkbox'
      name='checkbox10'
      checked={formData.checkbox10}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r407c}>R407-C</div>
    <input
      className={styles.checkbox11}
      type='checkbox'
      name='checkbox11'
      checked={formData.checkbox11}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r407d}>R407-D</div>
    <input
      className={styles.checkbox12}
      type='checkbox'
      name='checkbox12'
      checked={formData.checkbox12}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r407e}>R407-E</div>
    <input
      className={styles.checkbox13}
      type='checkbox'
      name='checkbox13'
      checked={formData.checkbox13}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r408a}>R408-A</div>
    <input
      className={styles.checkbox14}
      type='checkbox'
      name='checkbox14'
      checked={formData.checkbox14}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r409a}>R409-A</div>
    <input
      className={styles.checkbox15}
      type='checkbox'
      name='checkbox15'
      checked={formData.checkbox15}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r410a}>R410-A</div>
    <input
      className={styles.checkbox16}
      type='checkbox'
      name='checkbox16'
      checked={formData.checkbox16}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r410b}>R410-B</div>
    <input
      className={styles.checkbox17}
      type='checkbox'
      name='checkbox17'
      checked={formData.checkbox17}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r411a}>R411-A</div>
    <input
      className={styles.checkbox18}
      type='checkbox'
      name='checkbox18'
      checked={formData.checkbox18}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r411b}>R411-B</div>
    <input
      className={styles.checkbox19}
      type='checkbox'
      name='checkbox19'
      checked={formData.checkbox19}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r407dd}>R407-D</div>
    <input
      className={styles.checkbox20}
      type='checkbox'
      name='checkbox20'
      checked={formData.checkbox20}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r413a}>R413-A</div>
    <input
      className={styles.checkbox21}
      type='checkbox'
      name='checkbox21'
      checked={formData.checkbox21}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r414a}>R414-A</div>
    <input
      className={styles.checkbox22}
      type='checkbox'
      name='checkbox22'
      checked={formData.checkbox22}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r414b}>R414-B</div>
    <input
      className={styles.checkbox23}
      type='checkbox'
      name='checkbox23'
      checked={formData.checkbox23}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r417a}>R417-A</div>
    <input
      className={styles.checkbox24}
      type='checkbox'
      name='checkbox24'
      checked={formData.checkbox24}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r422a}>R422-A</div>
    <input
      className={styles.checkbox25}
      type='checkbox'
      name='checkbox25'
      checked={formData.checkbox25}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r422d}>R422-D</div>
    <input
      className={styles.checkbox26}
      type='checkbox'
      name='checkbox26'
      checked={formData.checkbox26}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r423a}>R423-A</div>
    <input
      className={styles.checkbox27}
      type='checkbox'
      name='checkbox27'
      checked={formData.checkbox27}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r424a}>R424-A</div>
    <input
      className={styles.checkbox28}
      type='checkbox'
      name='checkbox28'
      checked={formData.checkbox28}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r426a}>R426-A</div>
    <input
      className={styles.checkbox29}
      type='checkbox'
      name='checkbox29'
      checked={formData.checkbox29}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r428a}>R428-A</div>
    <input
      className={styles.checkbox30}
      type='checkbox'
      name='checkbox30'
      checked={formData.checkbox30}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r434a}>R434-A</div>
    <input
      className={styles.checkbox31}
      type='checkbox'
      name='checkbox31'
      checked={formData.checkbox31}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r500}>R500</div>
    <input
      className={styles.checkbox32}
      type='checkbox'
      name='checkbox32'
      checked={formData.checkbox32}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r502}>R502</div>
    <input
      className={styles.checkbox33}
      type='checkbox'
      name='checkbox33'
      checked={formData.checkbox33}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r504}>R504</div>
    <input
      className={styles.checkbox34}
      type='checkbox'
      name='checkbox34'
      checked={formData.checkbox34}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r507}>R507</div>
    <input
      className={styles.checkbox35}
      type='checkbox'
      name='checkbox35'
      checked={formData.checkbox35}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r508a}>R508A</div>
    <input
      className={styles.checkbox36}
      type='checkbox'
      name='checkbox36'
      checked={formData.checkbox36}
      onChange={handleCheckboxChange}
    />
    <div className={styles.r508b}>R508B</div>
    <input
      className={styles.checkbox37}
      type='checkbox'
      name='checkbox37'
      checked={formData.checkbox37}
      onChange={handleCheckboxChange}
    />
    <div className={styles.others}>Others</div>
    <input
      className={styles.checkbox38}
      type='checkbox'
      name='checkbox38'
      checked={formData.checkbox38}
      onChange={handleCheckboxChange}
    />
    <input
      className={styles.input1}
      type='text'
      name='input1'
      placeholder="Enter Equipment Type"
      value={formData.input1}
      onChange={handleInputChange}
    />

    <div className={styles.select2}>Select Other possible emissions related to process/operations in the above identified facility </div>
    <div className={styles.process}>Process Vent</div>
    <input
      className={styles.checkbox39}
      type='checkbox'
      name='checkbox39'
      checked={formData.checkbox39}
      onChange={handleCheckboxChange}
    />
    <div className={styles.equipmentv}>Equipment Vent</div>
    <input
      className={styles.checkbox40}
      type='checkbox'
      name='checkbox40'
      checked={formData.checkbox40}
      onChange={handleCheckboxChange}
    />
    <div className={styles.main}>Maintenance/Turnaround</div>
    <input
      className={styles.checkbox41}
      type='checkbox'
      name='checkbox41'
      checked={formData.checkbox41}
      onChange={handleCheckboxChange}
    />
    <div className={styles.leaks}>Leaks</div>
    <input
      className={styles.checkbox42}
      type='checkbox'
      name='checkbox42'
      checked={formData.checkbox42}
      onChange={handleCheckboxChange}
    />
    <div className={styles.loading}>Loading/Unloading Activities</div>
    <input
      className={styles.checkbox43}
      type='checkbox'
      name='checkbox43'
      checked={formData.checkbox43}
      onChange={handleCheckboxChange}
    />

    <div className={styles.select3}>Select the possible gases that are released due to the selected process/operations related activity</div>
    <div className={styles.co2}>CO2</div>
    <input
      className={styles.checkbox44}
      type='checkbox'
      name='checkbox44'
      checked={formData.checkbox44}
      onChange={handleCheckboxChange}
    />
    <div className={styles.ch4}>CH4</div>
    <input
      className={styles.checkbox45}
      type='checkbox'
      name='checkbox45'
      checked={formData.checkbox45}
      onChange={handleCheckboxChange}
    />
    <div className={styles.n20}>N20</div>
    <input
      className={styles.checkbox46}
      type='checkbox'
      name='checkbox46'
      checked={formData.checkbox46}
      onChange={handleCheckboxChange}
    />
    <div className={styles.cfc}>CFC</div>
    <input
      className={styles.checkbox47}
      type='checkbox'
      name='checkbox47'
      checked={formData.checkbox47}
      onChange={handleCheckboxChange}
    />
    <div className={styles.hfc}>HFC</div>
    <input
      className={styles.checkbox48}
      type='checkbox'
      name='checkbox48'
      checked={formData.checkbox48}
      onChange={handleCheckboxChange}
    />
    <div className={styles.pfc}>PFC</div>
    <input
      className={styles.checkbox49}
      type='checkbox'
      name='checkbox49'
      checked={formData.checkbox49}
      onChange={handleCheckboxChange}
    />
    <div className={styles.pfe}>PFE</div>
    <input
      className={styles.checkbox50}
      type='checkbox'
      name='checkbox50'
      checked={formData.checkbox50}
      onChange={handleCheckboxChange}
    />
    <div className={styles.pfpmie}>PFPMIE</div>
    <input
      className={styles.checkbox51}
      type='checkbox'
      name='checkbox51'
      checked={formData.checkbox51}
      onChange={handleCheckboxChange}
    />
   <img
    className={styles.logo} alt=""
   />
   <img
    className={styles.settings} alt=""
   />
   <img
   className={styles.user}
   alt=""
   />
    <div onClick={handleghg3}>
    <button className={styles.next} onClick={handleSubmit}>NEXT</button>
    </div>
    </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default GHGInventoryPage2;
