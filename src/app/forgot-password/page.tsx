import ForgotPasswordForm from "@/components/modals/forgotPassword";
import { Card } from "@/components/ui/card";
import React from "react";
import BackgroundImage from "../../../public/images/img3.png";

function ForgotPasswordPage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Card className="relative z-10 bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <ForgotPasswordForm />
      </Card>
    </div>
  );
}

export default ForgotPasswordPage;
