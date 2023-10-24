import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const DealerCustomization = () => {
  const [delivery, setDelivery] = useState(true);
  const [pickup, setPickup] = useState(true);

  return (
    <div className="flex w-4/5">
      {/* LEFT SECTION */}
      <div className="w-3/4 text-left mr-3">
        {/* Heading */}
        <p className="text-xl font-bold p-0 m-0">
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
            <Form.Check.Label>Use Uobo's delivery people</Form.Check.Label>
            <Form.Control.Feedback type="valid" className="text-sm">
              30% fee per order
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
            <Form.Check.Label>Use your own delivery staffs</Form.Check.Label>
            <Form.Control.Feedback type="valid" className="text-sm">
              15% fee per order
            </Form.Control.Feedback>
          </Form.Check>
        </div>

        {/* PICKUP */}
        <div
          className={`${
            delivery ? "border-blue-500" : "border-gray-500"
          } w-full p-3 rounded-2xl border-3 my-4`}
        >
          <div className="flex justify-between">
            <p className="text-xl font-bold m-0 p-0">Pickup</p>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              defaultChecked
              onChange={() => setDelivery(!delivery)}
              className="text-lg text-left ml-2"
            />
          </div>
          <p className="text-sm text-slate-400">
            Let customers pickup their vehicles to get more sales at a lower
            cost.
          </p>

          <p className="text-sm text-slate-400 m-0 p-0">10% fee per order</p>
        </div>

        <p className="text-sm text-slate-400 pl-5">
          $350 activation fee will be charged per location &#9432;
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/4 ml-3 border-l">
        {/* UPPER PROGRESS */}
        <div className="flex">
          {/* Progress */}
          <div className="w-1/3 bg-blue-200 h-52"></div>
          {/* Status Name*/}
          <div className="w-2/3">
            <p>Getting Started</p>
            <p>Customize partnership</p>
            <p>Review Agreement</p>
          </div>
        </div>
      </div>
      {/* LOWER INFORMATION */}
      <div className="bg-red-100 h-96 flex w-4/5">
        <div className="h-full bg-blue-200"></div>
        <div></div>
      </div>
    </div>
  );
};

export default DealerCustomization;
