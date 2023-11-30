import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/common/header";
import Footer from "./component/common/footer";
import HomePage from "./component/feature/homepage/container/homePage.container";
import Dashboard from "./component/feature/dashboard/container/dashboard.container";
import DealerAgreement from "./component/feature/dealerSignup/components/dealerAgreement";
import DealerSignup from "./component/feature/dealerSignup/container/dealerSignup.container";
import StartSelling from "./component/feature/dealerSignup/container/startSelling.container";
import DealerCustomization from "./component/feature/dealerSignup/components/dealerCustomization";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [inDashboard, setInDashboard] = useState(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateScreenWidth);

    //to check if route is of dealer dashboard
    const path = window.location.pathname;
    if (path.includes("dealer-dashboard")) {
      setInDashboard(true);
    }

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 768) {
      setIsOpen(true);
    }
  }, [screenWidth]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="App">
      <Router>
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="flex justify-center">
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/dealer-signup" element={<DealerSignup />} />
            <Route
              exact
              path="/dealer-customization"
              element={<DealerCustomization />}
            />
            <Route
              exact
              path="/dealer-agreement"
              element={<DealerAgreement />}
            />
            <Route
              exact
              path="/dealer-logo-and-location"
              element={<StartSelling />}
            />
            <Route
              exact
              path="/dealer-dashboard"
              element={<Dashboard isOpen={isOpen} />}
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </Router>

      {/* Overlay */}
      {console.log("inDashboard",inDashboard)}
      {isOpen && screenWidth <= 768 && inDashboard && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Toggle Button */}
      {screenWidth <= 768 && inDashboard && (<button
        className={`md:hidden fixed top-4 left-4 z-50 text-red-400 ${
          isOpen ? "hidden" : ""
        }`}
        onClick={toggleSidebar}
      >
        Open
      </button>)}
    </div>
  );
}

export default App;
