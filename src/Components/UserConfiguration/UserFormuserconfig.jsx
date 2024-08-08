import React, { useState,useEffect,useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../contextProvider/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserDetailsDisplay from './SubComponent_userconfig/UserDetailsDisplay_userconfig';
import ToggleMenu from './SubComponent_userconfig/ToggleMenu_userconfig';
import SettingOption from './SubComponent_userconfig/SettingOption_userconfig';
import { UserIconSvg, whitevariationSvg, SearchIconSvg,SettingsIconSvg,binSvg, addUserIconSvg, NextIconSvg, GreenBulletSvg, RedBulletSvg } from '../../assets_userconfig';

const UserFormuserconfig = () => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleBoundaryPage = () => {
    navigate('/boundary');
};
const handlelogo=()=>{
  navigate('/landingpage')
}
  const [users, setUsers] = useState([{
    userImage:`https://via.placeholder.com/80x80?text=${'HP'}`,
    name: 'Hari',
    email: 'johndoe@example.com',
    role: 'Admin',
    status: 'Active'
  }]);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const [showSettingOptions, setShowSettingOptions] = useState(false);


  // const [permanentUser, setPermanentUser] = useState({
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   role: 'Admin',
  //   status: 'Active'
  // });

// UserFormuserconfig.js (Partial)

useEffect(() => {
  fetchUsers();
}, []);

const fetchUsers = async () => {
  try {
    const response = await axios.post('https://backend-new-419p.onrender.com/getuserconfig',{email:"aswath1@gmail.com"});
    setUsers(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
const handleUserSubmit = async (formData) => {
  console.log("backend responesessssssss")
  try {
    
    
    console.log(formData,"formadaatttssssssssss")

    const response = await axios.post('https://backend-new-419p.onrender.com/userconfig', formData);
    console.log(response,"from backendsssssssss")

    if (response.status === 200) {
      setUsers(prevUsers => [...prevUsers, response.data]);
      setShowForm(false);
    } else {
      throw new Error('Unexpected response status: ' + response.status);
    }
  } catch (error) {
    console.error('Error adding user:', error);
    alert('Failed to add user. Please try again.\n' + (error.response ? error.response.data : error.message));
  }
};

  // const handleDeletePermanentUser = () => {
    
  //   setPermanentUser(null); // Set permanentUser to null or perform any other delete logic
  // };

  const handleDeleteUser = async (index) => {
    try {
      const email = users[index].email; // Get the user's email
      const response = await axios.delete(`http://127.0.0.1:8080/userconfig/${email}`); // Call the delete API
  
      if (response.status === 200 || response.status === 204) { // Check for successful response
        // Filter out the deleted user
        const updatedUsers = users.filter((user, i) => i !== index);
        setUsers(updatedUsers); // Update the state
      } else {
        throw new Error('Unexpected response status: ' + response.status);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Cant delete this user Hari as it is const data.\n' + (error.response ? error.response.data : error.message));
    }
  };
  

  // const handleTogglePermanentUserStatus = () => {
  //   setPermanentUser((prevPermanentUser) => ({
  //     ...prevPermanentUser,
  //     status: prevPermanentUser.status === 'Inactive' ? 'Active' : 'Inactive'
  //   }));
  // };

  const handleToggleUserStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = {
      ...updatedUsers[index],
      status: updatedUsers[index].status === 'Inactive' ? 'Active' : 'Inactive'
    };
    setUsers(updatedUsers);
  };


  const filteredUsers = users.filter((user) => {
    const { name = '', email = '', role = '' } = user;
    const query = searchQuery.toLowerCase();
    return name.toLowerCase().includes(query) || email.toLowerCase().includes(query) || role.toLowerCase().includes(query);
  });
  

  const handleInputFocus = () => {
    // Hide the search icon when input field is focused
    setShowSearchIcon(false);
  };

  const handleCancel = () => {
    // Add logic to close the modal or reset form state
    setShowForm(false); // Example: Hide the form modal
  };
  

  const handleNotDisplay = () => {
    setShowSettingOptions(false);
  };

  const handleShowOptions = () => {
    setShowSettingOptions(true);
  };
  
  const hasMoreUsers = users.length > 3; // Check if there are more users beyond the visible ones
  
  return (
    <div>
    {auth.isAuthenticated ? (

    <div className="user-configuration-1st-time-us-uc">
    
      <div className="user-configuration-1st-time-us-child-uc" />
      <img
        className="white-variation-11-uc"
        alt=""
        src={whitevariationSvg}
        onClick={handlelogo}
      />
      <img className="user-5-11-uc" alt="" src={UserIconSvg} />
      <b className="beyos1-uc">BeyOS</b>
      <img className="settings-1-icon1-uc" alt="" src={SettingsIconSvg} onClick={handleShowOptions}/>
      {/* <div className="user-configuration-1st-time-us-item" /> */}
      
      <div>
        <input className="user-configuration-1st-time-us-inner-uc"
            type="text"
            placeholder="        Search  User"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleInputFocus} 
        />
      </div>
      {showSearchIcon && <img className="search-icon1-uc" alt="" src={SearchIconSvg} />}
      <div className="user-configuration-1st-time-us-child1-uc" onClick={handleBoundaryPage}/>
      <img className="add-1-icon1-uc" alt="" src={NextIconSvg} />
      <b className="next1-uc">NEXT</b>
      <div className="user-configuration-1st-time-us-child2-uc" />
      <b className="add-user1-uc" onClick={() => setShowForm(true)}>ADD USER</b>
      <img className="add-5-icon1-uc" alt="" src={addUserIconSvg} />
      {/*  */}
      <div className="user-details-container-wrapper-uc">
      <div className={`user-details-container-uc ${hasMoreUsers ? 'scrollable-container-uc' : ''}`}>
      <table className="user-details-table-uc">
        <thead>
          <tr>
            {/* <th><div className="name1">NAME</div></th>
            <th><div className="email1">EMAIL</div></th>
            <th><div className="role1">ROLE</div></th>
            <th><div className="active4">STATUS</div></th> */}
            <th></th>
            <th></th>
            <th><div className='name-uc'>NAME</div></th>
            <th><div className='email-uc'>EMAIL</div></th>
            <th><div className='role-uc'>ROLE</div></th>
            <th><div className='status-uc'>STATUS</div></th>
          </tr>
        </thead>
        {/* {permanentUser && (
        <tbody>
          <tr>
            <td> <p className="hari-prasad1">{permanentUser.name}</p></td>
            <td><a href={`mailto:${permanentUser.email}`} className="email-link"><p className="haribeyondsustainabilityin1">{permanentUser.email}</p></a></td>
            <td> <p className="admin1">{permanentUser.role}</p></td>
            <td> <p className="permanent-user-status">
            </p></td>
            <div className="user-configuration-1st-time-us-child3" /> 
      <div className="user-configuration-1st-time-us-child5" />
      <div className="user-configuration-1st-time-us-child6">
          <div className="user-status">
            {permanentUser.status === 'Inactive' ? (
              <div className="status-inactive">
                <img src={RedBulletSvg} alt="Inactive" /> Inactive
              </div>
            ) : (
              <div className="status-active">
                <img src={GreenBulletSvg} alt="Active" /> Active
              </div>
            )}
          </div>
        </div>
        <img className="bin-2-1-icon1" alt="" src={binSvg} onClick={handleDeletePermanentUser} />
        <div className="on-button-1-icon1">
          <ToggleMenu userData={permanentUser} onToggle={handleTogglePermanentUserStatus}/>
        </div>
        <div>
          <input className="user-configuration-1st-time-us-child4" type="checkbox" id="permanentUserCheckbox" />
          <label htmlFor="permanentUserCheckbox" className="rectangle-checkbox"></label>
        </div>
        <div>
          <img className="user-configuration-1st-time-us-child7" alt="" src={UsersmSvg} />
        </div>
          </tr>
        </tbody>
        )} */}
        <tbody> 
          {/* Content for each user in the users array */}
          {filteredUsers.map((userData, index) => (
            <tr key={index} className='user-details-row-uc'>
            <td><div>
               <input className="checkbox-uc" type="checkbox" id="permanentUserCheckbox" />
               <label htmlFor="permanentUserCheckbox"></label>
            </div></td>


            <td><div>
                <img className="userImage-uc" alt="" src={userData.userImage} />
                </div>
            </td>

              <td><div className='user_name-uc'>{userData.name}</div></td>
              <td><div className='user_mail-uc'><a href={`mailto:${userData.email}`} className="email-link">{userData.email}</a></div></td>
              <td><div className='user_role-uc'>{userData.role}</div></td>
              {/* <td></td> */}
              <td><div className="user_status-uc">
              <div className="user_status_role-uc">
                {userData.status==="Inactive" ? (
                    <div className="status-inactive-uc ">
                    <img src={RedBulletSvg} alt="Inactive" /> Inactive
                  </div>) : (
                  <div className="status-active-uc ">
                    <img src={GreenBulletSvg} alt="active" /> Active
                  </div>
                )}
              </div>
        </div></td>
        
        <td><div className="toggleMenu-uc">
          <ToggleMenu userData={userData} onToggle={() => handleToggleUserStatus(index)}/>
        </div></td>
        <td><div className='bin-uc'><img className="" alt="" src={binSvg} onClick={() => handleDeleteUser(index)} /></div></td>
        </tr>
          ))}
        </tbody>
        
      </table>
      {hasMoreUsers && (
          <div className="scroll-wrapper-uc">
            <div className="scroll-bar-uc"></div>
          </div>
        )}
      </div>

      </div>
      {/*  */}
      {showSettingOptions && (
        <SettingOption
          handleNotDisplay={handleNotDisplay}
        />
      )}
      
      {showForm && <UserDetailsDisplay onSubmit={handleUserSubmit} onCancel={handleCancel} />}
    </div>
    ) : (
      <p>You are not logged in.</p>
    )}
  </div>
  );
};

export default UserFormuserconfig;
