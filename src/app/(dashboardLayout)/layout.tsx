"use client";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { CircleUserRound, LogOut } from "lucide-react";
import Sidebar from "../modules/dashboard/Sidebar";
import FDropdown from "@/components/ui/FDropdown";
import { items } from "@/constant/sidebar.constant";
import { ItemType } from "antd/es/menu/interface";
import { useUserContext } from "@/context/auth.provider";

const { Header, Content } = Layout;
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { handleLogout } = useUserContext();
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 610) {
      setCollapsed(true);
    }
  }, []);

  const dropdownItems: MenuProps["items"] = [
    ...(items as ItemType[]),
    {
      label: (
        <div
          onClick={() => handleLogout()}
          className="flex items-center gap-2 text-red-600"
        >
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
                <FDropdown items={dropdownItems}>
                  <p className="border-2 border-white cursor-pointer max-h-[40px] flex items-center justify-center bg-accent rounded-full p-2">
                    <CircleUserRound className="text-white" size={22} />
                  </p>
                </FDropdown>
              </div>
            </div>
          </Header>
          <Content
            className="md:py-8 py-5 md:px-12 px-4 bg-[#fffcf8] dark:bg-darkPrimary"
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
