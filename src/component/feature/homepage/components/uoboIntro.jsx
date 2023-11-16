import React from "react";
import { Link } from "react-router-dom";

const UoboIntro = () => {
  return (
    <div className="w-4/5 sm:w-3/5">
      <p className="text-center text-blue-500 font-bold text-sm sm:text-base">
        Revolutionizing the automoive industry
      </p>
      {/* MAIN INFO */}
      <p className="text-2xl sm:text-5xl text-center text-slate-700 font-semibold mt-5">
        Any Vehicle, any Time
      </p>
      <div className="flex justify-center">
        <span className="text-2xl sm:text-5xl text-center text-slate-700 font-semibold">
          with a
        </span>
        <span className="text-2xl sm:text-5xl text-center text-blue-500 font-semibold ml-2">
          Click
        </span>
      </div>

      {/* INTRO */}
      <p className="mt-10 text-sm sm:text-base text-center">
        We belive you deserve the freedom to choose. Our goal is to provide a
        secure buying platform to help people buy their dream vehicle for their
        desire price and enjoy the ride they love. Are you ready to make your
        choice?
      </p>

      {/* SUBMIT BUTTON */}
      <div className="flex justify-center mt-10">
        <Link
          to="/dealer-customization"
          className="bg-blue-500 p-2 sm:p-3 rounded-full text-white text-center text-xs sm:text-sm no-underline"
        >
          Stay Updated
        </Link>
      </div>
    </div>
  );
};

export default UoboIntro;
