import React, { useEffect, useState } from "react";
import { useAuth } from "./../util/auth.js";
import "./AuthSocial.scss";

function AuthSocial(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(null);
  const [lastUsed, setLastUsed] = useState(null);

  const providerDisplayNames = {
    google: "Google",
    facebook: "Facebook",
    twitter: "Twitter",
    github: "GitHub",
  };

  const onSigninWithProvider = (provider) => {
    setPending(provider);
    auth
      .signinWithProvider(provider)
      .then((user) => {
        // Remember this provider was last used
        // so we can indicate for next login.
        localStorage.setItem("lastUsedAuthProvider", provider);
        props.onAuth(user);
      })
      .catch((error) => {
        props.onError(error.message);
      })
      .finally(() => {
        setPending(null);
      });
  };

  // Get value of last used auth provider
  useEffect(() => {
    if (props.showLastUsed) {
      const lastUsed = localStorage.getItem("lastUsedAuthProvider");
      if (lastUsed) {
        setLastUsed(lastUsed);
      }
    }
  }, [props.showLastUsed]);

  return (
    <div className="buttons">
      {props.providers.map((provider) => (
        <button
          className={
            "button is-medium is-fullwidth" +
            (pending === provider ? " is-loading" : "")
          }
          onClick={() => {
            onSigninWithProvider(provider);
          }}
          key={provider}
        >
          <div className="AuthSocial__icon icon">
            <img
              src={`https://uploads.divjoy.com/icon-${provider}.svg`}
              alt={providerDisplayNames[provider]}
            ></img>
          </div>
          <span>
            {props.buttonText} with {providerDisplayNames[provider]}
          </span>

          {provider === lastUsed && (
            <span className="AuthSocial__tag tag is-warning">Last used</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default AuthSocial;
