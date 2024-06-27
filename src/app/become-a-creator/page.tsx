"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "../../components/ui/form";
import { Textarea } from "../../components/ui/textarea";
import { Card } from "../../components/ui/card";
import MultiSelectDropdown from "@/components/ui/MultiSelectDropdown";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "../../components/ui/select";

type CreatorFormValues = {
  name: string;
  description: string;
};

type CreatorFormProps = {
  closeModal: () => void;
};

const genres = [
  { label: "ADVENTURE", value: "1" },
  { label: "SLICE OF LIFE", value: "2" },
  { label: "ACTION", value: "3" },
  { label: "DETECTIVE", value: "4" },
  { label: "ROMANCE", value: "5" },
  { label: "ADULT", value: "6" },
  { label: "EPIC FANTASY", value: "7" },
  { label: "THRILLER", value: "8" },
  { label: "DRAMA", value: "9" },
  { label: "FAMILY", value: "10" },
  { label: "HORROR", value: "11" },
];

const CreatorForm: React.FC<CreatorFormProps> = ({ closeModal }) => {
  const methods = useForm<CreatorFormValues>();
  const onSubmit: SubmitHandler<CreatorFormValues> = (data) => {
    console.log(data);
  };

  const handleGenreSelect = () => {
    // logic here
  };

  const handleChapterCountSelect = () => {
    //logic here
  };

  return (
    <div className="container mx-auto h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 mt-10">
        Become a Creator
      </h2>
      <FormProvider {...methods}>
        <Card className="rounded-lg shadow-none border-none bg-secondary p-8 max-w-2xl mx-auto w-full">
          <FormDescription className="mb-6 px-4 md:px-10 mt-2 text-center">
            Please, fill in the form below to become a Creator
          </FormDescription>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center justify-between gap-x-4 my-4">
              <FormField
                name="name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        className="border-none bg-hover focus-visible:ring-0 font-semibold"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        className="border-none bg-hover focus-visible:ring-0 font-semibold"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-between gap-x-4 my-4">
              <FormField
                name="name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Twitter Handle</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="@twitter"
                        className="border-none bg-hover focus-visible:ring-0 font-semibold"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Telegram Handle</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="@telegram"
                        className="border-none bg-hover focus-visible:ring-0 font-semibold"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-between gap-x-4 my-4">
              <FormField
                name="name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>LinkedIn Url</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="www.linkedIn.com/name"
                        className="border-none bg-hover focus-visible:ring-0 font-semibold"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Portfolio Url</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="www.behance/name"
                        className="border-none bg-hover focus-visible:ring-0 font-semibold"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-between gap-x-4 my-4">
              <Select>
                <SelectTrigger className="flex-1 border-none bg-hover">
                  <SelectValue placeholder="Select your chapter count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Chapter count</SelectLabel>
                    <SelectItem value="below50">1-50</SelectItem>
                    <SelectItem value="above50">50-100</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <MultiSelectDropdown
                label="Select genres"
                multiValue={true}
                options={genres}
                onChange={handleGenreSelect}
                classname="border-none flex-1"
              />
            </div>
            <div>
              <p className="text-xs mb-4">
                I agree to Munkai's Terms of services and privacy policy .
              </p>
            </div>
            <div>
              <div className="my-4 flex items-center justify-center gap-x-4">
                <Button className="font-semibold">Submit</Button>
              </div>
            </div>
          </form>
        </Card>
      </FormProvider>
    </div>
  );
};

export default CreatorForm;
