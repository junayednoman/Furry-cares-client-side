"use client";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import FButton from "@/components/ui/FButton";
import FCheckbox from "@/components/ui/form/FCheckbox";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSelect from "@/components/ui/form/FSelect";
import FUploading from "@/components/ui/form/FUploading";
import { categoryOptions, tagOptions } from "@/constant/global.constant";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreatePost = () => {
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };

  // handle image uploading
  const handleImageUpload = (file: File) => {
    console.log("file, ", file);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPremium(e.target.checked);
  };

  return (
    <>
      <DashboardSectionTitle heading="Create Post" />
      <div className="max-w-[600px] mt-6">
        <FForm handleFormSubmit={handleSubmit}>
          <div className="space-y-2">
            <FInput name="title" label="Title" placeholder="Enter post title" />
            <FUploading label="Thumbnail" onChange={handleImageUpload} />
            <FSelect
              options={categoryOptions}
              name="category"
              label="Category"
              placeholder="Select category"
            />
            <FSelect
              mode="multiple"
              options={tagOptions}
              name="tags"
              label="Tags"
              placeholder="Select tags"
            />
            <FCheckbox
              onChange={handleCheckboxChange}
              name="isPremium"
              label="Keep as Premium"
            />
            <FButton htmlType="submit">Publish</FButton>
          </div>
        </FForm>
      </div>
    </>
  );
};

export default CreatePost;
