import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { DownArrow } from "../../../../assets/icons/icons";

const Dashboard = () => {
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
    <div className={`w-4/5`}>
      {/* User Greeting */}
      <div className="text-start mt-4">
        <div className="text-2xl font-medium">Hey Jevin,</div>
        <div className="text-sm text-slate-500">
          Here's what happening in your dashboard.
        </div>
      </div>

      {/* Schedule */}
      <div className="flex mt-5">
        <div>Schedule</div>
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
        <div className="text-gray-400 text-sm ml-3">
          Select an event for more details
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
