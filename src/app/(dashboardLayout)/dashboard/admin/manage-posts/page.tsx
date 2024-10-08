"use client";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import { message, Popconfirm, PopconfirmProps, Table, Tag } from "antd";
import { Trash2 } from "lucide-react";
const items = [
  {
    key: 1,
    title: "Introduction to JavaScript",
    category: "Programming",
    votes: 53,
    isPremium: false,
    isPublished: true,
  },
  {
    key: 2,
    title: "Mastering React",
    category: "Web Development",
    votes: 654,
    isPremium: true,
    isPublished: true,
  },
  {
    key: 3,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    votes: 43,
    isPremium: false,
    isPublished: false,
  },
  {
    key: 4,
    title: "Data Structures in Python",
    category: "Programming",
    votes: 53,
    isPremium: true,
    isPublished: true,
  },
  {
    key: 5,
    title: "SEO Best Practices",
    category: "Digital Marketing",
    votes: 984,
    isPremium: false,
    isPublished: false,
  },
  {
    key: 6,
    title: "Project Management 101",
    category: "Business",
    votes: 345,
    isPremium: true,
    isPublished: false,
  },
  {
    key: 7,
    title: "Advanced CSS Techniques",
    category: "Web Development",
    votes: 435,
    isPremium: true,
    isPublished: true,
  },
  {
    key: 8,
    title: "Introduction to Machine Learning",
    category: "Data Science",
    votes: 62,
  },
  {
    key: 9,
    title: "Financial Analysis for Beginners",
    category: "Finance",
    votes: 23,
  },
  {
    key: 10,
    title: "Social Media Marketing",
    category: "Digital Marketing",
    votes: 334,
  },
];

export type TTableProps = {
  startTime: string;
  _id: string;
  // bikeId: TBike;
  // userId: TUser;
};

const Posts = () => {
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Click on Yes");
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
            <Tag color="yellow">Draft</Tag>
          )}
        </p>
      ),
      key: "tenantName",
    },
    {
      title: "Content Type",
      render: ({ isPremium }: { isPremium: boolean }) => (
        <p>{isPremium ? "Premium" : "Free"}</p>
      ),
      key: "tenantName",
    },
    {
      title: "Actions",
      render: ({ isPublished }: { isPublished: boolean }) => (
        <div className="flex items-center gap-2">
          <Tag
            color={isPublished ? "gray" : "green-inverse"}
            className="flex items-center justify-center p-[6px] px-2 cursor-pointer rounded-md"
          >
            {isPublished ? "Draft" : "Publish"}
          </Tag>

          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
            onConfirm={confirm}
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
      <DashboardSectionTitle heading="all Posts" />

      <div className="mt-6">
        <Table
          dataSource={items}
          // loading={isFetching}
          columns={columns}
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
};

export default Posts;
