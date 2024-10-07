"use client";
import FForm from "@/components/ui/form/FForm";
import FSelect from "@/components/ui/form/FSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";

const categories = [
  {
    value: "tip",
    label: "Tip",
  },
  {
    value: "story",
    label: "Story",
  },
];

const times = [
  {
    value: "any time",
    label: "Any time",
  },
  {
    value: "last 24 hours",
    label: "Last 24 hours",
  },
  {
    value: "last 1 week",
    label: "Last 1 week",
  },
  {
    value: "last 15 days",
    label: "Last 15 days",
  },
  {
    value: "last month",
    label: "Last month",
  },
];

const tags = [
  {
    value: "health",
    label: "Health",
  },
  {
    value: "story",
    label: "Story",
  },
  {
    value: "exercise",
    label: "Exercise",
  },
  {
    value: "grooming",
    label: "Grooming",
  },
];

const FeedFilter = () => {
  const handleFilter: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };
  return (
    <div className="md:p-6 p-5 rounded-md border border-slate-200 border-solid bg-[#fbfdfa]">
      <FForm handleFormSubmit={handleFilter}>
        <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4">
          <div className="w-full">
            <FSelect
              options={categories}
              name="category"
              placeholder="Select Category"
            />
          </div>
          <div className="w-full">
            <FSelect options={times} name="time" placeholder="Time posted" />
          </div>
          <div className="w-full">
            <FSelect options={tags} name="tags" placeholder="Filter by tags" />
          </div>
        </div>
      </FForm>
    </div>
  );
};

export default FeedFilter;
