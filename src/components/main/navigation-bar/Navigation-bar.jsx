import { useState } from "react";
import MenuItems from "./Menu-items/Menu-items";

import mathSchoolLogo from "./../../../assets/math-school-logo.svg";
import searchIcon from "./../../../assets/ui-icons/search.svg";
import changeLanguageIcon from "./../../../assets/ui-icons/change-language.svg";
import changeThemeIcon from "./../../../assets/ui-icons/change-theme.svg";
import userProfile from "./../../../assets/ui-icons/user-profile.svg";

import styles from "./Navigation-bar.module.css";

function NavigationBar() {
  const menuItems = ["Home", "Learn"];

  const [activeScreen, setActiveScreen] = useState("Home");

  return (
    <div className={styles.navigationBar}>
      {/*logo*/}
      <img
        src={mathSchoolLogo}
        alt="math school logo"
        className={styles.logo}
      />
      {/*menu*/}
      <div className={styles.menuSelection}>
        <p>Home</p>
        <img src="" alt="" />
      </div>
      <div className={styles.menu}>
        <MenuItems />
      </div>
      {/*search*/}
      <div className="search-bar">
        <input type="text" />
        <img src={searchIcon} alt="search" className="search" />
      </div>
      {/*extras*/}
      <img
        src={changeLanguageIcon}
        alt="language"
        className="change-language"
      />
      <img src={changeThemeIcon} alt="theme" className="change-theme" />
      {/*user*/}
      <div className="account">
        <img src={userProfile} alt="user" className="user" />
      </div>
    </div>
  );
}

export default NavigationBar;
