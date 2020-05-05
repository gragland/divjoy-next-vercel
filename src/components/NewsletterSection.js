import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Newsletter from "./Newsletter";

function NewsletterSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12 is-10-fullhd">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <SectionHeader
                  title={props.title}
                  subtitle={props.subtitle}
                  size={3}
                  spaced={false}
                ></SectionHeader>
              </div>
              <div className="column is-half">
                <Newsletter
                  parentColor={props.color}
                  buttonText={props.buttonText}
                  inputPlaceholder={props.inputPlaceholder}
                  subscribedMessage={props.subscribedMessage}
                  size="medium"
                ></Newsletter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSection;
