import React from "react";
import { StackData } from "../../../../assets/constants/const";

const Working = () => {
  const renderCards = () => {
    return StackData.map((data) => (
      <div
        className="flex flex-col justify-center items-center p-1 sm:p-2 h-48 sm:h-64 w-32 sm:w-40 mt-10 sm:mt-5 lg:mt-0 rounded-xl border 
        border-slate-200 shadow-xl shadow-blue-200"
        key={data.id}
      >
        {/* IMAGE / SVG */}
        <div className="h-14 sm:h-24 w-14 sm:w-24"><img src={data.image} alt="" className="h-24" /></div>
        <p className="mt-2 sm:mt-3 h-8 sm:h-10 text-xs sm:text-sm text-center">
          {data.name}
        </p>
        <p className="text-center text-xs h-10">{data.content}</p>
      </div>
    ));
  };

  return (
    <div className="w-4/5 mt-24">
      <div>
        <p>About us</p>
        <span className="text-xl sm:text-3xl font-semibold ">
          We Do Things
        </span>{" "}
        <span className="text-xl sm:text-3xl font-semibold text-blue-500">
          Differently....
        </span>
      </div>
      {/* STACK */}
      <div className="mt-10 border-32 border-transparent rounded-xl">
        <div className="flex flex-wrap justify-evenly rounded-xl">
          {/* CARDS */}
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default Working;
