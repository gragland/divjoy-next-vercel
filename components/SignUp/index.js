import React, { useState } from "react";
import Auth from "./../Auth";
import { useAuth } from "./../../util/auth.js";

function SignUp(props) {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email, pass }) => {
    setStatus({ type: "pending" });
    auth
      .signup(email, pass)
      .then(user => {
        props.onSignup && props.onSignup();
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
      mode="signup"
      buttonText={props.buttonText}
      parentColor={props.parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default SignUp;
