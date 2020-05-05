import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

function TeamBiosSection(props) {
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
          size={3}
          spaced={true}
          className="has-text-centered"
        ></SectionHeader>
        <TeamBios
          people={[
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "John Smith",
              role: "Software Engineer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Lisa Zinn",
              role: "Software Engineer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Diana Low",
              role: "Designer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
          ]}
        ></TeamBios>
      </div>
    </Section>
  );
}

export default TeamBiosSection;
