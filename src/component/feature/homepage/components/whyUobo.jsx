import React from "react";
import uoboFlow from "../../../../assets/images/uobo-flow.png";

const WhyUobo = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap sm:justify-between mt-24 w-4/5">
      <div>
        <p className="text-xl sm:text-3xl font-bold">Why Use Uobo?</p>
        <p className="text-xl sm:text-3xl font-bold text-blue-500">
          Obviously Easy!
        </p>
        {/* Navigation */}
        <div className="mt-10 text-sm sm:text-xl">
          <p className="mt-3 sm:ml-3 text-blue-500 font-bold border-l-2 border-blue-500 pl-2">
            Sign up
          </p>
          <p className="mt-3 sm:ml-3 pl-2 border-l-2 text-slate-400">
            Navigation
          </p>
          <p className="mt-3 sm:ml-3 pl-2 border-l-2 text-slate-400">Buy now</p>
          <p className="mt-3 sm:ml-3 pl-2 border-l-2 text-slate-400">
            Pre-approved finance
          </p>
          <p className="mt-3 sm:ml-3 pl-2 border-l-2 text-slate-400">
            General Finance
          </p>
        </div>
      </div>
      {/* IMAGE */}
      <div>
        <img
          className="w-4/5 my-10 sm:my-0 sm:w-auto"
          src={uoboFlow}
          alt="uoboFlow"
        />
      </div>
    </div>
  );
};

export default WhyUobo;
