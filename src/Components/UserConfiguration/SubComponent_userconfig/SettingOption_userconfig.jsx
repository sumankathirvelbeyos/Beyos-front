import React from 'react';
//import { useHistory } from 'react-router-dom';




const SettingOption = ({ handleDarkMode, handleLightMode, handleNotDisplay }) => {
  return (
    <div className="setting-options-overlay-uc">
      <div className="setting-options-uc">
    
        <button className="options-list-uc">Home Page</button><br/>  {/* use onClick={goToHomePage} */}
        
        <button className="options-list-uc"> Previous Page</button><br/> {/* use onClick={goBack} */}
        
        <button className="options-list-uc" onClick={handleNotDisplay}>Cancel</button><br/>
        
      </div>
    </div>
  );
};

export default SettingOption;
