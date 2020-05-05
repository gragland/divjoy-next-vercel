import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import "./HeroSection.scss";

function HeroSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            ></SectionHeader>
            <div className="buttons is-inline-flex">
              <SectionButton
                parentColor={props.color}
                size="medium"
                onClick={props.buttonOnClick}
              >
                {props.buttonText}
              </SectionButton>
            </div>
          </div>
          <div className="column is-1"></div>
          <div className="column">
            <figure className="HeroSection__image image">
              <img src={props.image} alt="Illustration"></img>
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
