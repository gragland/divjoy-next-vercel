import React, { useState } from "react";
import Auth from "./../Auth";
import { useAuth } from "./../../util/auth.js";

function ForgotPass(props) {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email }) => {
    setStatus({ type: "pending" });
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setStatus({
          type: "success",
          message: "Password reset email sent"
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
      mode="forgotpass"
      buttonText={props.buttonText}
      parentColor={props.parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default ForgotPass;
