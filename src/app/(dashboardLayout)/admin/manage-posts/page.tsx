"use client";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import { useDeleteData, usePartialUpdate } from "@/hooks/mutation";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { TPost } from "@/types/post.type";
import { Popconfirm, Spin, Table, Tag } from "antd";
import { BookCheck, NotepadTextDashed, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export type TTableProps = Pick<
  TPost,
  "title" | "category" | "votes" | "isPremium" | "isPublished" | "_id"
>;

const ManagePosts = () => {
  const [postIdToBeDeleted, setPostIdToBeDeleted] = useState("");
  const [postIdToChangePublishStatus, setPostIdToChangePublishStatus] =
    useState("");
  const {
    data,
    isFetching,
    refetch: refetchPostData,
  } = useHandleQuery("all-posts", `/posts`);

  const postData = data?.data?.result;

  // update publish status
  const {
    mutate: updatePublishStatus,
    isPending: isPublishPending,
    isSuccess: isPublishSuccess,
  } = usePartialUpdate(
    "update-publish-status",
    `/posts/publish/${postIdToChangePublishStatus}`
  );

  useEffect(() => {
    refetchPostData();
  }, [isPublishSuccess]);

  // delete post
  const { mutateAsync: deletePost } = useDeleteData(
    "delete-posts",
    `/posts/${postIdToBeDeleted}`
  );
  const handlePostDelete = async () => {
    await deletePost();
    refetchPostData();
  };

  const postItems = postData?.map((post: TTableProps) => ({
    key: post._id,
    title: post.title,
    category: post.category,
    votes: post.votes,
    isPremium: post.isPremium,
    isPublished: post.isPublished,
  }));

  // handle publish and draft post
  const handleUpdatePublishStatus = async (isPublished: boolean) => {
    updatePublishStatus({ isPublished: !isPublished });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Up Votes",
      dataIndex: "votes",
      key: "votes",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Publish status",
      render: ({ isPublished }: { isPublished: boolean }) => (
        <p>
          {isPublished ? (
            <Tag color="green">Published</Tag>
          ) : (
            <Tag color="default">Draft</Tag>
          )}
        </p>
      ),
      key: "tenantName",
    },
    {
      title: "Content Type",
      render: ({ isPremium }: { isPremium: boolean }) => (
        <p>
          {isPremium ? (
            <Tag color="gold">Premium</Tag>
          ) : (
            <Tag color="purple">Free</Tag>
          )}
        </p>
      ),
      key: "tenantName",
    },
    {
      title: "Actions",
      render: ({ isPublished, key }: { isPublished: boolean; key: string }) => (
        <div className="flex items-center gap-1">
          <Spin spinning={isPublishPending}>
            <Tag
              onMouseEnter={() => setPostIdToChangePublishStatus(key)}
              onClick={() => handleUpdatePublishStatus(isPublished)}
              color={isPublished ? "gray" : "green-inverse"}
              className="flex items-center justify-center p-[6px] px-2 cursor-pointer rounded-md"
            >
              {isPublished ? (
                <NotepadTextDashed size={20} />
              ) : (
                <BookCheck size={20} />
              )}
            </Tag>
          </Spin>

          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
            onConfirm={handlePostDelete}
            okText="Yes"
            cancelText="No"
            onOpenChange={() => setPostIdToBeDeleted(key)}
          >
            <Tag
              color="red-inverse"
              className="flex items-center justify-center p-2 cursor-pointer rounded-md"
            >
              <Trash2 size={17} />
            </Tag>
          </Popconfirm>
        </div>
      ),
      key: "address",
    },
  ];

  return (
    <div>
      <DashboardSectionTitle heading="All posts" />

      <div className="mt-6">
        <Table
          loading={isFetching}
          dataSource={postItems}
          columns={columns}
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
};

export default ManagePosts;
