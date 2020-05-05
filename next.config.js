const withSass = require("@zeit/next-sass");

let nextConfig = {
  // Environment vars exposed to client-side
  env: {
    REACT_APP_FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,

    REACT_APP_FORMSPREE_CONTACT_ID: process.env.FORMSPREE_CONTACT_ID,

    REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID:
      process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  },
};

nextConfig = withSass(nextConfig);

module.exports = nextConfig;
