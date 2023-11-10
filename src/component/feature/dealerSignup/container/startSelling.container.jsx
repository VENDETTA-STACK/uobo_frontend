import React, { useState } from "react";
import progress2Step1 from "../../../../assets/images/progress2Step1.png";
import progress2Step2 from "../../../../assets/images/progress2Step2.png";
import DealerLogo from "../components/dealerLogo";
import DealershipLocation from "../components/dealershipLocation";
import DealerInventoryFeed from "../components/dealerInventoryFeed";

const StartSelling = () => {
  const [isInLogoAndLocation, setIsInLogoAndLocation] = useState(true);
  const [inAddress, setInAddress] = useState(false);
  const [inInventory, setInInventory] = useState(false);

  const progressStatus = () => {
    return (
      <>
        <div className="flex mt-14 ml-20">
          {/* Progress */}
          <img
            className="h-20"
            src={isInLogoAndLocation ? progress2Step1 : progress2Step2}
            alt="uoboFlow"
          />
          {/* Status Name*/}
          <div className="w-2/3 mt-1">
            <p className="text-blue-500 text-left ml-2">Dealership location</p>
            <p
              className={`${
                !isInLogoAndLocation && "text-blue-500"
              } text-left mt-4 ml-2`}
            >
              Inventory
            </p>
          </div>
        </div>
      </>
    );
  };

  const shortDescription = () => {
    return (
      <>
        {/* LOWER INFORMATION */}
        <div
          className={`${
            (isInLogoAndLocation && !inAddress) || inInventory
              ? "block"
              : "hidden"
          } bg-blue-50 w-2/3 mt-20 p-3 mb-10 ml-14`}
        >
          <div className="flex items-center text-left">
            {(isInLogoAndLocation || inInventory) && (
              <b className="text-blue-500">&#9432;</b>
            )}
            <p className="ml-3 mb-0">
              {isInLogoAndLocation && !inAddress && "Logo upload guidelines"}
              {inInventory && "What is and inventory feed?"}
            </p>
          </div>
          {isInLogoAndLocation ? (
            <ul className="text-sm text-left mt-3">
              <li className="list-disc">
                Image resolutio should be between 240X240px and 800X800px.
              </li>
              <li className="list-disc mt-1">Maximum upload size is 2mb.</li>
            </ul>
          ) : (
            <div className="text-sm text-left mt-2">
              An inventiry feed is a digital file which contains a list of all
              your products with options or attributes describing them. These
              attributes contain anything from the color, manufacturer,
              materials etc., of each product{" "}
            </div>
          )}
        </div>
      </>
    );
  };

  const setAddress = () => {
    setInAddress(true);
  };

  const setLocation = () => {
    setInAddress(false);
    setIsInLogoAndLocation(false);
    setInInventory(true);
  };

  return (
    <div className="w-4/5 flex">
      {/* LEFT HEADER */}
      <div className="text-left w-3/5 mt-4">
        <div className="text-blue-500 text-3xl">Start Selling Now</div>
        <div className="text-slate-400 text-sm">
          A few more details are required to finish your account setup.
        </div>
        {/* DEALER INOF PROCESS */}
        {isInLogoAndLocation && !inAddress && (
          <DealerLogo setAddress={setAddress} />
        )}
        {isInLogoAndLocation && inAddress && (
          <DealershipLocation setLocation={setLocation} />
        )}
        {inInventory && <DealerInventoryFeed />}
        {/* {!isInventory&&<DealerLogoAndLocation/>} */}
      </div>
      {/* RIGHT SECTION */}
      <div className="w-2/5 border-l">
        <div className="text-2xl text-right">U O B O</div>
        {progressStatus()}
        {shortDescription()}
      </div>
    </div>
  );
};

export default StartSelling;
