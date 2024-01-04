import React from "react";
import { Location } from "../../../../assets/icons/icons";
import { TodaysSchedule } from "../../../../assets/constants/const";

const TodaySchedule = () => {
  const renderReview = () => {
    return TodaysSchedule.map((data) => (
      <div className="flex my-3" key={data.id}>
        {/* left */}
        <div className="text-xs w-2/5 text-blue-500 border-r-3 border-blue-500">
          <div>{data.time}</div>
          <div>{data.type}</div>
        </div>
        {/* right */}
        <div className="w-3/5 text-start ml-1">
          <div>{data.car}</div>
          <div className="flex text-xs items-center">
            <Location height="12" width="12" /> {data.identity}
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="border rounded-2xl p-1 h-80 overflow-y-auto mt-3">
      {renderReview()}
    </div>
  );
};

export default TodaySchedule;
