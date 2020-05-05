import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <HeroSection2
        color="primary"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      ></HeroSection2>
      <TeamBiosSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      ></TeamBiosSection>
    </>
  );
}

export default AboutPage;
