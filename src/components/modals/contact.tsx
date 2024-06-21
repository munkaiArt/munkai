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
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";

type ContactFormValues = {
  email: string;
  message: string;
};

type ContactFormProps = {
  closeModal: () => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ closeModal }) => {
  const methods = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 transition-opacity bg-black dark:bg-opacity-50">
      <FormProvider {...methods}>
        <Card className="relative rounded-lg shadow-lg p-8 max-w-md w-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-4 text-2xl"
          >
            &times;
          </button>
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
                    <Textarea placeholder="Enter your message" {...field} />
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
    </div>
  );
};

export default ContactForm;
