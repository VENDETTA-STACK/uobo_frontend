import React from "react";
import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./component/common/header";
import Footer from "./component/common/footer";
import HomePage from "./component/feature/homepage/container/homePage.container";
import Dashboard from "./component/feature/dashboard/container/dashboard.container";
import DealerAgreement from "./component/feature/dealerSignup/components/dealerAgreement";
import DealerSignup from "./component/feature/dealerSignup/container/dealerSignup.container";
import StartSelling from "./component/feature/dealerSignup/container/startSelling.container";
import DealerCustomization from "./component/feature/dealerSignup/components/dealerCustomization";

function App() {
  return (
      <div className="App">
      <Router>
        <Header/>
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
              element={<Dashboard/>}
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </Router>

      {/* FOR TOASTS */}
      <ToastContainer/>
    </div>
  );
}

export default App;
