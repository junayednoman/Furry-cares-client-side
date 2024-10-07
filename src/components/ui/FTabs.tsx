import { Tabs } from "antd";
import { ReactNode } from "react";

type Item = {
  label: string;
  key: string;
  children: ReactNode;
};

const FTabs = ({ items }: { items: Item[] }) => {
  return <Tabs defaultActiveKey="1" centered items={items} />;
};

export default FTabs;
