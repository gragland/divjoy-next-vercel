import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Pricing from "./Pricing";
import "./PricingSection.scss";

function PricingSection(props) {
  return (
    <Section
      id="pricing"
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="PricingSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        ></SectionHeader>
        <Pricing
          buttonText="Choose"
          onChoosePlan={(planId) => {
            // Add your own payments logic here
            alert(`You chose the plan "${planId}"`);
          }}
          items={[
            {
              id: "starter",
              name: "Starter",
              price: "10",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam.",
            },
            {
              id: "plus",
              name: "Plus",
              price: "20",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam.",
            },
            {
              id: "pro",
              name: "Pro",
              price: "40",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam.",
            },
          ]}
        ></Pricing>
      </div>
    </Section>
  );
}

export default PricingSection;
