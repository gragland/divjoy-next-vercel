import React, { useState, useEffect, useContext, createContext } from "react";
import queryString from "query-string";
import firebase from "./firebase";
import { createUser } from "./db";

const authContext = createContext();

// Context Provider component that wraps your app and makes auth object
// available to any child component that calls the useAuth() hook.
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook that enables any component to subscribe to auth state
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  // Handle a new user object (updates db and sets user state)
  const handleUser = (rawUser) => {
    if (rawUser) {
      // Get user object in format expected by front-end
      const user = formatUser(rawUser);

      // Add or update user in database
      createUser(user.uid, { email: user.email });

      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => handleUser(response.user));
  };

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => handleUser(response.user));
  };

  const signinWithProvider = (providerName) => {
    const { providerMethod, parameters } = providers.find(
      (p) => p.name === providerName
    );

    const provider = new providerMethod();
    if (parameters) {
      provider.setCustomParameters(parameters);
    }

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => handleUser(response.user));
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (password, code) => {
    // Get code from query string object
    const resetCode = code || getFromQueryString("oobCode");

    return firebase
      .auth()
      .confirmPasswordReset(resetCode, password)
      .then(() => {
        return true;
      });
  };

  const updateEmail = (email) => {
    return firebase
      .auth()
      .currentUser.updateEmail(email)
      .then(() => {
        handleUser(firebase.auth().currentUser);
      });
  };

  const updatePassword = (password) => {
    return firebase.auth().currentUser.updatePassword(password);
  };

  useEffect(() => {
    // Subscribe to user on mount
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    // Unsubscribe on cleanup
    return () => unsubscribe();
  }, []);

  return {
    user,
    signup,
    signin,
    signinWithProvider,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    updateEmail,
    updatePassword,
  };
}

// Format user object
// If there are extra fields you want from the original user
// object then you'd add those here.
const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    // Create an array containing the user's providers (password, google, etc).
    providers: user.providerData.map(({ providerId }) => {
      // Get the name for this providerId
      return providers.find((p) => p.id === providerId).name;
    }),
  };
};

const providers = [
  {
    id: "password",
    name: "password",
  },
  {
    id: "google.com",
    name: "google",
    providerMethod: firebase.auth.GoogleAuthProvider,
  },
  {
    id: "facebook.com",
    name: "facebook",
    providerMethod: firebase.auth.FacebookAuthProvider,
    parameters: {
      // Tell fb to show popup size UI instead of full website
      display: "popup",
    },
  },
  {
    id: "twitter.com",
    name: "twitter",
    providerMethod: firebase.auth.TwitterAuthProvider,
  },
  {
    id: "github.com",
    name: "github",
    providerMethod: firebase.auth.GithubAuthProvider,
  },
];

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};
