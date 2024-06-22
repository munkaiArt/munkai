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
import { Card } from "../ui/card";

type ForgotPasswordFormValues = {
  email: string;
};

type ForgotPasswordFormProps = {
  closeModal: () => void;
};

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  closeModal,
}) => {
  const methods = useForm<ForgotPasswordFormValues>();

  const onSubmit: SubmitHandler<ForgotPasswordFormValues> = (data) => {
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
            Forgot Password
          </h2>
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
            <div className="flex items-center justify-center">
              <Button className="font-semibold" type="submit">
                Send Reset Link
              </Button>
            </div>
          </form>
        </Card>
      </FormProvider>
    </div>
  );
};

export default ForgotPasswordForm;
