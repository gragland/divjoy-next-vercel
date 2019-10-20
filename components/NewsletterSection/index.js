import React from "react";
import Section from "./../Section";
import Newsletter from "./../Newsletter";

function NewsletterSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12 is-10-fullhd">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="title">{props.title}</div>
                <div className="subtitle">{props.subtitle}</div>
              </div>
              <div className="column is-half">
                <Newsletter
                  parentColor={props.color}
                  buttonText={props.buttonText}
                  inputPlaceholder={props.inputPlaceholder}
                  subscribedMessage={props.subscribedMessage}
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSection;
