import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";

function ContentSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={2}
        />
      </div>
    </Section>
  );
}

export default ContentSection;
