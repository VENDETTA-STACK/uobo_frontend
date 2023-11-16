import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-full sm:w-4/5 mt-3">
        <div>
          <h1 className="text-2xl font-bold">Uobo</h1>
        </div>
        <div>
          <button className="mr-5 text-xs text-blue-500">Contact</button>
          <Link
            to="/dealer-signup"
            className="bg-blue-500 p-2 rounded-full text-xs text-white no-underline"
          >
            Join Uobo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
