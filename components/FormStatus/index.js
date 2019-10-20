import React from "react";

function FormStatus(props) {
  return (
    <div
      className={
        "notification" +
        (props.type === "error" ? " is-danger" : "") +
        (props.type === "success" ? " is-success" : "")
      }
    >
      {props.message}
    </div>
  );
}

export default FormStatus;
