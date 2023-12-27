import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import DashboardHeader from "./dashboardHeader/dashboardHeader";

const Header = () => {
  const [inDashboard, setInDashboard] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("dealer-dashboard")) {
      setInDashboard(true);
    } else {
      setInDashboard(false);
    }
  }, [location.pathname]);

  return (
    <header className="flex justify-center">
      <div
        className={`flex justify-between items-center w-full sm:w-4/5 mt-3 mx-5`}
      >
        <div>
          <Link
            to="/home"
            className="text-2xl font-bold text-black no-underline"
          >
            Uobo
          </Link>
        </div>
        {inDashboard && <DashboardHeader />}
        {!inDashboard && (
          <div>
            <a
              href="mailto:saleh.h.zarandah@gmail.com"
              className="mr-5 text-xs text-blue-500 no-underline"
            >
              Contact
            </a>
            <Link
              to="/dealer-signup"
              className="bg-blue-500 p-2 rounded-full text-xs text-white no-underline"
            >
              Join Uobo
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
