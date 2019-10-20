import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import Link from "next/link";
import { useAuth } from "./../../util/auth.js";

function Navbar(props) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <a>
                <img className="image" src={props.logo} alt="Logo" />
              </a>
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link href="/">
                  <a className="navbar-link">Account</a>
                </Link>

                <div className="navbar-dropdown is-boxed">
                  <Link href="/dashboard">
                    <a className="navbar-item">Dashboard</a>
                  </Link>

                  <Link href="/signout">
                    <a
                      className="navbar-item"
                      onClick={e => {
                        e.preventDefault();
                        auth.signout();
                      }}
                    >
                      Sign out
                    </a>
                  </Link>
                </div>
              </div>
            )}

            {!auth.user && (
              <Link href="/signin">
                <a className="navbar-item">Sign in</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
