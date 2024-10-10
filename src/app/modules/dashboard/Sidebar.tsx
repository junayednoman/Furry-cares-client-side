import { adminMenuItems, userMenuItems } from "@/constant/sidebar.constant";
import { useUserContext } from "@/context/auth.provider";
import { Divider, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const { user, handleLogout } = useUserContext();
  let menuItems;
  if (user?.role === "user") {
    menuItems = userMenuItems;
  } else if (user?.role === "admin") {
    menuItems = adminMenuItems;
  }

  return (
    <div>
      <Sider
        className="dashboardSidebar dark:dashboardSidebarDark"
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          height: "100vh",
          zIndex: 99,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="p-4">
          <Link href={`/dashboard/profile`} className="inline-block">
            <h3
              className={`${
                collapsed ? "text-lg" : "text-[22px]"
              } font-bold uppercase text-primaryColor`}
            >
              <span className="text-accent">Furry</span>
              <span
                className={`${
                  collapsed ? "opacity-0 hidden" : "opacity-100 inline"
                } text-text`}
              >
                Cares
              </span>
            </h3>
          </Link>
        </div>
        <Menu
          className="bg-white dark:bg-primaryColor dark:dark-mode px-3 dashMenuItems"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
        <Divider className="pt-2 mt-2" />
        <Menu
          className="bg-white px-3 logoutItem"
          mode="inline"
          items={[
            {
              onClick: () => handleLogout(),
              key: "logout",
              icon: <LogOut color={"red"} className="text-red-600" size={14} />,
              label: <span className="text-red-600">Logout</span>,
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
