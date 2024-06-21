import React from "react";
import Navbar from "@/components/landingPage/navbar";
import Hero from "@/components/landingPage/hero";
import Started from "@/components/landingPage/started";
import Footer from "@/components/landingPage/footer";
import MunkaiPubs from "@/components/landingPage/mpubs";
import Info from "@/components/landingPage/info";
import Guides from "@/components/landingPage/guides";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Started />
        <MunkaiPubs />
        <Info />
        <Guides />
      </main>
    </div>
  );
}

export default LandingPage;
