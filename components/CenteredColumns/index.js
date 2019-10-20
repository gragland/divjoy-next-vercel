import React from "react";

function CenteredColumns(props) {
  return (
    <div className="columns is-centered is-variable is-4 is-multiline">
      {props.children}
    </div>
  );
}

export default CenteredColumns;
