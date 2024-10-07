"use client";
import { Pagination, PaginationProps } from "antd";
import { useState } from "react";

type TPaginationProps = {
  defaultCurrent?: number;
  total: number;
};

const FPagination = ({ defaultCurrent = 1, total }: TPaginationProps) => {
  const [pageSize, setPageSize] = useState(5);
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setPageSize(pageSize);
  };

  return (
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={defaultCurrent}
      total={total}
      pageSize={pageSize}
    />
  );
};

export default FPagination;
