import React, { useState } from "react";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import { useAuth } from "./../util/auth.js";
import { useForm } from "react-hook-form";

function AuthForm(props) {
  const auth = useAuth();

  const [pending, setPending] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();

  const submitHandlersByType = {
    signin: ({ email, pass }) => {
      return auth.signin(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    signup: ({ email, pass }) => {
      return auth.signup(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    forgotpass: ({ email }) => {
      return auth.sendPasswordResetEmail(email).then(() => {
        // Show success alert message
        props.onFormAlert({
          type: "success",
          message: "Password reset email sent",
        });
      });
    },
    changepass: ({ pass }) => {
      return auth.confirmPasswordReset(pass).then(() => {
        // Show success alert message
        props.onFormAlert({
          type: "success",
          message: "Your password has been changed",
        });
      });
    },
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    // Show pending indicator
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[props.type]({
      email,
      pass,
    })
      .catch((error) => {
        // Show error alert message
        props.onFormAlert({
          type: "error",
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {["signup", "signin", "forgotpass"].includes(props.type) && (
        <FormField
          name="email"
          type="email"
          placeholder="Email"
          error={errors.email}
          inputRef={register({
            required: "Please enter an email",
          })}
        ></FormField>
      )}

      {["signup", "signin", "changepass"].includes(props.type) && (
        <FormField
          size={props.inputSize}
          name="pass"
          type="password"
          placeholder="Password"
          error={errors.pass}
          inputRef={register({
            required: "Please enter a password",
          })}
        ></FormField>
      )}

      {["signup", "changepass"].includes(props.type) && (
        <FormField
          size={props.inputSize}
          name="confirmPass"
          type="password"
          placeholder="Confirm Password"
          error={errors.confirmPass}
          inputRef={register({
            required: "Please enter your password again",
            validate: (value) => {
              if (value === getValues().pass) {
                return true;
              } else {
                return "This doesn't match your password";
              }
            },
          })}
        ></FormField>
      )}

      <div className="field">
        <p className="control ">
          <SectionButton
            parentColor={props.parentColor}
            size="medium"
            fullWidth={true}
            state={pending ? "loading" : "normal"}
          >
            {props.typeValues.buttonText}
          </SectionButton>
        </p>
      </div>
    </form>
  );
}

export default AuthForm;
