import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg"
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
