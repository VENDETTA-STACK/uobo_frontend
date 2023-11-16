import React from "react";
import { Link } from "react-router-dom";

const JoinNow = () => {
  return (
    <div className="w-4/5 my-48 flex flex-col justify-center items-center">
      <div className="text-4xl lg:text-5xl text-center font-bold">
        Join now. It's easy
      </div>
      <div className="text-center text-xs lg:text-sm text-slate-400 lg:w-1/2 mt-5">
        Future proof your dealership with Uobo. Signup now and be the amongst
        the first when we launch.
      </div>
      <Link
        to="/dealer-customization"
        className="bg-blue-500 text-center text-white text-xs lg:text-sm p-3 mt-5 rounded-full no-underline"
      >
        Join Uobo
      </Link>
    </div>
  );
};

export default JoinNow;
