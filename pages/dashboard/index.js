import React, { useEffect } from "react";
import DashboardSection from "./../../components/DashboardSection";
import { useAuth } from "./../../util/auth.js";
import { useRouter } from "next/router";

function DashboardPage(props) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/signin");
    }
  }, [auth, router]);

  return (
    <DashboardSection
      color="white"
      size="large"
      title="Dashboard"
      subtitle="Dashboard components are coming to the Divjoy library soon. For now, you can implement a custom dashboard here after exporting your code."
    />
  );
}

export default DashboardPage;
