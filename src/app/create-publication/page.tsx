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
import { UploadCloud } from "lucide-react";

type CreateFormValues = {
  name: string;
  description: string;
};

type CreateFormProps = {
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

const Publications: React.FC<CreateFormProps> = () => {
  const methods = useForm<CreateFormValues>();
  const onSubmit: SubmitHandler<CreateFormValues> = (data) => {
    console.log(data);
  };

  const handleGenreSelect = () => {
    // logic here
  };

  return (
    <div className="container mx-auto p-8 h-screen">
      <h1 className="text-2xl font-bold my-8 uppercase text-center">
        Create your Publication
      </h1>
      <Card className="bg-transparent md:bg-secondary shadow-none border-none flex flex-col md:flex-row items-center justify-center md:gap-x-10 max-w-3xl mx-auto p-12 md:p-8">
        <div className="mb-6 md:mb-0">
          <p className="text-sm font-semibold">Upload a cover photo: 5mb max</p>
          <p className="text-xs text-primary font-semibold mb-4">
            Uploads are png, jpeg, svg.
          </p>
          <label
            htmlFor="cover-upload"
            className="w-48 h-48 bg-hover rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-primary-foreground transition-all duration-500"
          >
            <UploadCloud className="w-12 h-12 text-primary" />
            <span className="text-primary font-semibold">Upload Cover</span>
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                // handle file upload
              }}
            />
          </label>
        </div>
        <div className="border-2 border-primary rounded-md p-6">
          <FormProvider {...methods}>
            <form action="/submit_publication" method="post">
              <FormField
                name="name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publication Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Publication title"
                        className="border-none bg-hover focus-visible:ring-0 font-semibold"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between gap-x-4 my-4">
                <Select>
                  <SelectTrigger className="flex-1 border-none bg-hover">
                    <SelectValue placeholder="Publication type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select type</SelectLabel>
                      <SelectItem value="comic">Comic</SelectItem>
                      <SelectItem value="book">Book</SelectItem>
                      <SelectItem value="poem">Poem</SelectItem>
                      <SelectItem value="article">Article</SelectItem>
                      <SelectItem value="blog">Blog</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <MultiSelectDropdown
                  label="Select genre"
                  multiValue={true}
                  options={genres}
                  onChange={handleGenreSelect}
                  classname="border-none flex-1"
                />
              </div>
              <FormField
                name="description"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publication summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Summary of your Publication"
                        className="border-none bg-hover pt-3 pl-4 focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <div className="my-4 flex items-center justify-center gap-x-4">
                  <Button className="font-semibold">Preview</Button>
                  <Button className="font-semibold">Create Publication</Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </Card>
    </div>
  );
};

export default Publications;
