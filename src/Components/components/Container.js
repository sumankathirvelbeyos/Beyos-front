import { useCallback,useContext } from "react";
import styles from "./Container.module.css";
import {PropTypes} from 'prop-types';
import { AuthContext } from '../../contextProvider/AuthContext';
const Container = ({ className = "" }) => {
    // eslint-disable-next-line
    const { auth, logout } = useContext(AuthContext);
  const onLoginTextClick = useCallback(() => {
    // Please sync "Login Page -V2" to the project
  }, []);

  return (
    <div>
    {auth.isAuthenticated ? (
    <form className={[styles.container, className].join(" ")}>
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
      <div className={styles.passwordInputContainer}>
        <div className={styles.emailInputContainer}>
          <div className={styles.wrapperFrame2}>
            <input
              className={styles.wrapperFrame2Child}
              placeholder="Auto-populated Email"
              type="text"
            />
            <img
              className={styles.arroba21Icon}
              alt=""
              src="/arroba2-1@2x.png"
            />
            <img
              className={styles.arroba21Icon1}
              alt=""
              src="/arroba2-1@2x.png"
            />
          </div>
        </div>
        <input
          className={styles.passwordInputLabels}
          placeholder="Enter New Password"
          type="text"
        />
        <input
          className={styles.passwordInputLabels1}
          placeholder="Confirm Password"
          type="text"
        />
        <div className={styles.loginContainer}>
          <a className={styles.login} onClick={onLoginTextClick}>
            Login
          </a>
        </div>
      </div>
      <button className={styles.resetButtonContainer}>
        <div className={styles.resetButtonContainerChild} />
        <b className={styles.resetPassword}>Reset Password</b>
      </button>
    </form>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
