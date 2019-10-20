import React from "react";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import App from "next/app";
import "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./../../styles/style.scss";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ProvideAuth>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Component {...pageProps} />

          <Footer
            color="light"
            size="normal"
            logo="https://uploads.divjoy.com/logo.svg"
            copyright="© 2019 Company"
          />
        </>
      </ProvideAuth>
    );
  }
}

export default MyApp;
