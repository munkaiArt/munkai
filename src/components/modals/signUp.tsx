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

type SignUpFormValues = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm: React.FC = () => {
  const methods = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
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
                <Input type="email" placeholder="Enter your email" {...field} />
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
    </FormProvider>
  );
};

export default SignUpForm;
