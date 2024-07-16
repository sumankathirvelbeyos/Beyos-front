import React ,{useContext} from 'react';
import { AuthContext } from '../../Components/contextProvider/AuthContext';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import './EmissionRow.css';
 
const EmissionRow = ({ icon, type, facility, year, user, setUser }) => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className="emission-row">
      <div className="emission-icon">{icon}</div>
      <div className="emission-type">{type}</div>
      <div className="emission-facility">{facility}</div>
      <FormControl className="emission-user-select">
        <InputLabel>Select User</InputLabel>
        <Select
          value={user}
          onChange={(e) => setUser(e.target.value)}
        >
          <MenuItem value={'Car'}>Car</MenuItem>
          <MenuItem value={'Truck'}>Truck</MenuItem>
          <MenuItem value={'Bike/Scooter'}>Bike/Scooter</MenuItem>
          <MenuItem value={'Forklift or non-road equipment'}>Forklift or non-road equipment</MenuItem>
          <MenuItem value={'Construction Equipment'}>Construction Equipment</MenuItem>
        </Select>
      </FormControl>
      <div className="emission-year">{year}</div>
      <div className="emission-status">
        <div className="status-bar"></div>
      </div>
    </div>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default EmissionRow;
