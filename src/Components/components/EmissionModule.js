import React, { useState,useContext } from 'react';
import { AuthContext } from '../../Components/contextProvider/AuthContext';
import EmissionRow from './EmissionRow';
import './EmissionModule.css';
import logo from '../../assets/logo.png';
import folder from '../../assets/folder.png';
import target from '../../assets/target.png';
import leaf from '../../assets/leaf.png';
import co2 from '../../assets/co2.png';
import pie from '../../assets/pie.png';
import back from '../../assets/back.png';
import filter from '../../assets/filter.png';
import { useNavigate } from 'react-router-dom';

const EmissionModule = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const [emissions, setEmissions] = useState([
    {  type: 'Generation of electricity/heat (Stationary combustion)', facility: 'Facility 1', year: '2022-23', user: '' },
    {  type: 'Company owned vehicles usage (Mobile combustion)', facility: 'Facility 1', year: '2022-23', user: '' },
    { type: 'Refrigerant and gas leaks (Fugitive Emissions)', facility: 'Facility 1', year: '2022-23', user: '' },
    { type: 'Industrial Process Emissions', facility: 'Facility 1', year: '2022-23', user: '' },
    { type: 'Generation of electricity/heat (Stationary combustion)', facility: 'Facility 2', year: '2022-23', user: '' },
  ]);
  const navigate = useNavigate();
  const handleEmission = () => {
  navigate('/emission');
};
const handleFacilityEmissionhome = () => {
  navigate('/facility-emission-homepage');
};
  const handleUserChange = (index, user) => {
    const newEmissions = [...emissions];
    newEmissions[index].user = user;
    setEmissions(newEmissions);
  };

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
      const data = {
        "email": "sumand1@gmail.com"
    };
    
    fetch('https://backend-new-419p.onrender.com/emissionmanagement', {
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
    <div className='container'>
    <div className='rectangle'/>
    <h4 className='emissiontype'>EMISSION TYPE</h4>
    <h4 className='facility'>FACILITY</h4>
    <h4 className='responsibility'>RESPONSIBILITY</h4>
    <h4 className='reportingyear'>REPORTING YEAR</h4>
    <h4 className='status'>STATUS</h4>
    <div>
        <img 
            className='logo'
            src={logo} alt=""
        />
        <img
            className='folder'
            src={folder} alt=""
        />
        <img
            className='target'
            src={target} alt=""
        />
        <img
            className='leaf'
            src={leaf} alt=""
        />
        <img
            className='co2'
            src={co2} alt=""
        />
        <img
            className='pie'
            src={pie} alt=""
        />
        <img
            className='back'
            src={back}
            onClick={handleEmission} alt=""
        />
        <img
            className='filter'
            src={filter} alt=""
        />
    </div>
    <div className="emission-module">
      <h1 className='emissionmodule'>EMISSION MODULE</h1>
      <div className="emission-list">
        {emissions.map((emission, index) => (
          <EmissionRow
            key={index}
            {...emission}
            user={emission.user}
            setUser={(user) => handleUserChange(index, user)}
          />
        ))}
      </div>  
      <div onClick={handleFacilityEmissionhome}>
      <button className="next-button" onClick={handleSubmit}>NEXT</button>
      </div>
    </div>
    </div>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default EmissionModule;
