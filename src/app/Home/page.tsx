import React from "react";
import Hero from "@/components/landingPage/hero";
import Started from "@/components/landingPage/started";
import TopCreators from "@/components/landingPage/topCreators";
import Info from "@/components/landingPage/info";
import Guides from "@/components/landingPage/guides";

function LandingPage() {
  return (
    <main className="flex-grow">
      <Hero />
      <Started />
      <Info />
      <TopCreators />
      <Guides />
    </main>
  );
}

export default LandingPage;
