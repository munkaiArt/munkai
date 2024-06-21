import React from "react";
import { Card } from "@/components/ui/card";
import SignInForm from "@/components/modals/signIn";
import BackgroundImage from "../../../public/images/img2.png";

function SignInPage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Card className="relative rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <SignInForm />
      </Card>
    </div>
  );
}

export default SignInPage;
