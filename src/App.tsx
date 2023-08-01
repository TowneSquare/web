import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Transparency from "./components/Transparency";

function App() {
  const [isTransparencyVisible, setIsTransparencyVisible] = useState(false);
  const [isJoinAppear, setIsJoinAppear] = useState(false);

  const handleClick = () => {
    setIsTransparencyVisible(!isTransparencyVisible);
    setIsJoinAppear(true);
  };

  return (
    <div>
      <Header clickWaitlist={handleClick} />
      <Transparency
        isJoinAppear={isJoinAppear}
        isVisible={isTransparencyVisible}
        onClose={handleClick}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
