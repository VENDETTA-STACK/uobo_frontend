import React from "react";
import { ReviewData } from "../../../../assets/constants/const";

const CustomerReview = () => {
  const renderReview = () => {
    return ReviewData.map((data) => (
      <div
        className="flex flex-col text-left p-3 lg:p-4 h-48 lg:h-56 w-44 lg:w-60 mt-5 lg:mt-0 rounded-xl border 
              border-slate-200 shadow-xl shadow-blue-200 mx-2"
        key={data.id}
      >
        {/* IMAGE / SVG */}
        <div className="h-12 lg:h-12 w-8 lg:w-10">
          <img
            src={data.image}
            alt=""
            className="h-full w-full rounded-full object-fill"
          />
        </div>
        <p className="mt-3 h-24 lg:h-28 text-xs">{data.review}</p>
        <p className="text-xs lg:text-sm font-semibold lg:font-normal">
          {data.name}
        </p>
      </div>
    ));
  };

  return (
    <div className="mt-24 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between w-3/5 lg:w-4/5">
      {renderReview()}
    </div>
  );
};

export default CustomerReview;
