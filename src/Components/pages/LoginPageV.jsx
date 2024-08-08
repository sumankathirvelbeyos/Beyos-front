import styles from "./LoginPageV.module.css";
import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext';
import firefly from "./firefly.png";
import white from "./white.png"
const LoginPageV = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [backenddata, setBackenddata] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    const jsonObject = {
      email: email,
      password: password
    };

    fetch('https://backend-new-419p.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObject),
    })
      .then(response => response.json())
      .then(data => {
        setBackenddata(data);
        console.log('Success:', data);

        // Perform authentication
        login({ name: email });

        // Check if the login is successful
        if (data.length > 0) {
          console.log("Data length condition met");
          if (email === data[0]?.email && password === data[0]?.password) {
            console.log("Credentials matched");
            navigate('/landingpage');
          } else {
            alert("Invalid email or password");
          }
        } else {
          alert("Something went wrong :-(");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Something went wrong :-(");
      });
  };

  return (
    <div className={styles.loginPageV2}>
      <img
        className={styles.fireflyGenerateADoodleArt}
        alt=""
        src={firefly}
      />
      <form className={styles.rectangleParent} onSubmit={handleSubmit}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.passwordInput}>
          <img className="white-var" alt=" " src={white} style={{ width: '270px', height: '70px', marginLeft: '200px', marginTop: '20px' }} />
          <div className="wrapper-login">
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
