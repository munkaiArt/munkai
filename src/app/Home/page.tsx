import React from "react";
import Navbar from "@/components/landingPage/navbar";
import Hero from "@/components/landingPage/hero";
import Started from "@/components/landingPage/started";
import Footer from "@/components/landingPage/footer";
import MunkaiPubs from "@/components/landingPage/mpubs";
import Info from "@/components/landingPage/info";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Started />
      <MunkaiPubs />
      <Info />
      <Footer />
    </div>
  );
}

export default LandingPage;
