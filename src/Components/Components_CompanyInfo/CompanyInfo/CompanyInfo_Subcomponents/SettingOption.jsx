import React from 'react';
// import { useHistory } from 'react-router-dom';


const SettingOption = ({ handleDarkMode, handleLightMode, handleNotDisplay }) => {
  // const history = useHistory();

  // const goToHomePage = () => {
  //   history.push('/'); // Navigate to the home page
  // };

  // const goBack = () => {
  //   history.goBack(); // Navigate to the previous page
  // };

  return (
    <div className="setting-options-overlay-ci">
      <div className="setting-options-ci">
       <button className="options-list-ci" >Home Page</button><br/>  {/* onClick={goToHomePage} */}
        <button className="options-list-ci" >Previous Page</button><br/> {/* onClick={goBack} */}
        <button className="options-list-ci" onClick={handleDarkMode}>Dark Mode</button><br/>
        <button className="options-list-ci" onClick={handleLightMode}>Light Mode</button><br/>
        <button className="options-list-ci" onClick={handleNotDisplay}>Cancel</button><br/>
      </div>
    </div>
  );
};

export default SettingOption;
