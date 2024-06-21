import React from "react";
import { Card } from "@/components/ui/card";
import SignInForm from "@/components/modals/signIn";
import BackgroundImage from "../../../public/images/img2.png";
import Link from "next/link";

function SignInPage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Card className="relative rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          HI! WELCOME BACK
        </h2>
        <SignInForm />
        <div className="w-full mt-4 text-xs">
          <p className="lg:-ml-4 flex justify-center font-medium items-center text-secondary-foreground">
            Forgot your password?&nbsp;
            <Link className="text-primary font-bold" href="/forgot-password">
              Reset Password
            </Link>
          </p>

          <p className="flex justify-center items-center text-secondary-foreground mt-1">
            If you don&apos;t have an account, please&nbsp;
            <Link className="text-primary font-bold" href="/signUp">
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default SignInPage;
