"use client";
import Loading from "@/app/(generalLayout)/loading";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import FButton from "@/components/ui/FButton";
import FCheckbox from "@/components/ui/form/FCheckbox";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSelect from "@/components/ui/form/FSelect";
import FTextArea from "@/components/ui/form/FTextArea";
import FUploading from "@/components/ui/form/FUploading";
import NoData from "@/components/ui/NoData";
import { categoryOptions, postTags } from "@/constant/global.constant";
import { useUserContext } from "@/context/auth.provider";
import { usePartialUpdate, useUpdateWithFormData } from "@/hooks/mutation";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { Popover, Spin } from "antd";
import { IJoditEditorProps } from "jodit-react";
import { Info } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const EditPost = ({ params }: { params: { postId: string } }) => {
  // update publish status
  const {
    mutate: updatePublishStatus,
    isPending: isPublishPending,
    isSuccess: isPublishSuccess,
  } = usePartialUpdate(
    "update-publish-status",
    `/posts/publish/${params?.postId}`
  );
  // load post data by post id
  const {
    data,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch: refetchPostData,
  } = useHandleQuery("my-posts", `/posts/${params.postId}`);

  const { user } = useUserContext();
  const [content, setContent] = useState<string>("");
  console.log("postData?.content, ", content);
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<any | undefined>(undefined);
  const {
    mutate: updatePost,
    isPending: isUpdatePending,
    isSuccess: isUpdateSuccess,
  } = useUpdateWithFormData("update-post", `/posts/${params.postId}`);

  useEffect(() => {
    refetchPostData();
  }, [isPublishSuccess, isUpdateSuccess]);

  // set default values for content and checkbox
  useEffect(() => {
    if (data?.data) {
      setContent(data?.data?.content || "");
      setIsPremium(data?.data?.isPremium || false);
    }
  }, [data?.data]);

  const handleUpdatePost: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    data.isPremium = isPremium;
    data.content = content;
    data.author = user?._id;
    formData.append("data", JSON.stringify(data));
    if (thumbnail) {
      formData.append("thumbnail", thumbnail?.originFileObj);
    }
    console.log("content, ", data);

    updatePost(formData);
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

  // let loading if data is loading
  if (isLoading || isFetching) {
    return <Loading />;
  }
  if (isError || !isSuccess || !data?.data) {
    return <NoData />;
  }

  const postData = data?.data;

  // handle publish and draft post
  const handleUpdatePublishStatus = () => {
    const isPublished = postData?.isPublished ? false : true;
    updatePublishStatus({ isPublished });
  };

  // set default valuess
  const defaultValues = {
    title: postData?.title,
    category: postData?.category,
    tags: postData?.tags,
    excerpt: postData?.excerpt,
  };

  const defaultThumbnailList = [
    {
      uid: "1",
      name: postData?.title,
      status: "done",
      url: postData?.thumbnail,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <DashboardSectionTitle heading="Edit Post" />
        <Spin spinning={isPublishPending}>
          <FButton onclick={handleUpdatePublishStatus}>
            {postData?.isPublished ? "Draft" : "Publish"}
          </FButton>
        </Spin>
      </div>
      <div className="flex xl:flex-row flex-col gap-12 mt-7">
        <div className="xl:max-w-[600px] w-full -mt-1">
          <FForm
            defaultValues={defaultValues}
            handleFormSubmit={handleUpdatePost}
          >
            <div className="space-y-2">
              <FInput
                name="title"
                label="Title"
                placeholder="Enter post title"
              />
              <FUploading
                defaultFileList={defaultThumbnailList}
                label="Thumbnail"
                onChange={handleThumbnailUpload}
              />
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
                    defaultChecked={postData?.isPremium}
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

              <FButton disabled={isUpdatePending} htmlType="submit">
                {isUpdatePending ? "Updating..." : "Update"}
              </FButton>
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

export default EditPost;
