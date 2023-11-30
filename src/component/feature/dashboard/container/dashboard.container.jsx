import React from "react";

const Dashboard = ({isOpen}) => {
  return <div 
  // className="ml-48"
  className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4 transition-transform duration-300 ease-in-out ${
    isOpen ? 'ml-64' : 'ml-0'
  }`}
  >Dashboard</div>;
};

export default Dashboard;
