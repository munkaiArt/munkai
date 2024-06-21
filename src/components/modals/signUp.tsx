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
                <Input placeholder="Enter your username" {...field} />
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
        <FormField
          name="confirmPassword"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <Button className="font-semibold" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
