import { useState } from "react";

import mathSchoolLogo from "./../../../assets/math-school-logo.svg";
import downArrowIcon from "./../../../assets/ui-icons/down-arrow.svg";
import downArrowIconBlack from "./../../../assets/ui-icons/down-arrow-black.svg";
import searchIcon from "./../../../assets/ui-icons/search.svg";
import changeLanguageIcon from "./../../../assets/ui-icons/change-language.svg";
import changeThemeIcon from "./../../../assets/ui-icons/change-theme.svg";
import userProfile from "./../../../assets/ui-icons/user-profile.svg";

import styles from "./Navigation-bar.module.css";

function NavigationBar() {
  const [isMenuSelectionVisible, setIsMenuSelectionVisible] = useState(false);
  const menuItems = ["Home", "Learn", "Certification"];
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);
  const searchList = ["Calculus", "Linear Algebra", "Statistics"];
  const [isUserOptionVisible, setIsUserOptionVisible] = useState(false);

  const [activeScreen, setActiveScreen] = useState("Home");

  function toggleIsMenuSelectionVisible() {
    setIsMenuSelectionVisible(!isMenuSelectionVisible);
  }
  function toggleIsUserOptionVisible() {
    setIsUserOptionVisible(!isUserOptionVisible);
  }

  return (
    <div className={styles.navigationBar}>
      {/*logo*/}
      <div className={styles.logo}>
        <img src={mathSchoolLogo} alt="math school logo" />
        <h1>Math School</h1>
      </div>
      {/*menu*/}
      <div>
        <div
          className={styles.menuSelection}
          onClick={() => toggleIsMenuSelectionVisible()}
        >
          <p>Home</p>
          <img src={downArrowIcon} className={styles.arrow} />
        </div>
        <div
          className={`${styles.menu} ${
            isMenuSelectionVisible ? styles.visible : ""
          }`}
        >
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
      </div>
      {/*search*/}
      <div>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} />
          <img src={searchIcon} alt="search" className={styles.searchIcon} />
        </div>
        <div
          className={`${styles.searchList} ${
            isSearchListVisible ? styles.visible : ""
          }`}
        >
          {searchList.map((item, index) => (
            <div key={index} className={styles.searchListItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
      {/*theme*/}
      <img src={changeThemeIcon} alt="theme" className="change-theme" />
      {/*user*/}
      <div>
        <div
          className={styles.user}
          onClick={() => toggleIsUserOptionVisible()}
        >
          <img src={userProfile} alt="user" className="user" />
          <img src={downArrowIconBlack} className={styles.arrow} />
        </div>
        {isUserOptionVisible ? (
          <div className={styles.userOption}>
            <div>Profile</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
