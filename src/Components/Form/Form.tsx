"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
    value: "red",
    label: "Red",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
  {
    value: "purple",
    label: "Purple",
  },
];
const Form = () => {
  const [date, setDate] = useState<Date>();
  return (
    <>
      <div>
        <h1 className="text-4xl text-center  font-bold">Simple Form</h1>

        <div className="  md:flex flex-wrap gap-2 px-4 py-8  md:w-3/5  mx-auto mt-10">
          <div className="md:w-[48%] mb-2">
            <label htmlFor="">Primary Audience</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Primary" />
              </SelectTrigger>
              <SelectContent>
                {primaryAudienceData.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="md:w-[48%] mb-2">
            <label htmlFor="">Secondary Audience</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Secondary" />
              </SelectTrigger>
              <SelectContent>
                {secondaryAudienceData.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="md:w-[48%] mb-2">
            <label htmlFor="">Category</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((item: any) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="md:w-[48%] mb-2">
            <label htmlFor="">Content Goal</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Content Goal" />
              </SelectTrigger>
              <SelectContent>
                {contentGoal.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="md:w-[48%] mb-2">
            <label htmlFor="">Number field range</label>
            <Input type="number" />
          </div>
          <div className="md:w-[48%] mb-2">
            <label htmlFor="">Language</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {language.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* <div className="md:w-[48%] mb-2">
            <div></div>
          </div> */}
          <div className="md:w-[48%] mb-2">
            <label htmlFor="">Marketz</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Market" />
              </SelectTrigger>
              <SelectContent>
                {language.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="md:w-[48%] mb-2 flex flex-col">
            <label htmlFor="">Date</label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`
                    "w-[280px] justify-start text-left font-normal",
                    ${!date && "text-muted-foreground"}
                  `}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex justify-center w-full">
            <Button variant={"default"}>Submit Form</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
