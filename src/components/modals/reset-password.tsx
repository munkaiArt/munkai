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
import { Card } from "../ui/card";

type ResetPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

type ResetPasswordFormProps = {
  closeModal: () => void;
};

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  closeModal,
}) => {
  const methods = useForm<ResetPasswordFormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = (data) => {
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
            Reset Password
          </h2>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="password"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your new password"
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
            <FormField
              name="confirmPassword"
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your new password"
                        {...field}
                      />
                      <Button
                        size={"icon"}
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent hover:bg-transparent text-primary"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <FontAwesomeIcon
                          icon={showConfirmPassword ? faEyeSlash : faEye}
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
                Reset Password
              </Button>
            </div>
          </form>
        </Card>
      </FormProvider>
    </div>
  );
};

export default ResetPasswordForm;
