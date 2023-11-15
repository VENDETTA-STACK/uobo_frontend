import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./component/feature/homepage/container/homePage.container";
import DealerSignup from "./component/feature/dealerSignup/container/dealerSignup.container";
import DealerCustomization from "./component/feature/dealerSignup/components/dealerCustomization";
import DealerAgreement from "./component/feature/dealerSignup/components/dealerAgreement";
import StartSelling from "./component/feature/dealerSignup/container/startSelling.container";

function App() {
  return (
    <div className="App">
      <Router>
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
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
