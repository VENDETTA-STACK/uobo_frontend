import { React } from "react";

import DealerSignupForm from "../components/dealerSignupForm";
import { DealerSignupLogo } from "../../../../assets/icons/icons";

const DealerSignup = () => {
  return (
    <div className="w-4/5 flex my-5 justify-center">
      {/* LEFT SECTION */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="h-98 flex flex-col items-center">
          <div className="h-96 w-4/5 flex items-center justify-center">
            <DealerSignupLogo />
          </div>
          <p className="text-slate-400">A few clicks away from</p>
          <p className="text-blue-500 text-2xl font-bold">
            The future of car sales
          </p>
        </div>
      </div>
      {/* RIGHT SECTION */}
      <DealerSignupForm />
    </div>
  );
};

export default DealerSignup;
