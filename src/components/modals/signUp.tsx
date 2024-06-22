"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "../ui/form";
import Link from "next/link";
import { Card } from "../ui/card";

type SignUpFormValues = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

type SignUpFormProps = {
  closeModal: () => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ closeModal }) => {
  const methods = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
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
          <h2 className="text-2xl font-bold text-center mb-6">GET STARTED</h2>
          <FormDescription className="mb-6 px-4 md:px-10 mt-2 text-center">
            Join now and discover rare digital literature & Collect NFTs
          </FormDescription>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="username"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Create username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-center">
              <Button className="font-semibold" type="submit">
                <Link href={"/dashboard/profile"}>Sign Up</Link>
              </Button>
            </div>
          </form>
        </Card>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
