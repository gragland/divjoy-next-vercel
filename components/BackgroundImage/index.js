import React from "react";
import "./styles.scss";

function BackgroundImage(props) {
  return (
    <div
      className="BackgroundImage"
      style={{
        "--image": `url(${props.image})`,
        "--opacity": props.opacity
      }}
    />
  );
}

export default BackgroundImage;
