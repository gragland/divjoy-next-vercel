import React from "react";
import ContentSection from "./../../components/ContentSection";
import TeamBiosSection from "./../../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <ContentSection
        color="primary"
        size="large"
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
      />
    </>
  );
}

export default AboutPage;
