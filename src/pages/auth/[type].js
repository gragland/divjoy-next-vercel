import React from "react";
import AuthSection from "./../../components/AuthSection";
import { useRouter } from "next/router";

function AuthTypePage(props) {
  const router = useRouter();
  const { type } = router.query;

  return (
    <AuthSection
      color="white"
      size="large"
      backgroundImage=""
      backgroundImageOpacity={1}
      type={type}
      providers={["google", "facebook", "twitter"]}
      afterAuthPath="/dashboard"
    ></AuthSection>
  );
}

// Tell Next.js to export static files for each auth page
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = () => ({
  paths: [
    { params: { type: "signin" } },
    { params: { type: "signup" } },
    { params: { type: "forgotpass" } },
    { params: { type: "changepass" } },
  ],
  fallback: true,
});

export function getStaticProps({ params }) {
  return { props: {} };
}

export default AuthTypePage;
