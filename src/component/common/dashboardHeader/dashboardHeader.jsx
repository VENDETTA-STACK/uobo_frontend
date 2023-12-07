import React from "react";

import {Bell} from "../../../assets/icons/icons";
import Sidebar from "./sidebar";

const DashboardHeader = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="ml-56 flex justify-between">
        {/* USERNAME */}
        <div className="mt-4 ml-2">
          <div className="text-left text-lg">Hey Jevin,</div>
          <div className="text-sm text-slate-400">
            Here's what happening in your dashboard.
          </div>
        </div>
        <div className="flex items-center">
          <Bell />
          <div className="mx-3 border-blue-400 border-2 rounded-full h-10 w-10 flex items-center justify-center">
            <div className="bg-black rounded-full h-8 w-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
