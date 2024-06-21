"use client";
import React, { useState } from "react";
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
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";

type ContactFormValues = {
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const methods = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Card className="relative rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <FormDescription className="mb-6 px-4 md:px-10 mt-2 text-center">
          Have any questions, feedback, or inquiries? We'd love to hear from
          you. Feel free to reach out to us using the form below.
        </FormDescription>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="email"
            control={methods.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={methods.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center">
            <Button className="font-semibold" type="submit">
              Send
            </Button>
          </div>
        </form>
      </Card>
    </FormProvider>
  );
};

export default ContactForm;
