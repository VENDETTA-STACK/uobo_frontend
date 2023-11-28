import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "./dashboardHeader";

const Header = () => {
  const [inHome, setInHome] = useState(false);
  const [inDashboard, setInDashboard] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;

    console.log(">>", path.includes("home"));
    if (path.includes("home")) {
      setInHome(true);
    }
    if (path.includes("dealer-dashboard")) {
      setInDashboard(true);
    }
  }, []);

  return (
    <>
      {inDashboard && <DashboardHeader />}
      <div className="flex justify-center">
        {inHome && (
          <div className="flex justify-between w-full sm:w-4/5 mt-3">
            <div>
              <Link
                to="/"
                className="text-2xl font-bold text-black no-underline"
              >
                Uobo
              </Link>
            </div>
            <div>
              <button className="mr-5 text-xs text-blue-500">Contact</button>
              <Link
                to="/dealer-signup"
                className="bg-blue-500 p-2 rounded-full text-xs text-white no-underline"
              >
                Join Uobo
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
