import React from "react";
import UoboIntro from "../components/uoboIntro";
import WhyUobo from "../components/whyUobo";
import Working from "../components/working";
import Finance from "../components/finance";
import CustomerReview from "../components/customerReview";
import CommonQuestions from "../components/commonQuestions";
import JoinNow from "../components/joinNow";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:w-4/5 mt-10">
      <UoboIntro />
      <WhyUobo />
      <Working />
      <Finance />
      <CustomerReview />
      <CommonQuestions />
      <JoinNow />
    </div>
  );
};

export default HomePage;
