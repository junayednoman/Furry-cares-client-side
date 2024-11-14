import { Empty } from "antd";

const NoData = ({ text }: { text?: string }) => {
  return (
    <div className="md:py-12 p-10">
      <Empty description={text || "No Data Found!"}></Empty>
    </div>
  );
};

export default NoData;
