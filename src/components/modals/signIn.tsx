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
} from "../ui/form";

type SignInFormValues = {
  emailOrUsername: string;
  password: string;
};

const SignInForm: React.FC = () => {
  const methods = useForm<SignInFormValues>();

  const onSubmit: SubmitHandler<SignInFormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="emailOrUsername"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email or Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email or username" {...field} />
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
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <Button className="font-semibold" type="submit">
            Sign In
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
