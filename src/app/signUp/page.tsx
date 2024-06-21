import React from "react";
import { Card } from "@/components/ui/card";
import SignUpForm from "@/components/modals/signUp";
import BackgroundImage from "../../../public/images/imag4.png";
import Link from "next/link";

function SignUpPage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Card className="relative rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">GET STARTED</h2>
        <SignUpForm />
      </Card>
    </div>
  );
}

export default SignUpPage;
