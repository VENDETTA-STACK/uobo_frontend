import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center mb-10 pt-10 border-t">
      <div className="text-slate-600 font-bold text-5xl px-2">Uobo</div>
      <div className="text-slate-500 font-semibold text-lg px-2">
        &copy; 2023 Uobo
      </div>
      <div className="text-slate-500 font-semibold text-lg px-2">
        Hello@uobo.ca
      </div>
      <div className="bg-slate-500 h-10 w-10 rounded-full px-2"></div>
    </div>
  );
};

export default Footer;
