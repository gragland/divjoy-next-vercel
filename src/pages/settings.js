import React, { useEffect } from "react";
import SettingsSection from "./../components/SettingsSection";
import { useAuth } from "./../util/auth.js";
import { useRouter } from "next/router";

function SettingsPage(props) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/auth/signin");
    }
  }, [auth, router]);

  // Show loading until we have user
  if (!auth.user) {
    return "Loading...";
  }

  return (
    <SettingsSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
    ></SettingsSection>
  );
}

export default SettingsPage;
