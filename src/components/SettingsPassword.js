import React, { useState } from "react";
import FormAlert from "./FormAlert";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import { useAuth } from "./../util/auth.js";
import { useForm } from "react-hook-form";

function SettingsPassword(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const { register, handleSubmit, errors, reset, getValues } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    auth
      .updatePassword(data.pass)
      .then(() => {
        // Clear form
        reset();
        // Show success alert message
        setFormAlert({
          type: "success",
          message: "Your password has been updated",
        });
      })
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          // Remove existing alert message
          setFormAlert(null);

          // Show re-authentication modal and
          // then re-call onSubmit() when done.
          props.onRequireReauth(() => {
            onSubmit({ pass: data.pass });
          });
        } else {
          // Show error alert message
          setFormAlert({
            type: "error",
            message: error.message,
          });
        }
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <>
      {formAlert && (
        <FormAlert
          type={formAlert.type}
          message={formAlert.message}
        ></FormAlert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="pass"
          type="password"
          label="Password"
          placeholder="Password"
          error={errors.pass}
          inputRef={register({
            required: "Please enter a password",
          })}
        ></FormField>
        <FormField
          name="confirmpass"
          type="password"
          label="Confirm New Password"
          placeholder="Confirm Password"
          error={errors.confirmPass}
          inputRef={register({
            required: "Please enter your new password again",
            validate: (value) => {
              if (value === getValues().pass) {
                return true;
              } else {
                return "This doesn't match your password";
              }
            },
          })}
        ></FormField>
        <div className="field">
          <div className="control">
            <SectionButton
              parentColor={props.parentColor}
              size="medium"
              state={pending ? "loading" : "normal"}
            >
              Save
            </SectionButton>
          </div>
        </div>
      </form>
    </>
  );
}

export default SettingsPassword;
