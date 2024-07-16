import { useCallback ,useContext} from "react";
import { AuthContext } from '../../Components/contextProvider/AuthContext';
import PropTypes from "prop-types";
import styles from "./HomeHeader.module.css";

const HomeHeader = ({ className = "" }) => {
         // eslint-disable-next-line
         const { auth, logout } = useContext(AuthContext);
  const onDataManagement3IconClick = useCallback(() => {
    // Please sync "Emission Measurement - Home Page" to the project
  }, []);

  const onDataManagement2IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 20" to the project
  }, []);

  const onDataManagement1IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 17" to the project
  }, []);

  const onDataManagement4IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 21" to the project
  }, []);

  return (
    <div>
    {auth.isAuthenticated ? (
    <div className={[styles.homeHeader, className].join(" ")}>
      <div className={styles.homeHeaderChild} />
      <img
        className={styles.homeHeaderItem}
        loading="lazy"
        alt=""
        src="/arrow-1.svg"
      />
      <div className={styles.homeOptions}>
        <img
          className={styles.whiteVariation1}
          loading="lazy"
          alt=""
          src="/white-variation-1@2x.png"
        />
        <div className={styles.dataManagement3Wrapper}>
          <img
            className={styles.dataManagement3Icon}
            loading="lazy"
            alt=""
            src="/datamanagement-3@2x.png"
            onClick={onDataManagement3IconClick}
          />
        </div>
        <div className={styles.managementHierarchyWrapper}>
          <div className={styles.managementHierarchy}>
            <div className={styles.firstLevel}>
              <img
                className={styles.dataManagement2Icon}
                loading="lazy"
                alt=""
                src="/datamanagement-2@2x.png"
                onClick={onDataManagement2IconClick}
              />
            </div>
            <div className={styles.secondLevel}>
              <div className={styles.thirdLevel}>
                <img
                  className={styles.dataManagement1Icon}
                  alt=""
                  src="/datamanagement-1@2x.png"
                  onClick={onDataManagement1IconClick}
                />
              </div>
              <div className={styles.co2}>CO2</div>
              <div className={styles.fourthLevel}>
                <img
                  className={styles.dataManagement4Icon}
                  loading="lazy"
                  alt=""
                  src="/datamanagement-4@2x.png"
                  onClick={onDataManagement4IconClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.settings1Icon}
        loading="lazy"
        alt=""
        src="/settings-1@2x.png"
      />
    </div>
  ) : (
      <p>You are not logged in.</p>
    )}
  </div>
  );
};

HomeHeader.propTypes = {
  className: PropTypes.string,
};

export default HomeHeader;
