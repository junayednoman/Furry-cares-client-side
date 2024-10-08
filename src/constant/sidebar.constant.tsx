import { UserOutlined } from "@ant-design/icons";
import { Bike, NotebookPen, User, Users } from "lucide-react";
import Link from "next/link";

export const userMenuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link href={"/dashboard/profile"}>Profile</Link>,
  },
  {
    key: "2",
    icon: <Bike size={16} />,
    label: <Link href={"/dashboard/author/create-post"}>Create Post</Link>,
  },
  {
    key: "3",
    icon: <NotebookPen size={16} />,
    label: <Link href={"/dashboard/author/posts"}>My Posts</Link>,
  },
];

export const adminMenuItems = [
  {
    key: "1",
    icon: <User size={16} />,
    label: <Link href={"/dashboard/profile"}>Profile</Link>,
  },
  {
    key: "2",
    icon: <NotebookPen size={16} />,
    label: <Link href={"/dashboard/admin/manage-posts"}>Manage Posts</Link>,
  },
  {
    key: "4",
    icon: <Users size={16} />,
    label: <Link href={"/dashboard/admin/manage-users"}>Users</Link>,
  },
];
