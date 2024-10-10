"use client";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import { useUserContext } from "@/context/auth.provider";
import { useDeleteData } from "@/hooks/mutation";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { TPost } from "@/types/post.type";
import { Popconfirm, Table, Tag } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type TTableProps = Pick<
  TPost,
  "title" | "category" | "votes" | "isPremium" | "isPublished" | "_id"
>;

const Posts = () => {
  const { user } = useUserContext();
  const [postIdToBeDeleted, setPostIdToBeDeleted] = useState("");
  const {
    data,
    isFetching,
    isLoading,
    refetch: refetchPostData,
  } = useHandleQuery("my-posts", `/posts/user/${user?._id}`);

  console.log("userIdToBeDeleted, ", postIdToBeDeleted);
  const postData = data?.data?.result;

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

  console.log("postItems, ", postData);
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
      render: ({ key }: { key: string }) => (
        <div className="flex  items-center gap-2">
          <Link href={`/author/edit-post/${key}`}>
            <Tag
              color="blue-inverse"
              className="flex items-center justify-center p-2 cursor-pointer rounded-md"
            >
              <Pencil size={17} />
            </Tag>
          </Link>
          <Popconfirm
            title="Delete the post"
            description="Are you sure to delete this post?"
            onConfirm={handlePostDelete}
            onOpenChange={() => setPostIdToBeDeleted(key)}
            okText="Yes"
            cancelText="No"
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
      <DashboardSectionTitle heading="My Posts" />

      <div className="mt-6">
        <Table
          loading={isFetching || isLoading}
          dataSource={postItems}
          columns={columns}
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
};

export default Posts;
