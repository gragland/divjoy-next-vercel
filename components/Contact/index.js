import React, { useState } from "react";
import ContactForm from "./../ContactForm";
import contact from "./../../util/contact.js";

function Contact(props) {
  const [status, setStatus] = useState();

  const onSubmit = ({ name, email, message }) => {
    setStatus({ type: "pending" });

    contact.submit({ name, email, message }).then(() => {
      setStatus({
        type: "success",
        message: "Your message has been sent! We'll get back to you soon."
      });
    });
  };
  return (
    <ContactForm
      parentColor={props.parentColor}
      showNameField={props.showNameField}
      buttonText={props.buttonText}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default Contact;
