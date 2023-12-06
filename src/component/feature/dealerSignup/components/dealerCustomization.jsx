import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import progress3Step2 from "../../../../assets/images/progress3Step2.png";
const DealerCustomization = () => {
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState(true);
  const [pickup, setPickup] = useState(true);

  const handleRedirect = () => {
    navigate("/dealer-agreement");
  };

  return (
    <div className="flex xs:flex-wrap lg:flex-nowrap w-4/5">
      {/* LEFT SECTION */}
      <div className="lg:w-2/3 text-left mr-3 mt-5">
        <Link to="/home" className="text-2xl text-black no-underline" >U O B O</Link>
        {/* Heading */}
        <p className="text-xl font-bold mt-4 p-0 m-0">
          Hey Jevin, Choose how you want to partner.
        </p>
        <p className="text-slate-400">You can change your selections later</p>

        {/* Delivery */}
        <div
          className={`${
            delivery ? "border-blue-500" : "border-gray-500"
          } w-full p-3 rounded-2xl border-3`}
        >
          <div className="flex justify-between">
            <p className="text-xl font-bold m-0 p-0">Delivery</p>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              defaultChecked
              onChange={() => setDelivery(!delivery)}
              className="text-lg text-left ml-2"
            />
          </div>
          <p className="text-sm text-slate-400">
            Use the UOBO platform to deliver vehicles to customers.
          </p>

          {/* UOBO delivery */}
          <Form.Check type="radio" id="uoboDelivery" name="uoboDelivery">
            <Form.Check.Input
              type="radio"
              isValid
              defaultChecked
              id="uoboDelivery"
              name="uoboDelivery"
            />
            <Form.Check.Label className="text-black">
              Use Uobo's delivery people
            </Form.Check.Label>
            <Form.Control.Feedback type="valid" className="text-sm text-black">
              5% commission per deal
            </Form.Control.Feedback>
          </Form.Check>

          {/* Self Service */}
          <Form.Check
            type="radio"
            id="selfDelivery"
            name="uoboDelivery"
            className=" mt-3"
          >
            <Form.Check.Input
              type="radio"
              isValid
              id="selfDelivery"
              name="uoboDelivery"
            />
            <Form.Check.Label className="text-black">
              Use your own delivery staffs
            </Form.Check.Label>
            <Form.Control.Feedback type="valid" className="text-sm text-black">
              5% commission per deal
            </Form.Control.Feedback>
          </Form.Check>
        </div>

        {/* PICKUP */}
        <div
          className={`${
            pickup ? "border-blue-500" : "border-gray-500"
          } w-full p-3 rounded-2xl border-3 my-4`}
        >
          <div className="flex justify-between">
            <p className="text-xl font-bold m-0 p-0">Pickup</p>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              defaultChecked
              onChange={() => setPickup(!pickup)}
              className="text-lg text-left ml-2"
            />
          </div>
          <p className="text-sm text-slate-400">
            Let customers pickup their vehicles to get more sales at a lower
            cost.
          </p>

          <p className="text-sm text-slate-400 m-0 p-0">5% commission per deal</p>
        </div>

        {pickup && (
          <div className="text-sm text-slate-400 pl-5">
            $350 activation fee will be charged per location{" "}
            <b className="text-blue-500">&#9432;</b>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-xl text-white py-2 rounded-2xl w-48 float-right mb-10 mt-3"
          onClick={handleRedirect}
        >
          Submit
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-1/3 ml-3 lg:border-l pl-6 ">
        {/* UPPER PROGRESS */}
        <div className="flex mt-20">
          {/* Progress */}
          <img className="h-28" src={progress3Step2} alt="uoboFlow" />
          {/* Status Name*/}
          <div className="w-2/3 mt-1">
            <p className="text-sm lg:text-base text-left ml-2">
              Getting Started
            </p>
            <p className="text-sm lg:text-base text-left ml-2">
              Customize partnership
            </p>
            <p className="text-sm lg:text-base text-left ml-2">
              Review Agreement
            </p>
          </div>
        </div>
        {/* LOWER INFORMATION */}
        <div className="bg-blue-50 lg:w-2/3 mt-20 p-3 mb-10">
          <div className="flex items-center text-left">
            <b className="text-blue-500">&#9432;</b>
            <p className="ml-3">Why $350 charged for activation?</p>
          </div>
          <p className="text-sm text-left">
            A one time activation fee will be charged per location only for
            photo shoots, equipments and on-boarding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealerCustomization;
