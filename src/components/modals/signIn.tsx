"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import Link from "next/link";
import { Card } from "../ui/card";

type SignInFormValues = {
  emailOrUsername: string;
  password: string;
};

type SignInFormProps = {
  closeModal: () => void;
};

const SignInForm: React.FC<SignInFormProps> = ({ closeModal }) => {
  const methods = useForm<SignInFormValues>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<SignInFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 transition-opacity bg-black">
      <FormProvider {...methods}>
        <Card className="relative rounded-lg shadow-lg p-8 max-w-md w-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-4 text-2xl"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center mb-6">
            Hello [name], please sign in to access your admin rights.
          </h2>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="emailOrUsername"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email or username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                      />
                      <Button
                        size={"icon"}
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent hover:bg-transparent text-primary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                        />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center">
              <Button className="font-semibold" type="submit">
                <Link href={"/dashboard/profile"}>Sign In</Link>
              </Button>
            </div>
          </form>
        </Card>
      </FormProvider>
    </div>
  );
};

export default SignInForm;
