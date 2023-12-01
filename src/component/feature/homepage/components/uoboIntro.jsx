import React, { useState } from "react";
// import { Link } from "react-router-dom";

const UoboIntro = () => {
  const [email, setEmail] = useState(false);
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
        {!email&&<div className="bg-blue-500 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-white text-center text-sm sm:text-base cursor-pointer"
        onClick={()=>setEmail(true)}>
          Stay Updated
        </div>}
        {email&&<div>
          <input type="email" className="border-2 border-blue-500 rounded-md p-2 w-64" placeholder="Your Email"/>
          <button className="bg-blue-500 text-white w-28 py-2 ml-4 rounded-md" onClick={()=>setEmail(false)}>Submit</button>
        </div>
        }
        {/* <Link
          to="/dealer-customization"
          className="bg-blue-500 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-white text-center text-sm sm:text-base no-underline"
        >
          Stay Updated
        </Link> */}
      </div>
    </div>
  );
};

export default UoboIntro;
