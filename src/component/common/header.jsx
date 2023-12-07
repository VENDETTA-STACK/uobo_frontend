import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import DashboardHeader from "./dashboardHeader/dashboardHeader";

const Header = ({ isOpen, toggleSidebar }) => {
  // const [inHome, setInHome] = useState(false);
  // const [inDashboard, setInDashboard] = useState(false);
  //   const location = useLocation();

    // useEffect(() => {
    //   const currentRoute = location.pathname;
    //   if (currentRoute.includes("home")) {
    //     setInHome(true);
    //   }
    //   if (currentRoute.includes("dealer-dashboard")) {
    //     setInDashboard(true);
    //   }
    // }, [location]);

  return (
    <>
      {/* {inDashboard && <DashboardHeader isOpen={isOpen} toggleSidebar={toggleSidebar}/>} */}
      <div className="flex justify-center">
        {true && (
          <div className="flex justify-between w-full sm:w-4/5 mt-3"style={{
            marginLeft: '20px',
            marginRight: '20px',
          }}>
            
            <div>
              <Link
                to="/home"
                className="text-2xl font-bold text-black no-underline"
              >
                Uobo
              </Link>
            </div>
            <div>
              <a href="mailto:saleh.h.zarandah@gmail.com" className="mr-5 text-xs text-blue-500 no-underline">Contact</a>
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
