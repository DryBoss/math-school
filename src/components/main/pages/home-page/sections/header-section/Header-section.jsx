import styles from "./Header-section.module.css";

import searchIcon from "./../../../../../../assets/ui-icons/search.svg";

function HeaderSection() {
  return (
    <div className={styles.header}>
      <h1>
        Deepen Your
        <br />
        Math Knowledge
      </h1>
      <h3>An Open Source Platform for Learning Mathematics</h3>
      <div className={styles.searchBar}>
        <input type="text" className={styles.searchInput} />
        <img src={searchIcon} alt="search" className={styles.searchIcon} />
      </div>
    </div>
  );
}

export default HeaderSection;
