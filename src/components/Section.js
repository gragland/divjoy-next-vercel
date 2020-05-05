import React from "react";
import BackgroundImage from "./BackgroundImage";
import "./Section.scss";

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    backgroundImageRepeat,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        "SectionComponent hero section is-block is-relative" +
        (color ? ` is-${color}` : "") +
        (size ? ` is-${size}` : "")
      }
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
          repeat={backgroundImageRepeat}
        ></BackgroundImage>
      )}

      {props.children}
    </section>
  );
}

export default Section;
