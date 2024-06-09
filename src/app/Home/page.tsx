import Link from "next/link";
import React from "react";

function LandingPage() {
  return (
    <div>
      <Link href={"/dashboard/profile"}>Open App</Link>
    </div>
  );
}

export default LandingPage;
