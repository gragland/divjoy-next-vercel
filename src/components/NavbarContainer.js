import React from "react";

function NavbarContainer(props) {
  return (
    <nav
      className={
        "navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")
      }
    >
      {props.children}
    </nav>
  );
}

export default NavbarContainer;
