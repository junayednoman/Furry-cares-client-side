"use client";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import {
  message,
  Popconfirm,
  PopconfirmProps,
  Table,
  Tag,
  Tooltip,
} from "antd";
import { Trash2, UserRoundCog } from "lucide-react";
const items = [
  {
    key: 1,
    title: "Introduction to JavaScript",
    role: "user",
    email: "example@gmail.com",
    votes: 53,
    isPremium: false,
    isPublished: true,
  },
  {
    key: 2,
    title: "Mastering React",
    role: "admin",
    email: "example@gmail.com",
    votes: 654,
    isPremium: true,
    isPublished: true,
  },
  {
    key: 3,
    title: "UI/UX Design Fundamentals",
    role: "user",
    email: "example@gmail.com",
    votes: 43,
    isPremium: false,
    isPublished: false,
  },
  {
    key: 4,
    title: "Data Structures in Python",
    role: "admin",
    email: "example@gmail.com",
    votes: 53,
    isPremium: true,
    isPublished: true,
  },
  {
    key: 5,
    title: "SEO Best Practices",
    role: "user",
    email: "example@gmail.com",
    votes: 984,
    isPremium: false,
    isPublished: false,
  },
  {
    key: 6,
    title: "Project Management 101",
    role: "admin",
    email: "example@gmail.com",
    votes: 345,
    isPremium: true,
    isPublished: false,
  },
  {
    key: 7,
    title: "Advanced CSS Techniques",
    role: "user",
    email: "example@gmail.com",
    votes: 435,
    isPremium: true,
    isPublished: true,
  },
  {
    key: 8,
    title: "Introduction to Machine Learning",
    role: "admin",
    email: "example@gmail.com",
    votes: 62,
  },
  {
    key: 9,
    title: "Financial Analysis for Beginners",
    role: "admin",
    email: "example@gmail.com",
    votes: 23,
  },
  {
    key: 10,
    title: "Social Media Marketing",
    role: "user",
    email: "example@gmail.com",
    votes: 334,
  },
];

export type TTableProps = {
  startTime: string;
  _id: string;
  // bikeId: TBike;
  // userId: TUser;
};

const confirm: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Click on Yes");
};

const Users = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Actions",
      render: ({ role }: { role: "user" | "admin" }) => (
        <div className="flex items-center gap-1">
          <Popconfirm
            title="Make admin"
            description={`Are you sure to make this ${
              role === "user" ? "user an admin" : "admin a user"
            }?`}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title={`${role === "user" ? "Make admin" : "Make user"}`}>
              <Tag
                color="blue-inverse"
                className="flex items-center justify-center p-2 cursor-pointer rounded-md"
              >
                <UserRoundCog size={17} />
              </Tag>
            </Tooltip>
          </Popconfirm>
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
      key: "actions",
    },
  ];

  return (
    <div>
      <DashboardSectionTitle heading="All Users" />

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

export default Users;
