"use client";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import FButton from "@/components/ui/FButton";
import FCheckbox from "@/components/ui/form/FCheckbox";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSelect from "@/components/ui/form/FSelect";
import FUploading from "@/components/ui/form/FUploading";
import { categoryOptions, tagOptions } from "@/constant/global.constant";
import { Popover } from "antd";
import { IJoditEditorProps } from "jodit-react";
import { Info } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreatePost = () => {
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };
  console.log("isPremium, ", isPremium);

  // handle image uploading
  const handleImageUpload = (file: File) => {
    console.log("file, ", file);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPremium(e.target.checked);
  };

  // for rich text editor
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log("content, ", content);
  const config: IJoditEditorProps["config"] = useMemo(
    () => ({
      height: "600px",
      toolbar: true,
      readonly: false,
      placeholder: "Start typings...",

      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "font", // Font family
        "paragraph",
        "fontsize", // Font size
        "brush", // Text color and background color
        "|",
        "ul",
        "ol",
        "|",
        "align", // Text alignment
        "outdent", // Decrease indent
        "indent", // Increase indent
        "|",
        "link",
        "image",
        "video",
        "table", // Table creation
        "hr", // Horizontal line
        "source", // HTML source view
        "|",
        "undo",
        "redo",
        "|",
        "fullsize", // Fullscreen
        "print", // Print
      ],
    }),

    []
  );

  return (
    <>
      <DashboardSectionTitle heading="Create Post" />
      <div className="flex xl:flex-row flex-col gap-12 mt-7">
        <div className="xl:max-w-[600px] w-full -mt-1">
          <FForm handleFormSubmit={handleSubmit}>
            <div className="space-y-2">
              <FInput
                name="title"
                label="Title"
                placeholder="Enter post title"
              />
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
              <div className="flex items-center gap-2">
                <div>
                  <FCheckbox
                    onChange={handleCheckboxChange}
                    name="isPremium"
                    label="Keep as Premium"
                  />
                </div>
                <div>
                  <Popover
                    content={"Check the checkbox to keep this post as premium"}
                    title="Info"
                    trigger="click"
                  >
                    <Info size={16} className="cursor-pointer text-slate-500" />
                  </Popover>
                </div>
              </div>
              <FButton htmlType="submit">Publish</FButton>
            </div>
          </FForm>
        </div>
        <div className="w-full">
          {/* rich text editor */}
          <label className="font-semibold inline-block" htmlFor="content">
            Content
          </label>
          <div className="mt-1">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              // tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
