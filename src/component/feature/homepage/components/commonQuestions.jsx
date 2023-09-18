import React from "react";

const CommonQuestions = () => {
  return (
    <div className="mt-24 w-4/5">
      {/* SET 1 */}
      <div className="text-2xl lg:text-3xl font-bold mb-12">
        Common Questions
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="lg:w-1/2">
          <div className="font-semibold">How does Uobo's platform work?</div>
          <div className="mt-5 text-sm text-slate-500">
            Uobo is an online vehicle marketplace connecting consumers with
            dealership through a seamless and personalised buying journey.
            Featuring on advanced algorithm and easy-to-use interface, users con
            effortlessly find their dream car.
          </div>
        </div>
        <div className="lg:w-1/2 mt-14 lg:mt-0">
          <div className="font-semibold">
            How can dealerships join the platform?
          </div>
          <div className="mt-5 text-sm text-slate-500">
            Dealerships can join Uobo via the 'Join Laba* button located on our
            homepage. Simply fill in your dealersmios information and you will
            be set!
          </div>
        </div>
      </div>
      {/* SET 2 */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center mt-16">
        <div className="lg:w-1/2">
          <div className="font-semibold">When will the platform launch?</div>
          <div className="mt-5 text-sm text-slate-500">
            Uobo is working diligently to fine tune the platform for the perfect
            user experience. Sign up for notifications to stay updated on our
            launch date.
          </div>
        </div>
        <div className="lg:w-1/2 mt-14 lg:mt-0">
          <div className="font-semibold">
            Is Uobo exclusive to Ontario, Canada?
          </div>
          <div className="mt-5 text-sm text-slate-500">
            Currently, Uobo focuses on partnering with dealerships in Ontario to
            transform the local car buying experience, Expansion plans will be
            announced post-launch.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
