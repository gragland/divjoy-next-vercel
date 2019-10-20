import React, { useState } from "react";
import FormStatus from "./../FormStatus";
import FormField from "./../FormField";
import SectionButton from "./../SectionButton";
import Link from "next/link";
import "./styles.scss";

function Auth(props) {
  // State for all inputs
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

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
  if (["signin", "signup", "forgotpass"].includes(props.mode)) {
    if (isEmpty(email)) {
      errors.push({
        field: "email",
        message: "Please enter an email"
      });
    }
  }

  // Add error if password empty
  if (["signin", "signup", "changepass"].includes(props.mode)) {
    if (isEmpty(pass)) {
      errors.push({
        field: "pass",
        message: "Please enter a password"
      });
    }
  }

  // Add error if confirmPass empty or
  // if it doesn't match pass.
  // Only for signup and changepass views.
  if (["signup", "changepass"].includes(props.mode)) {
    if (isEmpty(confirmPass)) {
      errors.push({
        field: "confirmPass",
        message: "Please confirm password"
      });
    } else if (pass !== confirmPass) {
      errors.push({
        field: "confirmPass",
        message: `This doesn't match your password`
      });
    }
  }

  // Handle form submission
  const handleSubmit = () => {
    // If field errors then show them
    if (errors.length) {
      setShowErrors(true);
    } else {
      // Otherwise call onSubmit with email/pass
      if (props.onSubmit) {
        props.onSubmit({
          email,
          pass
        });
      }
    }
  };

  return (
    <div className="Auth">
      {props.status && props.status.message && (
        <FormStatus type={props.status.type} message={props.status.message} />
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {["signup", "signin", "forgotpass"].includes(props.mode) && (
          <FormField
            value={email}
            type="email"
            placeholder="Email"
            error={showErrors && getError("email")}
            onChange={value => setEmail(value)}
          />
        )}

        {["signup", "signin", "changepass"].includes(props.mode) && (
          <FormField
            value={pass}
            type="password"
            placeholder="Password"
            error={showErrors && getError("pass")}
            onChange={value => setPass(value)}
          />
        )}

        {["signup", "changepass"].includes(props.mode) && (
          <FormField
            value={confirmPass}
            type="password"
            placeholder="Confirm Password"
            error={showErrors && getError("confirmPass")}
            onChange={value => setConfirmPass(value)}
          />
        )}

        <div className="field">
          <p className="control ">
            <SectionButton
              parentColor={props.parentColor}
              size="medium"
              fullWidth={true}
              state={
                props.status && props.status.type === "pending"
                  ? "loading"
                  : "normal"
              }
            >
              {props.buttonText}
            </SectionButton>
          </p>
        </div>

        {["signup", "signin"].includes(props.mode) && (
          <div className="Auth__bottom-link has-text-centered">
            {props.mode === "signup" && (
              <>
                Have an account already?
                <Link href="/signin">
                  <a>Sign in</a>
                </Link>
              </>
            )}

            {props.mode === "signin" && (
              <>
                <Link href="/signup">
                  <a>Create an account</a>
                </Link>

                <Link href="/forgotpass">
                  <a>Forgot password</a>
                </Link>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default Auth;
