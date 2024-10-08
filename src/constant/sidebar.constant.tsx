import { UserOutlined } from "@ant-design/icons";
import { Bike, ListOrdered, ListTodo, Puzzle, User, Users } from "lucide-react";
import Link from "next/link";

export const userMenuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link href={"/dashboard/user"}>Profile</Link>,
  },
  {
    key: "2",
    icon: <Bike size={16} />,
    label: <Link href={"/dashboard/create-post"}>Create Post</Link>,
  },
  {
    key: "3",
    icon: <ListTodo size={16} />,
    label: <Link href={"/dashboard/user/my-rentals"}>My Rentals</Link>,
  },
];

export const adminMenuItems = [
  {
    key: "1",
    icon: <User size={16} />,
    label: <Link href={"/dashboard/admin"}>Profile</Link>,
  },
  {
    key: "2",
    icon: <Bike size={16} />,
    label: <Link href={"/dashboard/admin/manage-bikes"}>Bike Management</Link>,
  },
  {
    key: "4",
    icon: <Users size={16} />,
    label: <Link href={"/dashboard/admin/users"}>Users</Link>,
  },
  {
    key: "3",
    icon: <ListOrdered size={16} />,
    label: <Link href={"/dashboard/admin/rentals"}>Rentals</Link>,
  },
  {
    key: "5",
    icon: <Puzzle size={16} />,
    label: <Link href={"/dashboard/admin/coupons"}>Coupons</Link>,
  },
];
