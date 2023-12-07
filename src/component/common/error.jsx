import React from "react";

const FieldErrorMessage = (props) => (
  <div className="text-red-500 text-left">
    {/* <Translate text={props.children} /> */}
    {props.children}
  </div>
);

export default FieldErrorMessage;
