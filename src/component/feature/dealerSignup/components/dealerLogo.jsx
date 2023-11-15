import React, { useState } from "react";
import { Bin, CheckMark, Location, Plus } from "../../../../assets/icons/icons";

const DealerLogo = (props) => {
  const [hasImage, setHasImage] = useState(false);

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div className="text-xl">Upload you Dealership logo.</div>
        {hasImage && (
          <div
            className="text-red-400 flex fill-red-400 mr-5 cursor-pointer"
            onClick={() => setHasImage(false)}
          >
            <Bin />
            Remove logo
          </div>
        )}
      </div>
      {/* ADD IMAGE  */}
      <div className="flex justify-center mt-3">
        <div
          className={` ${hasImage ? "border-4" : "border-4 border-dashed"} 
          h-52 w-52 rounded-full border-blue-500 flex justify-center items-center p-3 relative`}
        >
          <div className="bg-blue-50 h-full w-full flex flex-col justify-center items-center rounded-full">
            <div
              className="text-lg text-blue-500 cursor-pointer"
              onClick={() => setHasImage(!hasImage)}
            >
              {hasImage ? "Grid custom" : "Choose Image"}
            </div>
            {!hasImage && (
              <div className="text-slate-400 text-sm">(jpeg,png)</div>
            )}
          </div>
          {hasImage ? (
            <CheckMark
              height="50"
              width="50"
              className="absolute bottom-0 right-0"
            />
          ) : (
            <Plus className="absolute bottom-0 right-0" />
          )}
        </div>
      </div>
      {/* LOCATION */}
      <div className="mt-4">
        <div className="text-center">Grid Customs</div>
        <div className="flex justify-center ">
          <Location />
          884 New Street, London,ON
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-slate-400 text-center text-sm">
            Displaying logo creates trust in customer
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-xl text-white py-2 rounded-2xl w-48 mb-10 mt-3"
            onClick={() => props.setAddress()}
          >
            Submit Logo
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerLogo;
