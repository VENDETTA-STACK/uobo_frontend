import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { DownArrow } from "../../../../assets/icons/icons";
import TodaySchedule from "./todaySchedule";
import CurrentStatus from "./currentStatus";

const DealerHome = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const handleChange = (date) => {
    setSelectedDate(date);
    setIsDateSelected(true);
  };

  const customInput = (
    <button
      className="custom-date-input flex text-sm items-center"
      onClick={() => setIsDateSelected(true)}
    >
      {isDateSelected ? format(selectedDate, "eee, dd MMM, yyyy") : `Today`}
      <DownArrow width="15" height="15" className="ml-2 fill-blue-500" />
    </button>
  );
  return (
    <>
      <div className="flex xs:flex-wrap md:flex-nowrap my-5">
        {/* Schedule */}
        <div className="xs:w-full md:w-4/6 md:mr-5">
          <div className="flex flex-wrap md:flex-nowrap items-baseline">
            <div>Schedule</div>
            <div>
              <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="dd MMM, yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                customInput={customInput}
                className="border-2 border-gray-400 rounded-xl ml-3 px-3"
              />
            </div>
            <div className="text-gray-400 text-sm ml-1 md:ml-3">
              Select an event for more details.
            </div>
          </div>
          <div className="border rounded-2xl h-80 mt-3"></div>
        </div>

        {/* Todays Schedule */}
        <div className="xs:w-full md:w-2/6 md:mt-0 xs:mt-3 ">
          <div className="text-start">Today's Schedule</div>
          <TodaySchedule />
        </div>
      </div>

      {/* Current Status */}
      <div className="mb-3">
        <CurrentStatus />
      </div>
    </>
  );
};

export default DealerHome;
