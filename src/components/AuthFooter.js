import React from "react";
import Link from "next/link";
import "./AuthFooter.scss";

function AuthFooter(props) {
  return (
    <div className="AuthFooter has-text-centered">
      {props.type === "signup" && (
        <>
          Have an account already?
          <Link href="/auth/signin">
            <a>{props.typeValues.linkTextSignin}</a>
          </Link>
        </>
      )}

      {props.type === "signin" && (
        <>
          <Link href="/auth/signup">
            <a>{props.typeValues.linkTextSignup}</a>
          </Link>

          <Link href="/auth/forgotpass">
            <a>{props.typeValues.linkTextForgotpass}</a>
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
