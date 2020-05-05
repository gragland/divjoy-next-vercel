import React, { useState } from "react";
import FormAlert from "./FormAlert";
import AuthForm from "./AuthForm";
import AuthSocial from "./AuthSocial";
import AuthFooter from "./AuthFooter";
import { useRouter } from "next/router";
import "./Auth.scss";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <FormAlert
          type={formAlert.type}
          message={formAlert.message}
        ></FormAlert>
      )}

      <AuthForm
        type={props.type}
        typeValues={props.typeValues}
        parentColor={props.parentColor}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      ></AuthForm>

      {["signup", "signin"].includes(props.type) && (
        <>
          {props.providers && props.providers.length && (
            <>
              <div className="Auth__social-divider has-text-centered is-size-7">
                OR
              </div>
              <AuthSocial
                type={props.type}
                buttonText={props.typeValues.buttonText}
                showLastUsed={true}
                providers={props.providers}
                onAuth={handleAuth}
                onError={(message) => {
                  handleFormAlert({
                    type: "error",
                    message: message,
                  });
                }}
              ></AuthSocial>
            </>
          )}

          <AuthFooter
            type={props.type}
            typeValues={props.typeValues}
          ></AuthFooter>
        </>
      )}
    </>
  );
}

export default Auth;
