import React from "react";
import roundImage from '../../../../assets/images/Image.svg'

const Finance = () => {
  return (
    <div className="mt-24 flex flex-wrap lg:flex-nowrap w-4/5">
      {/* TEXT AREA */}
      <div className="w-full lg:w-1/2">
        <div className="text-2xl lg:text-4xl font-semibold">
          Finance or buy cash
        </div>
        {/* DESCRIPTION */}
        <div>
          <div className="flex items-center mt-8">
            <div className="bg-blue-500 w-4 lg:w-6 h-4 lg:h-6 rounded-full"></div>
            <div className="w-4/5 ml-3">
              <p className="text-slate-500 text-xs lg:text-sm font-semibold">
                Choose or apply
              </p>
              <p className="text-slate-400 text-xs">
                Wether you are looking for a specific vehicle or want to see
                what you are qualify for.
              </p>
            </div>
          </div>

          <div className="flex  items-center mt-8">
            <div className="bg-blue-300 w-4 lg:w-6 h-4 lg:h-6 rounded-full"></div>
            <div className="w-4/5 ml-3">
              <p className="text-slate-500 text-xs lg:text-sm font-semibold">
                Carter your deal
              </p>
              <p className="text-slate-400 text-xs">
                Customize your deal and choose the ideal offer that fits your
                need.
              </p>
            </div>
          </div>

          <div className="flex  items-center mt-8">
            <div className="bg-blue-200 w-4 lg:w-6 h-4 lg:h-6 rounded-full"></div>
            <div className="w-4/5 ml-3">
              <p className="text-slate-500 text-xs lg:text-sm font-semibold">
                Get you vehicle delivered
              </p>
              <p className="text-slate-400 text-xs">
                Uobo provides delivery service for all of our vehicles .
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* IMAGE / SVG */}
      <div className="ml-4 mt-10 lg:mt-0 w-52 lg:w-72 h-52 lg:h-72"><img src={roundImage} alt="" /></div>
    </div>
  );
};

export default Finance;
