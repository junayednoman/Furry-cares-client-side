import { UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

import { Bike, Home, NotebookPen, User, Users } from "lucide-react";
import Link from "next/link";

export const userMenuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link href={"/profile"}>Profile</Link>,
  },
  {
    key: "2",
    icon: <Bike size={16} />,
    label: <Link href={"/author/create-post"}>Create Post</Link>,
  },
  {
    key: "3",
    icon: <NotebookPen size={16} />,
    label: <Link href={"/author/posts"}>My Posts</Link>,
  },
];

export const adminMenuItems = [
  {
    key: "1",
    icon: <User size={16} />,
    label: <Link href={"/profile"}>Profile</Link>,
  },
  {
    key: "2",
    icon: <NotebookPen size={16} />,
    label: <Link href={"/admin/manage-posts"}>Manage Posts</Link>,
  },
  {
    key: "4",
    icon: <Users size={16} />,
    label: <Link href={"/admin/manage-users"}>Users</Link>,
  },
];

export const items: MenuProps["items"] = [
  {
    label: (
      <div className="flex items-center gap-2">
        <Home size={14} />
        <Link className="text-text" href="/">
          Home
        </Link>
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <User size={14} />
        <Link className="text-text" href="/profile">
          Profile
        </Link>
      </div>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
];
