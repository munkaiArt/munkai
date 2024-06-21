import React from "react";
import Hero from "@/components/landingPage/hero";
import Started from "@/components/landingPage/started";
import MunkaiPubs from "@/components/landingPage/mpubs";
import Info from "@/components/landingPage/info";
import Guides from "@/components/landingPage/guides";

function LandingPage() {
  return (
    <main className="flex-grow">
      <Hero />
      <Started />
      <MunkaiPubs />
      <Info />
      <Guides />
    </main>
  );
}

export default LandingPage;
