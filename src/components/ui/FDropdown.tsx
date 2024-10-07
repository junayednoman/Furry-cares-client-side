import { Dropdown, MenuProps } from "antd";
import { ReactNode } from "react";

const FDropdown = ({
  items,
  placement = "bottomRight",
  children,
}: {
  items: MenuProps["items"];
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  children: ReactNode;
}) => {
  return (
    <Dropdown placement={placement} menu={{ items }} trigger={["click"]}>
      <a className="rounded-full" onClick={(e) => e.preventDefault()}>
        {children}
      </a>
    </Dropdown>
  );
};

export default FDropdown;
