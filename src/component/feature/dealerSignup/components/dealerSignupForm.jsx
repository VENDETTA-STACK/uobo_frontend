import { React, useState } from "react";
import * as Yup from "yup";
import isEmpty from "lodash/isEmpty";
import Form from "react-bootstrap/Form";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import FieldErrorMessage from "../../../common/error";

const DealerSignupForm = () => {
  const navigate = useNavigate();
  const [confirmInfo, setConfirmInfo] = useState(false);

  const DealerSignupFormValidationSchema = () =>
    Yup.object().shape({
      firstName: Yup.string()
        .min(3, "Please enter name which contains at least 3 characters*")
        .required("Please enter First name*")
        .strict(true)
        .max(30, "First name should be atmost of 30 characters*"),
      lastName: Yup.string()
        .min(3, "Please enter name which contains at least 3 characters*")
        .required("Please enter Last name*")
        .strict(true)
        .max(30, "Last name should be atmost of 30 characters*"),
      email: Yup.string()
        .email()
        .min(3, "Please enter email which contains at least 3 characters*")
        .required("Please enter your Email*")
        .strict(true),
      phno: Yup.string()
        .required("Please enter Phone number")
        .matches(/^\d+$/, "Phone number must be a Numeric Value")
        .max(10, "Phone number must contains at max 10 digits.")
        .min(10, "Phone number must contains atleast 10 digits."),
      dealershipName: Yup.string()
        .min(3, "Please enter name which contains at least 3 characters*")
        .required("Please enter Dealership name*")
        .strict(true)
        .max(30, "Dealership name should be atmost of 30 characters*"),
      address: Yup.string()
        .min(3, "Please enter address which contains at least 3 characters*")
        .required("Please enter Address*")
        .strict(true)
        .max(80, "Address should be atmost of 80 characters*"),
      link: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter website"),
      companyRole: Yup.string()
        .min(3, "Please enter a role which contains at least 3 characters*")
        .required("Please enter Company Role*")
        .strict(true)
        .max(30, "Company role should be atmost of 30 characters*"),
      totalLocation: Yup.number()
        .integer()
        .strict(true)
        .max(1000, "Number of location should be atmost of 1000*")
        .min(0)
        .required(),
    });
  return (
    <div className="w-1/2 h-98 overflow-auto">
      <p className="text-bold font-bold text-2xl">GET STARTED</p>

      <Formik
        initialValues={{
          dealershipName: "",
          address: "",
          link: "",
          firstName: "",
          lastName: "",
          phno: "",
          email: "",
          companyRole: "",
          totalLocation: 0,
        }}
        onSubmit={(values) => {
          const params = {
            dealershipName: values.dealershipName,
            address: values.address,
            link: values.link,
            firstName: values.firstName,
            lastName: values.lastName,
            phno: values.phno,
            email: values.email,
            confirmInfo: `${confirmInfo}`,
            companyRole: values.companyRole,
            totalLocation: values.totalLocation,
          };
          console.log("Form values>>", params);
          navigate("/dealer-customization");
        }}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={DealerSignupFormValidationSchema}
      >
        {({ handleSubmit, setFieldValue, errors }) => (
          <form onSubmit={handleSubmit} className="px-2">
            {/* DEALERSHP NAME */}
            <div className={!!errors.dealershipName ? "mb-3" : "mb-0"}>
              <FloatingLabel
                label="Dealership Name"
                className={!!errors.dealershipName ? "mb-0" : "mb-3"}
              >
                <Form.Control
                  type="text"
                  name="dealershipName"
                  placeholder="dealershipName"
                  id="dealershipName"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
              </FloatingLabel>
              <ErrorMessage
                name="dealershipName"
                component={FieldErrorMessage}
              />
            </div>

            {/* ADDRESS */}
            <div className={!!errors.address ? "mb-3" : "mb-0"}>
              <FloatingLabel
                className={!!errors.address ? "mb-0" : "mb-3"}
                // controlId="floatingInput"
                label="Address"
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

            {/* OMVIC LICENSE LINK */}
            <div className={!!errors.link ? "mb-3" : "mb-0"}>
              <FloatingLabel
                className={!!errors.link ? "mb-0" : "mb-3"}
                // controlId="floatingInput"
                label="OMVIC License Link"
              >
                <Form.Control
                  type="text"
                  name="link"
                  placeholder="link"
                  id="link"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
              </FloatingLabel>
              <ErrorMessage name="link" component={FieldErrorMessage} />
              <div className="flex items-center">
                <div className="mr-2">
                  <strong className="font-extrabold text-blue-500">
                    &#9432;
                  </strong>
                </div>
                <div className=" flex-col text-sm">
                  <a href="https://www.omvic.on.ca/RegistrantSearch/">
                    https://www.omvic.on.ca/RegistrantSearch/
                  </a>
                  <p className="mt-1">
                    You could get your <b>OMVIC link</b> from here:
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`flex justify-between" ${
                !!errors.firstName || !!errors.lastName ? "mb-3" : "mb-0"
              }`}
            >
              {/* FIRST NAME */}
              <div className="w-45">
                <FloatingLabel
                  className={!!errors.firstName ? "mb-0" : "mb-3"}
                  // controlId="floatingInput"
                  label="First Name"
                >
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    id="firstName"
                    onChange={(e) =>
                      setFieldValue(e.target.name, e.target.value)
                    }
                  />
                </FloatingLabel>
                <ErrorMessage name="firstName" component={FieldErrorMessage} />
              </div>

              {/* LAST NAME */}
              <div className="w-45">
                <FloatingLabel
                  className={!!errors.lastName ? "mb-0" : "mb-3"}
                  // controlId="floatingInput"
                  label="Last Name"
                >
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="lastName"
                    id="lastName"
                    onChange={(e) =>
                      setFieldValue(e.target.name, e.target.value)
                    }
                  />
                </FloatingLabel>
                <ErrorMessage name="lastName" component={FieldErrorMessage} />
              </div>
            </div>

            {/* PERSONAL PHONE NUMBER */}
            <div className={!!errors.phno ? "mb-3" : "mb-0"}>
              <FloatingLabel
                className={!!errors.phno ? "mb-0" : "mb-3"}
                // controlId="floatingInput"
                label="Personal Phone Number"
              >
                <Form.Control
                  type="text"
                  name="phno"
                  placeholder="phno"
                  id="phno"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
              </FloatingLabel>
              <ErrorMessage name="phno" component={FieldErrorMessage} />
            </div>

            {/* EMAIL */}
            <div className={!!errors.email ? "mb-3" : "mb-0"}>
              <FloatingLabel
                className={!!errors.email ? "mb-0" : "mb-3"}
                // controlId="floatingInput"
                label="Email"
              >
                <Form.Control
                  type={"text"}
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
              </FloatingLabel>
              <ErrorMessage name="email" component={FieldErrorMessage} />
            </div>

            {/* CONFIRM SWITCH */}
            <div className="flex justify-center items-center w-4/5 mb-2">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                onChange={() => setConfirmInfo(!confirmInfo)}
                className="text-lg text-left ml-2"
              />
              <div className="text-slate-400 text-left">
                I confirm that the above informations are correct and reachable
              </div>
            </div>

            {/* COMPANY ROLE */}
            <div className={!!errors.companyRole ? "mb-3" : "mb-0"}>
              <FloatingLabel
                className={!!errors.companyRole ? "mb-0" : "mb-3"}
                // controlId="floatingInput"
                label="Company Role"
              >
                <Form.Control
                  type={"text"}
                  name="companyRole"
                  id="companyRole"
                  placeholder="companyRole"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
              </FloatingLabel>
              <ErrorMessage name="companyRole" component={FieldErrorMessage} />
            </div>

            {/* NO OF LOCATIONS */}
            <div className={!!errors.totalLocation ? "mb-3" : "mb-0"}>
              <FloatingLabel
                className={!!errors.totalLocation ? "mb-0" : "mb-3"}
                // controlId="floatingInput"
                label="Number of Locations"
              >
                <Form.Control
                  type={"number"}
                  name="totalLocation"
                  id="totalLocation"
                  placeholder="totalLocation"
                  onChange={(e) => (e.target.name, e.target.value)}
                />
              </FloatingLabel>
              <ErrorMessage
                name="totalLocation"
                component={FieldErrorMessage}
              />
            </div>

            {/* SUBMIT BUTTON */}
            {/* <div className=" "> */}
            <button
              type="submit"
              disabled={!isEmpty(errors) && !confirmInfo}
              className={`${
                isEmpty(errors) && confirmInfo ? "bg-blue-500" : "bg-gray-300"
              } text-xl text-white  p-3 rounded-2xl w-full`}
            >
              Submit
            </button>
            {/* </div> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default DealerSignupForm;
