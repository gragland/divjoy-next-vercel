import React, { useState } from "react";
import FormStatus from "./../FormStatus";
import FormField from "./../FormField";
import SectionButton from "./../SectionButton";

function ContactForm(props) {
  // State for input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Whether to show errors
  // We set to true if they submit and there are errors.
  // We only show errors after they submit because
  // it's annoying to see errors while typing.
  const [showErrors, setShowErrors] = useState(false);

  // Error array we'll populate
  let errors = [];

  // Function for fetching error for a field
  const getError = field => {
    return errors.find(e => e.field === field);
  };

  // Function to see if field is empty
  const isEmpty = val => val.trim() === "";

  // Add error if email empty
  if (isEmpty(email)) {
    errors.push({
      field: "email",
      message: "Please enter an email"
    });
  }

  // Add error if message empty
  if (isEmpty(message)) {
    errors.push({
      field: "message",
      message: "Please enter a message"
    });
  }

  // Add error if name shown and empty
  if (props.showNameField) {
    if (isEmpty(name)) {
      errors.push({
        field: "name",
        message: "Please enter your name"
      });
    }
  }

  // Handle form submission
  const handleSubmit = e => {
    // If field errors then show them
    if (errors.length) {
      setShowErrors(true);
    } else {
      // Otherwise call onSubmit with form data
      if (props.onSubmit) {
        props.onSubmit({
          name,
          email,
          message
        });
      }
    }
  };

  return (
    <>
      {props.status && props.status.message && (
        <FormStatus type={props.status.type} message={props.status.message} />
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="field is-horizontal">
          <div className="field-body">
            {props.showNameField && (
              <FormField
                value={name}
                type="text"
                placeholder="Name"
                error={showErrors && getError("name")}
                onChange={value => setName(value)}
              />
            )}

            <FormField
              value={email}
              type="email"
              placeholder="Email"
              error={showErrors && getError("email")}
              onChange={value => setEmail(value)}
            />
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <FormField
              value={message}
              type="textarea"
              placeholder="Message"
              error={showErrors && getError("message")}
              onChange={value => setMessage(value)}
            />
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <SectionButton
                  parentColor={props.parentColor}
                  size="medium"
                  state={
                    props.status && props.status.type === "pending"
                      ? "loading"
                      : "normal"
                  }
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

export default ContactForm;
