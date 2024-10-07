"use client";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, MenuProps } from "antd";
import { useEffect, useState } from "react";
import {
  CircleUserRound,
  Home,
  ListCheckIcon,
  LogOut,
  User,
} from "lucide-react";
import Link from "next/link";
import Sidebar from "../modules/dashboard/Sidebar";
import FDropdown from "@/components/ui/FDropdown";

const { Header, Content } = Layout;
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 610) {
      setCollapsed(true);
    }
  }, []);

  const user = {
    name: "John Doe",
    role: "user",
  };

  //header drop down options
  const items: MenuProps["items"] = [
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
      key: "2",
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <ListCheckIcon size={14} />
          <Link
            className="text-text"
            href={
              user?.role === "admin"
                ? `/dashboard/admin/manage-bikes`
                : `/dashboard/user/my-rentals`
            }
          >
            {user?.role === "admin" ? "Manage Rentals" : "My Rentals"}
          </Link>
        </div>
      ),

      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="flex items-center gap-2 text-red-600">
          <LogOut size={14} />
          <span>Log Out</span>
        </div>
      ),

      key: "3",
    },
  ];
  return (
    <div>
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <Header
            style={{ position: "sticky", top: "0", left: "0", zIndex: 0 }}
            className={`bg-white dark:bg-primaryColor pl-0 md:pr-10 pr-4 shadow-sm dashboardHeader border-b  dark:border-b-[#4d4d4d]`}
          >
            <div className="flex items-center justify-between">
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <MenuUnfoldOutlined className="text-primaryColor dark:text-gray-300" />
                  ) : (
                    <MenuFoldOutlined className="text-primaryColor dark:text-gray-300" />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <div className="max-h-[50px]">
                <FDropdown items={items}>
                  <p className="border-2 border-white cursor-pointer max-h-[40px] flex items-center justify-center bg-accent rounded-full p-2">
                    <CircleUserRound className="text-white" size={22} />
                  </p>
                </FDropdown>
              </div>
            </div>
          </Header>
          <Content
            className="md:py-8 py-5 md:px-12 px-6 bg-[#fffcf8] dark:bg-darkPrimary"
            style={{
              minHeight: 280,
              // backgroundColor: "#fffcf8",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
