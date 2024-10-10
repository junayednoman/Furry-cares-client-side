"use client";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import FButton from "@/components/ui/FButton";
import FCheckbox from "@/components/ui/form/FCheckbox";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSelect from "@/components/ui/form/FSelect";
import FTextArea from "@/components/ui/form/FTextArea";
import FUploading from "@/components/ui/form/FUploading";
import { categoryOptions, postTags } from "@/constant/global.constant";
import { useUserContext } from "@/context/auth.provider";
import { usePostWithFormData } from "@/hooks/mutation";
import { Popover, Spin } from "antd";
import { IJoditEditorProps } from "jodit-react";
import { Info } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreatePost = () => {
  const { user } = useUserContext();
  const [content, setContent] = useState<string>("");
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<any | undefined>(undefined);
  const { mutate: createPost, isPending } = usePostWithFormData(
    "create-post",
    "/posts"
  );

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    data.isPremium = isPremium;
    data.content = content;
    data.author = user?._id;
    formData.append("data", JSON.stringify(data));

    if (thumbnail) {
      formData.append("thumbnail", thumbnail?.originFileObj);
    }

    createPost(formData);
  };

  // handle image uploading
  const handleThumbnailUpload = (file: any) => {
    setThumbnail(file.fileList[0]);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPremium(e.target.checked);
  };

  // for rich text editor
  const editor = useRef(null);
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
              <FUploading label="Thumbnail" onChange={handleThumbnailUpload} />
              <FSelect
                options={categoryOptions}
                name="category"
                label="Category"
                placeholder="Select category"
              />
              <FSelect
                mode="multiple"
                options={postTags}
                name="tags"
                label="Tags"
                placeholder="Select tags"
              />
              <FTextArea name="excerpt" label="Excerpt" rows={4} />
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
              <Spin spinning={isPending}>
                <FButton htmlType="submit">
                  {isPending ? "Publishing..." : "Publish"}
                </FButton>
              </Spin>
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
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
