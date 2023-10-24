import * as Yup from "yup";

const DealerSignupFormValidationSchema = () => {
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
      .max(10, "Phone number must contains at max 10 digits."),
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
      .min(0, "Number of location should be atleast of 1*")
      .required(),
  });
};
