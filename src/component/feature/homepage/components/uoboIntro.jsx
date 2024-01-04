import * as Yup from "yup";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { ErrorMessage, Formik } from "formik";

import api from "../../../common/api/api";
import FieldErrorMessage from "../../../common/error";

const UoboIntro = () => {
  const [email, setEmail] = useState(false);

  const homePageEmailUpdates = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address format"),
  });

  const handlePostRequest = async (email) => {
    try {
      await api.post("/api/user/email", email, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU1ZmNjMWEwNWZhYmM2NWI0MTViNGVhIiwiaWF0IjoxNzA0MzA5OTQxLCJleHAiOjE3MDY5MDE5NDF9.nJMST_PrZN0I38xIfqQIarw-Frx6gWykjHJcmXbTfb8`,
        },
      });
      toast.success("Success", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setEmail(!email);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setEmail(!email);
    }
  };

  return (
    <div className="w-4/5 sm:w-3/5">
      <p className="text-center text-blue-500 font-bold text-sm sm:text-base">
        Revolutionizing the automoive industry
      </p>
      {/* MAIN INFO */}
      <p className="text-2xl sm:text-5xl text-center text-slate-700 font-semibold mt-5">
        Any Vehicle, any Time
      </p>
      <div className="flex justify-center">
        <span className="text-2xl sm:text-5xl text-center text-slate-700 font-semibold">
          with a
        </span>
        <span className="text-2xl sm:text-5xl text-center text-blue-500 font-semibold ml-2">
          Click
        </span>
      </div>

      {/* INTRO */}
      <p className="mt-10 text-sm sm:text-base text-center">
        We belive you deserve the freedom to choose. Our goal is to provide a
        secure buying platform to help people buy their dream vehicle for their
        desire price and enjoy the ride they love. Are you ready to make your
        choice?
      </p>

      {/* SUBMIT BUTTON */}
      <div className="flex justify-center mt-10">
        {!email && (
          <div
            className="bg-blue-500 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-white text-center text-sm sm:text-base cursor-pointer"
            onClick={() => setEmail(true)}
          >
            Stay Updated
          </div>
        )}
        {email && (
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values) => {
              const params = {
                email: values.email,
              };
              console.log("Form values>>", params);
              handlePostRequest(params);
            }}
            validateOnChange={true}
            validateOnBlur={true}
            validationSchema={homePageEmailUpdates}
          >
            {({ handleSubmit, setFieldValue, errors }) => (
              <form onSubmit={handleSubmit} className="xs:block sm:flex">
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) =>
                      setFieldValue(e.target.name, e.target.value)
                    }
                    className="border-2 border-blue-500 rounded-md p-2 w-64"
                    placeholder="Your Email"
                  />
                  <ErrorMessage name="email" component={FieldErrorMessage} />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white w-28 py-2 ml-4 rounded-md h-11 xs:mt-2 sm:mt-0"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        )}
        {/* <Link
          to="/dealer-customization"
          className="bg-blue-500 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-white text-center text-sm sm:text-base no-underline"
        >
          Stay Updated
        </Link> */}
      </div>
    </div>
  );
};

export default UoboIntro;
