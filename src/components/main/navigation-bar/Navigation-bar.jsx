import mathSchoolLogo from "./../../../assets/math-school-logo.svg";
import searchIcon from "./../../../assets/ui-icons/search.svg";
import changeLanguageIcon from "./../../../assets/ui-icons/change-language.svg";
import changeThemeIcon from "./../../../assets/ui-icons/change-theme.svg";
import userProfile from "./../../../assets/ui-icons/user-profile.svg";
import styles from "./Navigation-bar.module.css";

function NavigationBar() {
  const menuItems = ["Home", "Learn"];

  return (
    <div className={styles.navigationBar}>
      <img src={mathSchoolLogo} alt="math school logo" className="ms-logo" />
      <ul className="menu-pc"></ul>
      <select name="menu-mobile" className="menu-mobile"></select>
      <div className="search-bar">
        <input type="text" />
        <img src={searchIcon} alt="search" className="search" />
      </div>
      <div className="math-lab"></div>
      <img
        src={changeLanguageIcon}
        alt="language"
        className="change-language"
      />
      <img src={changeThemeIcon} alt="theme" className="change-theme" />
      <div className="account">
        <img src={userProfile} alt="user" className="user" />
      </div>
    </div>
  );
}

export default NavigationBar;
