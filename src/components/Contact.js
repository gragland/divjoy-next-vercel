import React, { useState } from "react";
import FormAlert from "./FormAlert";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import contact from "./../util/contact.js";
import { useForm } from "react-hook-form";

function Contact(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = ({ name, email, message }) => {
    // Show pending indicator
    setPending(true);

    contact
      .submit({ name, email, message })
      .then(() => {
        // Clear form
        reset();
        // Show success alert message
        setFormAlert({
          type: "success",
          message: "Your message has been sent!",
        });
      })
      .catch((error) => {
        // Show error alert message
        setFormAlert({
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
    <>
      {formAlert && (
        <FormAlert
          type={formAlert.type}
          message={formAlert.message}
        ></FormAlert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field is-horizontal">
          <div className="field-body">
            {props.showNameField && (
              <FormField
                name="name"
                type="text"
                placeholder="Name"
                error={errors.name}
                inputRef={register({
                  required: "Please enter your name",
                })}
              ></FormField>
            )}

            <FormField
              name="email"
              type="email"
              placeholder="Email"
              error={errors.email}
              inputRef={register({
                required: "Please enter your email",
              })}
            ></FormField>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <FormField
              name="message"
              type="textarea"
              placeholder="Message"
              rows={5}
              error={errors.message}
              inputRef={register({
                required: "Please enter a message",
              })}
            ></FormField>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <SectionButton
                  parentColor={props.parentColor}
                  size="medium"
                  state={pending ? "loading" : "normal"}
                >
                  {props.buttonText}
                </SectionButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
