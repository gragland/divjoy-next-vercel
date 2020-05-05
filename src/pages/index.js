import React from "react";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import FeaturesSection from "./../components/FeaturesSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="This is a fully functioning web app."
        subtitle={
          <>
            Go ahead, look around! You can even sign in. But please keep in mind
            that if you'd like to use this template in production you'll need to
            purchase a license from{" "}
            <a
              href="https://divjoy.com?utm_campaign=github_code"
              target="_blank"
            >
              divjoy.com
            </a>
            .
          </>
        }
        buttonText="Get Started"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/auth/signup");
        }}
      ></HeroSection>
      <ClientsSection
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title=""
        subtitle=""
      ></ClientsSection>
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      ></FeaturesSection>
      <TestimonialsSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      ></TestimonialsSection>
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      ></NewsletterSection>
    </>
  );
}

export default IndexPage;
