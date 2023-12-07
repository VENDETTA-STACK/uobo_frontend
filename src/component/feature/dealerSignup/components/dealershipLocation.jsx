import React from "react";
import * as Yup from "yup";
import isEmpty from "lodash/isEmpty";
import Form from "react-bootstrap/Form";
import { ErrorMessage, Formik } from "formik";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import FieldErrorMessage from "../../../common/error";

const DealershipLocation = (props) => {
  const DealerLocationValidationSchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .min(3, "Please enter name which contains at least 3 characters*")
        .required("Please enter Dealership name*")
        .strict(true)
        .max(30, "Dealership name should be atmost of 30 characters*"),
      address: Yup.string()
        .min(3, "Please enter address which contains at least 3 characters*")
        .required("Please enter Address*")
        .strict(true)
        .max(80, "Address should be atmost of 80 characters*"),
    });

  return (
    <div className="mt-4 mb-10">
      <div className="text-xl">
        Please enter your dealership location details.
      </div>

      {/* FORM */}
      <Formik
        initialValues={{ name: "", address: "" }}
        onSubmit={(values) => {
          const params = {
            name: values.name,
            address: values.address,
          };
          console.log("Form values>>", params);
          props.setLocation();
        }}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={DealerLocationValidationSchema}
      >
        {({ handleSubmit, setFieldValue, errors }) => (
          <form
            onSubmit={handleSubmit}
            className="px-2 mt-5 text-center flex flex-col justify-center items-center"
          >
            {/* DEALERSHP NAME */}
            <div className={`${!!errors.name ? "mb-3" : "mb-0"} w-3/5`}>
              <FloatingLabel
                label="Dealership legal name"
                className={!!errors.name ? "mb-0" : "mb-3"}
              >
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="name"
                  id="name"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
              </FloatingLabel>
              <ErrorMessage name="name" component={FieldErrorMessage} />
            </div>

            {/* ADDRESS */}
            <div className={`${!!errors.address ? "mb-3" : "mb-0"} w-3/5`}>
              <FloatingLabel
                className={!!errors.address ? "mb-0" : "mb-3"}
                // controlId="floatingInput"
                label="Dealership Address"
              >
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="address"
                  id="address"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
              </FloatingLabel>
              <ErrorMessage name="address" component={FieldErrorMessage} />
            </div>
            <div className="text-slate-400 text-sm mt-3">
              Add location details for your dealership branches.
            </div>
            <div className="text-slate-400 text-sm mb-3">
              You could also add/edit them later.
            </div>
            {/* SUBMIT BUTTON */}
            {/* <div className=" "> */}
            <button
              type="submit"
              disabled={!isEmpty(errors)}
              className={`${
                isEmpty(errors) ? "bg-blue-500" : "bg-gray-300"
              } text-xl text-white px-1 py-2 rounded-lg w-40`}
            >
              Proceed
            </button>
            {/* </div> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default DealershipLocation;
