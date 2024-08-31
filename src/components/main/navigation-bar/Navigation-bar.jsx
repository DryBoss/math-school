import { useState } from "react";

import mathSchoolLogo from "./../../../assets/math-school-logo.svg";
import searchIcon from "./../../../assets/ui-icons/search.svg";
import changeLanguageIcon from "./../../../assets/ui-icons/change-language.svg";
import changeThemeIcon from "./../../../assets/ui-icons/change-theme.svg";
import userProfile from "./../../../assets/ui-icons/user-profile.svg";

import styles from "./Navigation-bar.module.css";

function NavigationBar() {
  const menuItems = ["Home", "Learn", "Certification"];

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
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.menuItems} ${
              activeScreen == item ? styles.selected : ""
            }`}
            onClick={() => setActiveScreen(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {/*search*/}
      <div className={styles.searchBar}>
        <input type="text" />
        <img src={searchIcon} alt="search" className={styles.searchIcon} />
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
