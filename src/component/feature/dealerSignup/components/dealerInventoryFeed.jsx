import React, { useState } from "react";
import { Bin, CheckMark } from "../../../../assets/icons/icons";

const DealerInventoryFeed = () => {
  const [hasFile, setHasFile] = useState(false);

  return (
    <div>
      <div className="text-xl my-5">Upload you inventory feed file below.</div>
      {/* FILE UPLOAD */}
      <div className="flex justify-center mt-3">
        <div
          className={`${
            hasFile ? "border-4" : "border-4 border-dashed border-blue-500 p-3"
          } 
          h-52 w-full rounded-xl  flex justify-center items-center mr-5 relative`}
        >
          <div
            className={` ${
              !hasFile && "bg-blue-50"
            } h-full w-full flex flex-col justify-center items-center rounded-xl relative`}
          >
            {!hasFile && (
              <>
                <div className="text-lg cursor-pointer">
                  Drag and drop your file here
                </div>
                <div className="text-slate-400 text-sm">or</div>
                <div
                  className="text-lg text-blue-500 cursor-pointer bg-white border-2 border-blue-500 w-40 text-center rounded"
                  onClick={() => setHasFile(!hasFile)}
                >
                  Choose file
                </div>
                <div className="text-slate-400 text-sm mt-2">
                  Supported files: txt,xml, gz, bz2, zip
                </div>
              </>
            )}
            {/* UPLOADED FILE */}
            {hasFile && (
              <div className="flex flex-col items-center justify-center">
                <div
                  className="text-red-400 flex fill-red-400 mr-5 cursor-pointer text-sm float-right absolute top-2 right-0"
                  onClick={() => setHasFile(false)}
                >
                  <Bin height="20" width="20" />
                  Remove file
                </div>
                <div className="bg-slate-400 rounded h-12 w-10" />
                <div className="text-slate-400 text-sm">grid_custom.xml</div>
                <div className="text-blue-400 mt-4 flex items-center">
                  Upload Successfully completed <CheckMark className="ml-3" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-sm text-slate-400 mt-10 text-center">
        Your inventory feed will be sed to update your vehicle inventory in
        Uobo's app.
      </div>
      {/* BUTTON */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-xl text-white py-2 rounded-xl w-48 mb-10 mt-3"
          // onClick={() => props.setAddress()}
        >
          Start Selling
        </button>
      </div>
    </div>
  );
};

export default DealerInventoryFeed;
