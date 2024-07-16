import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ImageUploader from "./CompanyInfo_Subcomponents/ImageUploader";
import SettingOption from './CompanyInfo_Subcomponents/SettingOption';
import { AuthContext } from '../../contextProvider/AuthContext';
import { whiteVariationSvg, userLgSvg, settingsSvg, editIconSvg, addIconSvg } from '../../../assets_company_details';


const CompanyInfo = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleNextPage = () => {
    navigate('/user_form');
};

  // const [organizationName, setOrganizationName] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [displayUploader, setDisplayUploader] = useState(false);
  const [display, setDisplay] = useState(false);

    const [companyInfo, setCompanyInfo] = useState({
        organizationName: '',
        description: '',
        address: '',
        sector: '',
        currency: '',
        natureOfBusiness: '',
        website: '',
        numberOfEmployees: ''
    });

    const handleEditIconClick = () => {
        setDisplayUploader(true);
      };
    
      const handleUploaderClose = () => {
        setDisplayUploader(false);
      };
    
      const handleImageUpload = (uploadedImage) => {
        setUserImage(uploadedImage); // Set the uploaded image as the user icon image
        setDisplayUploader(false); // Close the image uploader
      };
    
      const handleDeleteProfilePicture = () => {
        setUserImage(null); // Delete the profile picture
      };
    
      const handleDarkMode = () => {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        document.querySelector('.company-information-page').style.backgroundColor =
          '#000';
        setDisplay(false); // Close the setting options overlay
      };
    
      const handleLightMode = () => {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
        document.querySelector('.company-information-page').style.backgroundColor =
          '#fff';
        setDisplay(false); // Close the setting options overlay
      };
    
      const handleNotDisplay = () => {
        setDisplay(false); // Close the setting options overlay
      };
    
      const handleDisplay = () => {
        setDisplay(true); // Display the setting options overlay
      };
    
      const handleOrganizationNameChange = (event) => {
        const name = event.target.value;
        setCompanyInfo(prevState => ({
            ...prevState,
            organizationName: name
        }));

        if (name.length > 0) {
            // Update user icon image based on the first character of organization name
            const firstChar = name.charAt(0).toUpperCase();
            const imageSrc = `https://via.placeholder.com/80x80?text=${firstChar}`;
            setUserImage(imageSrc);
        } else {
            setUserImage(userLgSvg); // Default image if no name entered
        }
    };

    

    useEffect(() => {
        fetchInitialValues();
    }, []);

    const fetchInitialValues = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8080/profiledetails');
            const initialCompanyInfo = response.data;
            setCompanyInfo(initialCompanyInfo);
        } catch (error) {
            console.error('Error fetching initial values:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/companyInfo', companyInfo);
            // Optionally, you can add a success message or redirection here
            console.log('Company information saved successfully');
        } catch (error) {
            console.error('Error saving company information:', error);
        }
    };

    return (
      <div>
    {auth.isAuthenticated ? (
        <div className="company-information-page-ci">
        <div className="company-information-page-child-ci" />
        <img
          className="white-variation-1-ci"
          alt=""
          src={whiteVariationSvg}
        />
        <img
          className="user-5-1-ci"
          alt=""
          src={userImage ? userImage : userLgSvg}
        />
        <img className="user-5-2-ci" alt="" src={userImage ? userImage : userLgSvg} />
        <b className="beyos-ci">BeyOS</b>
        <img className="settings-1-icon-ci" alt="" src={settingsSvg} onClick={handleDisplay} />
  
        <div className="organization-name-ci">Organization Name</div>
        <div className="registered-address-ci">{`Registered Address* `}</div>
        <div className="no-of-employees-ci">No. of Employees*</div>
        <div className="website-ci">Website</div>
  
        <div className="nature-of-business-ci">Nature of Business</div>
  
        <div className="sector-ci">Sector</div>
  
        <div className="currency-in-which-ci">
          Currency in which financial disclosures are made ?*
        </div>
        {displayUploader && (
          <ImageUploader
            handleImageUpload={handleImageUpload}
            handleUploaderClose={handleUploaderClose}
            handleDeleteProfilePicture={handleDeleteProfilePicture}
          />
        )}
        {!displayUploader && (
          <img className="edit-1-icon-ci" alt="" src={editIconSvg} onClick={handleEditIconClick} />
        )}
  
        <div className="general-description-of-ci">
          General Description of the Organization*
        </div>
        <div className="company-information-page-child6-ci" onClick={handleNextPage}/>
        <img className="add-1-icon-ci" alt="" src={addIconSvg} />
        <b className="next-ci" onClick={handleSubmit}>
          NEXT
        </b>
  
        <form onSubmit={handleSubmit}>
        <div className="enter-name-of-ci form-group-ci">
    <input
        className="company-information-page-inner-ci form-control-ci"
        type="text"
        placeholder="Enter Name of the Organization"
        name="organizationName"
        value={companyInfo.organizationName}
        onChange={handleOrganizationNameChange}
    />
</div>
<div className="form-group-ci">
    <textarea
        className="description-ci form-control-ci"
        type="text"
        placeholder="Description..."
        name="description"
        value={companyInfo.description}
        onChange={handleChange}
    />
</div>
<div className="form-group-ci">
    <textarea
        className="rectangle-div-ci form-control-ci"
        type="text"
        placeholder="Address*"
        name="address"
        value={companyInfo.address}
        onChange={handleChange}
    />
</div>
<div>
    <input
        className="company-information-page-child4-ci"
        type="text"
        placeholder="Select the Sector Your Business Belongs to"
        name="sector"
        value={companyInfo.sector}
        onChange={handleChange}
    />
</div>
<div>
    <input
        className="company-information-page-child2-ci"
        type="text"
        placeholder="Website"
        name="website"
        value={companyInfo.website}
        onChange={handleChange}
    />
</div>
<div>
    <input
        className="company-information-page-child3-ci"
        type="text"
        placeholder="Select the Nature of your Business"
        name="natureOfBusiness"
        value={companyInfo.natureOfBusiness}
        onChange={handleChange}
    />
</div>
<div>
    <input
        className="company-information-page-child5-ci"
        type="text"
        placeholder="Currency"
        name="currency"
        value={companyInfo.currency}
        onChange={handleChange}
    />
</div>
<div>
    <input
        className="company-information-page-child1-ci"
        type="text"
        placeholder="Enter no.of employees"
        name="numberOfEmployees"
        value={companyInfo.numberOfEmployees}
        onChange={handleChange}
    />
</div>

        </form>
        {display && <SettingOption handleDarkMode={handleDarkMode} handleLightMode={handleLightMode} handleNotDisplay={handleNotDisplay} />}
        </div>
          ) : (
            <p>You are not logged in.</p>
          )}
        </div>
    );
};

export default CompanyInfo;


