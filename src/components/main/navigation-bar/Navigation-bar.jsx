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
        <input type="text" className={styles.searchInput} />
        <img src={searchIcon} alt="search" className={styles.searchIcon} />
      </div>
      {/*extras*/}
      <div className={styles.extras}>
        <img
          src={changeLanguageIcon}
          alt="language"
          className="change-language"
        />
        <img src={changeThemeIcon} alt="theme" className="change-theme" />
      </div>
      {/*user*/}
      <div className={styles.user}>
        <img src={userProfile} alt="user" className="user" />
      </div>
    </div>
  );
}

export default NavigationBar;
