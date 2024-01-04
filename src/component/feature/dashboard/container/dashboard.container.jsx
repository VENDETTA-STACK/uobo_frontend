import React from "react";
import DealerHome from "../component/dealerHome";

const Dashboard = () => {
  return (
    <div className={`w-4/5`}>
      {/* User Greeting */}
      <div className="text-start mt-4">
        <div className="text-2xl font-medium">Hey Jevin,</div>
        <div className="text-sm text-slate-500">
          Here's what happening in your dashboard.
        </div>
      </div>

      {/* Main Content */}
      <DealerHome />
    </div>
  );
};

export default Dashboard;
