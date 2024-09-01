import { useState } from "react";

import NavigationBar from "./navigation-bar/Navigation-bar";
import HomePage from "./pages/home-page/Home-page";
import LearnPage from "./pages/learn-page/Learn-page";
import CertificationPage from "./pages/certification-page/Certification-page";

function Main() {
  const [activeScreen, setActiveScreen] = useState("Home");

  return (
    <>
      <NavigationBar
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />
      {activeScreen == "Home" ? (
        <HomePage />
      ) : activeScreen == "Learn" ? (
        <LearnPage />
      ) : (
        <CertificationPage />
      )}
    </>
  );
}

export default Main;
