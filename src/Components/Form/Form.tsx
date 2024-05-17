"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "../ui/switch";

const primaryAudienceData = [
  { id: 1, value: "students", label: "Students" },
  { id: 2, value: "teachers", label: "Teachers" },
  { id: 3, value: "parents", label: "Parents" },
];
const secondaryAudienceData = [
  { id: 1, value: "students", label: "Children" },
  { id: 2, value: "teachers", label: "Colleagues" },
  { id: 3, value: "parents", label: "Friends" },
];
const contentGoal = [
  { id: 1, value: "students", label: "React" },
  { id: 2, value: "teachers", label: "Angular" },
  { id: 3, value: "parents", label: "Css" },
];
const language = [
  { id: 1, value: "students", label: "English" },
  { id: 2, value: "teachers", label: "Urdu" },
  { id: 3, value: "parents", label: "Pashto" },
];
const categories = [
  {
    id: 1,
    value: "red",
    label: "Red",
  },
  {
    id: 2,
    value: "yellow",
    label: "Yellow",
  },
  {
    id: 3,
    value: "purple",
    label: "Purple",
  },
];

const FormSchema = z.object({
  primaryAudience: z.string(),
  secondaryAudience: z.string(),
  category: z.string(),
  contentGoal: z.string(),
  numberField: z.string(),
  language: z.string(),
  marketingEmail: z.boolean().optional(),
  date: z.date().optional(),
});
const FormComponent = () => {
  const [date, setDate] = useState<Date>();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("form submitted", data); // Corrected typo here
  };
  return (
    <>
      <h1 className="text-center font-bold text-4xl mt-4">Simple Form</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-2/3 space-y-6  p-4 mx-auto mt-8"
        >
          <div className="md:flex flex-wrap gap-4">
            <div className="md:w-[48%] mb-2">
              <FormField
                control={form.control}
                name="primaryAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Audience</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Primary" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {primaryAudienceData.map((item: any) => (
                          <SelectItem key={item.id} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:w-[48%] mb-2">
              <FormField
                control={form.control}
                name="secondaryAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Secondary Audience</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Secondary" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {secondaryAudienceData.map((item: any) => (
                          <SelectItem key={item.id} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="Children">Children</SelectItem>
                        <SelectItem value="Friends">Friends</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:w-[48%] mb-2">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((item: any) => (
                          <SelectItem key={item.id} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:w-[48%] mb-2">
              <FormField
                control={form.control}
                name="contentGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Goal</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="contentGoal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {contentGoal.map((item: any) => (
                          <SelectItem key={item.id} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:w-[48%] mb-2">
              <FormField
                control={form.control}
                name="numberField"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                    <Input {...field} type="number" />
                    {/* <FormMessage>
                      {form.formState.errors.numberField?.message}
                    </FormMessage> */}
                  </FormItem>
                )}
              />
            </div>
            <div className="md:w-[48%] mb-2">
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Language</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {language.map((item: any) => (
                          <SelectItem key={item.id} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:w-[48%] mb-2">
              <div className="border p-1 rounded-md flex justify-between items-center">
                <div>
                  <h2 className="font-semibold mb-2">Marketing Email</h2>
                  <p className="text-xs mb-2">
                    Receive email about new products,features and more.
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <Switch {...field}></Switch>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="md:w-[48%] mb-2 flex flex-col">
              <label htmlFor="">Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`"w-[280px] justify-start text-left font-normal",
                  ${!form.watch("date") && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {form.watch("date") ? (
                      format(form.watch("date"), "PPP")
                    ) : (
                      <div>Pick a date</div>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={form.watch("date")}
                    onSelect={(date) => form.setValue("date", date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default FormComponent;
