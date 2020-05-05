import React, { useState } from "react";
import FormAlert from "./FormAlert";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import { useAuth } from "./../util/auth.js";
import { useForm } from "react-hook-form";
import { useUser, updateUser } from "./../util/db.js";

function SettingsGeneral(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  // Fetch user from database
  const uid = auth.user && auth.user.uid;
  const { data: user, status } = useUser(uid);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    return auth
      .updateEmail(data.email)
      .then(() => {
        // Update user in database
        return updateUser(user.uid, data).then(() => {
          // Show success alert message
          setFormAlert({
            type: "success",
            message: "Your profile has been updated",
          });
        });
      })
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          // Remove existing alert message
          setFormAlert(null);

          // Show re-authentication modal and
          // then re-call onSubmit() when done.
          props.onRequireReauth(() => {
            onSubmit({ email: data.email });
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

  // Show loading indicator until
  // database query completes.
  if (status === "loading") {
    return "Loading ...";
  }

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
          name="name"
          type="text"
          label="Name"
          defaultValue={user.name}
          placeholder="Name"
          error={errors.name}
          inputRef={register({
            required: "Please enter your name",
          })}
        ></FormField>
        <FormField
          name="email"
          type="email"
          label="Email"
          defaultValue={user.email}
          placeholder="Email"
          error={errors.email}
          inputRef={register({
            required: "Please enter your email",
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

export default SettingsGeneral;
