"use client";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import { useDeleteData, usePartialUpdate } from "@/hooks/mutation";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { TUser } from "@/types/user.type";
import { Popconfirm, Table, Tag, Tooltip } from "antd";
import { ArchiveRestore, Eye, Trash2, UserRoundCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type TTableProps = Pick<
  TUser,
  | "name"
  | "email"
  | "role"
  | "followerCount"
  | "_id"
  | "profilePicture"
  | "isDeleted"
>;

const Users = () => {
  const [userIdToBeDeleted, setUserIdToBeDeleted] = useState<string>("");
  const {
    data,
    isFetching,
    refetch: refetchPostData,
  } = useHandleQuery("all-users", `/users`);

  const userData = data?.data?.result;

  const userItems = userData?.map((user: TTableProps) => ({
    key: user?._id,
    name: user?.name,
    email: user?.email,
    role: user?.role,
    followers: user?.followerCount,
    profilePicture: user?.profilePicture,
    isDeleted: user?.isDeleted,
  }));

  // handle update user role and delete user
  const { mutateAsync: updateUserRole } = usePartialUpdate(
    "update-user-role",
    "/users"
  );
  const { mutateAsync: deleteUser } = useDeleteData(
    "delete-user-role",
    `/users/${userIdToBeDeleted}`
  );

  const handleUpdateUserRole = async (userId: string) => {
    await updateUserRole({ userId });
    refetchPostData();
  };
  const handleUserDelete = async () => {
    await deleteUser();
    refetchPostData();
  };

  const columns = [
    {
      title: "Image",
      key: "image",
      render: ({
        profilePicture,
        name,
      }: {
        profilePicture: string;
        name: string;
      }) => (
        <Image
          className="rounded-md"
          src={profilePicture}
          width={70}
          height={70}
          alt={name}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      title: "Followers",
      key: "followers",
      render: ({ followers }: { followers: number }) => <p>{followers}</p>,
    },
    {
      title: "User Status",
      key: "isDeleted",
      render: ({ isDeleted }: { isDeleted: boolean }) => (
        <p>
          {isDeleted ? (
            <Tag color="red">Deleted</Tag>
          ) : (
            <Tag color="success">Active</Tag>
          )}
        </p>
      ),
    },

    {
      title: "Actions",
      render: ({
        role,
        key,
        isDeleted,
      }: {
        role: "user" | "admin";
        key: string;
        isDeleted: boolean;
      }) => (
        <div className="flex items-center gap-1">
          <Popconfirm
            title="Make admin"
            description={`Are you sure to change the user role to ${
              role === "user" ? "'admin'" : "'user'"
            }?`}
            onConfirm={() => handleUpdateUserRole(key)}
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
          <Tooltip title={`${isDeleted ? "Restore" : "Delete"} the user`}>
            <Popconfirm
              title={`${isDeleted ? "Restore" : "Delete"} the user`}
              description={`Are you sure to ${
                isDeleted ? "restore" : "delete"
              } this user?`}
              onConfirm={handleUserDelete}
              onPopupClick={() => setUserIdToBeDeleted(key)}
              okText="Yes"
              cancelText="No"
            >
              {!isDeleted ? (
                <Tag
                  color="red-inverse"
                  className="flex items-center justify-center p-2 cursor-pointer rounded-md"
                >
                  <Trash2 size={17} />
                </Tag>
              ) : (
                <Tag
                  color="green-inverse"
                  className="flex items-center justify-center p-2 cursor-pointer rounded-md"
                >
                  <ArchiveRestore size={17} />
                </Tag>
              )}
            </Popconfirm>
          </Tooltip>
          <Link href={`/profile/${key}`}>
            {" "}
            <Tag
              color="blue-inverse"
              className="flex items-center justify-center p-2 cursor-pointer rounded-md"
            >
              <Eye size={17} />
            </Tag>
          </Link>
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
          dataSource={userItems}
          loading={isFetching}
          columns={columns}
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
};

export default Users;
