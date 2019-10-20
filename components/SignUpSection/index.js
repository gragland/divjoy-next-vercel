import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SignUp from "./../SignUp";
import { useRouter } from "next/router";

function SignUpSection(props) {
  const router = useRouter();

  // Go to page after signup
  const onSignup = () => {
    router.push("/dashboard");
  };

  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <SignUp
          buttonText={props.buttonText}
          parentColor={props.color}
          onSignup={onSignup}
        />
      </div>
    </Section>
  );
}

export default SignUpSection;
