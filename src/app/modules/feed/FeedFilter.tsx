"use client";
import FForm from "@/components/ui/form/FForm";
import FSelectLive from "@/components/ui/form/FSelectLive";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const categories = [
  {
    value: null,
    label: "All",
  },
  {
    value: "tip",
    label: "Tip",
  },
  {
    value: "story",
    label: "Story",
  },
];

const days = [
  {
    value: "",
    label: "Any time",
  },
  {
    value: "1",
    label: "Last 24 hours",
  },
  {
    value: "7",
    label: "Last 1 week",
  },
  {
    value: "15",
    label: "Last 15 days",
  },
  {
    value: "30",
    label: "Last month",
  },
];

const sortings = [
  {
    value: null,
    label: "Reset",
  },
  {
    value: "votes",
    label: "Low to high",
  },
  {
    value: "-votes",
    label: "High to low",
  },
];

type TProps = {
  setCategory: Dispatch<SetStateAction<string | null>>;
  setTimePosted: Dispatch<SetStateAction<string | null>>;
  setSorting: Dispatch<SetStateAction<string | null>>;
};

const FeedFilter = ({ setCategory, setTimePosted, setSorting }: TProps) => {
  const handleFilter: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };

  return (
    <div className="md:p-6 p-5 rounded-md border border-slate-200 border-solid bg-light">
      <FForm handleFormSubmit={handleFilter}>
        <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4">
          <div className="w-full">
            <FSelectLive
              selectOnChange={(value: string) => setCategory(value)}
              options={categories}
              name="category"
              placeholder="Filter by category"
            />
          </div>
          <div className="w-full">
            <FSelectLive
              selectOnChange={(value: string) => setTimePosted(value)}
              options={days}
              name="time"
              placeholder="Time posted"
            />
          </div>
          <div className="w-full">
            <FSelectLive
              selectOnChange={(value: string) => setSorting(value)}
              options={sortings}
              name="sorting"
              placeholder="Sort by votes"
            />
          </div>
        </div>
      </FForm>
    </div>
  );
};

export default FeedFilter;
