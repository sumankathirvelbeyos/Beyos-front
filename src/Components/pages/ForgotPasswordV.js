import { useCallback,useContext } from "react";
import styles from "./ForgotPasswordV.module.css";
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';

const ForgotPasswordV = ({ className = "" }) => {
      // eslint-disable-next-line
      const { auth, logout } = useContext(AuthContext);
  const onLoginTextClick = useCallback(() => {
  
  }, []);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');




  const navigate = useNavigate();
  const handleLogin = () => {
  navigate('/');
};
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [email,confirmPassword]
    console.log('Form data array: ', formData)
    // console.log('Email:', email);
    // console.log('New Password:', newPassword);
    // console.log('Confirm Password:', confirmPassword);
    const jsonObject={
      Email:email,
      Password:newPassword
    }
    console.log(JSON.stringify(jsonObject,null,2))
  };
 


  return (
    <div>
    {auth.isAuthenticated ? (
    <div className={styles.forgotPasswordV2}>
      <main className={styles.fireflyGenerateADoodleArtParent}>
        <img
          className={styles.fireflyGenerateADoodleArt}
          alt=""
          src="/firefly-generate-a-doodle-art-for-corporate-sustainability-and-esg-reporting-1@2x.png"
        />
        <form className={[styles.container, className].join(" ")}
          onSubmit={handleSubmit}
        >
      <div className={styles.containerChild} />
      <div className={styles.variationContainer}>
        <div className={styles.whiteVariationContainer}>
          <img
            className={styles.whiteVariation2}
            loading="lazy"
            alt=""
            src="/white-variation-2@2x.png"
          />
          <div className={styles.passwordResetContainer}>
            <b className={styles.passwordReset}>Password Reset</b>
          </div>
        </div>
      </div>
      <div className={styles.black}></div>
      <div className={styles.passwordInputContainer}>
        <div className={styles.emailInputContainer}>
          <div className={styles.wrapperFrame2}>
            <input
              className={styles.wrapperFrame2Child}
              placeholder="Auto-populated Email"
              type="email"
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* <img
              className={styles.arroba21Icon1}
              alt=""
              src="/arroba2-1@2x.png"
            /> */}
          </div>
        </div>
        <input
          className={styles.passwordInputLabels}
          placeholder="Enter New Password"
          type="text"
          id="newPassword"
          name='newPassword'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        {/* <img 
        className={styles.toggles} alt="" src="/visible 1.png">
          
        </img> */}


        <input
          className={styles.passwordInputLabels1}
          placeholder="Confirm Password"
          type="text"
          id='confirmPassword'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          required
        />

                <img 
        className="toggles-1" alt="" src="/visible 2.png" />
          
        
        <div className={styles.loginContainer}>
          <a className={styles.login} onClick={onLoginTextClick} href="#login">
            Login
          </a>
        </div>
      </div>
      <button className={styles.resetButtonContainer}
        type='submit'
        onClick={handleLogin}
      >
        <div className={styles.resetButtonContainerChild} />
        <b className={styles.resetPassword}>Reset Password</b>
      </button>
    </form>
      </main>
    </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default ForgotPasswordV;
