import mathSchoolLogo from "./../../../assets/math-school-logo.svg";
import changeLanguageIcon from "./../../../assets/ui-icons/change-language.svg";
import changeThemeIcon from "./../../../assets/ui-icons/change-theme.svg";
import styles from "./Navigation-bar.module.css";

function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <img src={mathSchoolLogo} alt="math school logo" className="ms-logo" />
      <ul className="menu">
        <li className="menu-items">Home</li>
        <li className="menu-items">Learn</li>
      </ul>
      <div className="search-bar">
        <input type="text" />
        <img src="" alt="search" className="search" />
      </div>
      <img
        src={changeLanguageIcon}
        alt="language"
        className="change-language"
      />
      <img src={changeThemeIcon} alt="theme" className="change-theme" />
      <div className="account"></div>
    </div>
  );
}

export default NavigationBar;
