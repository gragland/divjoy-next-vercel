import React, { useState } from "react";
import Auth from "./../Auth";
import { useAuth } from "./../../util/auth.js";

function ChangePass(props) {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ pass }) => {
    setStatus({ type: "pending" });
    auth
      .confirmPasswordReset(pass)
      .then(() => {
        setStatus({
          type: "success",
          message: "Your password has been changed"
        });
      })
      .catch(error => {
        setStatus({
          type: "error",
          message: error.message
        });
      });
  };

  return (
    <Auth
      mode="changepass"
      buttonText={props.buttonText}
      parentColor={props.parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default ChangePass;
