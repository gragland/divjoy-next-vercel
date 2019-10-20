import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import ChangePass from "./../ChangePass";

function ChangePassSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <ChangePass buttonText={props.buttonText} parentColor={props.color} />
      </div>
    </Section>
  );
}

export default ChangePassSection;
