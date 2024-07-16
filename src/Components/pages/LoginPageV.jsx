import styles from "./LoginPageV.module.css";
import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';

const LoginPageV = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    const jsonObject = {
      Email: email,
      Password: password
    };
    console.log(JSON.stringify(jsonObject, null, 2));

    // Perform authentication
    login({ name: email });

    // Navigate to landing page
    navigate('/landingpage');
  };

  return (
    <div className={styles.loginPageV2}>
      <img
        className={styles.fireflyGenerateADoodleArt}
        alt=""
        src="./firefly.jpg"
      />
      <form className={styles.rectangleParent} onSubmit={handleSubmit}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.passwordInput}>
            <div className={styles.loginWrapper}>
              <h3 className={styles.login}>Login</h3>
            </div>
            <div className={styles.emailPasswordContainer}>
              <div className={styles.emailPassword}>
                <div className={styles.emailPasswordChild} />
                <input
                  className={styles.emailSymbol}
                  name="email"
                  placeholder="Enter Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.emailPassword1}>
                <div className={styles.emailPasswordItem} />
                <input
                  className={styles.emailPasswordInner}
                  name="password"
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.passwordLabel} onClick={() => navigate('/forgot')}>
              <div className={styles.forgotPassword}>
                Forgot password ?
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <button type="submit" className={styles.frameItem}>
            <b className={styles.login1}>Login</b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPageV;
