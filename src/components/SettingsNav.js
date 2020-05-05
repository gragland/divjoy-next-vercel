import React from "react";

function SettingsNav(props) {
  return (
    <div className="tabs is-toggle is-centered">
      <ul>
        <li
          className={"" + (props.activeKey === "general" ? " is-active" : "")}
        >
          <a onClick={() => props.onSelect("general")}>General</a>
        </li>
        <li
          className={"" + (props.activeKey === "password" ? " is-active" : "")}
        >
          <a onClick={() => props.onSelect("password")}>Password</a>
        </li>
      </ul>
    </div>
  );
}

export default SettingsNav;
