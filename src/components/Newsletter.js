import React, { useState } from "react";
import SectionButton from "./SectionButton";
import newsletter from "./../util/newsletter.js";
import { useForm } from "react-hook-form";

function Newsletter(props) {
  const [subscribed, setSubscribed] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = ({ email }) => {
    setSubscribed(true);
    // Parent component can optionally
    // find out when subscribed.
    props.onSubscribed && props.onSubscribed();
    // Subscribe them
    newsletter.subscribe({ email });
  };

  return (
    <>
      {subscribed === false && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input
                className={`input is-${props.size}`}
                name="email"
                type="email"
                placeholder={props.inputPlaceholder}
                ref={register({
                  required: "Please enter an email address",
                })}
              ></input>
            </div>
            <div className="control">
              <SectionButton
                parentColor={props.parentColor}
                size={props.size}
                type="submit"
              >
                {props.buttonText}
              </SectionButton>
            </div>
          </div>

          {errors.email && (
            <p className="help is-danger has-text-left">
              {errors.email.message}
            </p>
          )}
        </form>
      )}

      {subscribed === true && <div>{props.subscribedMessage}</div>}
    </>
  );
}

export default Newsletter;
