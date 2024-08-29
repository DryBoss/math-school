function NavigationBar() {
  return (
    <div className="navigation-bar">
      <img src="" alt="math school logo" className="ms-logo" />
      <ul className="menu">
        <li className="menu-items">Home</li>
        <li className="menu-items">Learn</li>
      </ul>
      <div className="search-bar">
        <input type="text" />
        <img src="" alt="search" className="search" />
      </div>
      <div className="language">
        <img src="" alt="" className="icon" />
        <p className="title"></p>
      </div>
      <img src="" alt="" className="day-night" />
      <div className="account"></div>
    </div>
  );
}

export default NavigationBar;
