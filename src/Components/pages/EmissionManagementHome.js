import {useContext } from 'react';
import HomeHeader from "../components/HomeHeader";
import EmissionsVisualization from "../components/EmissionsVisualization";
import styles from "./EmissionManagementHome.module.css";
import { AuthContext } from '../contextProvider/AuthContext';

const EmissionManagementHome = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  return (
    <div>
    {auth.isAuthenticated ? (
    <div className={styles.emissionManagementHome}>
      <img
        className={styles.leftArrowInCircularButtonIcon}
        loading="lazy"
        alt=""
        src="/leftarrowincircularbuttonblacksymbol-1@2x.png"
      />
      <HomeHeader />
      <main className={styles.userBar}>
        <div className={styles.userInfo}>
          <img
            className={styles.user51}
            loading="lazy"
            alt=""
            src="/user-5-1@2x.png"
          />
          <h1 className={styles.emissionManagement}>EMISSION MANAGEMENT</h1>
          <EmissionsVisualization />
        </div>
      </main>
    </div>
  ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default EmissionManagementHome;
