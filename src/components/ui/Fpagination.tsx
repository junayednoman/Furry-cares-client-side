"use client";
import { Pagination } from "antd";
import { Dispatch, SetStateAction } from "react";

type TPaginationProps = {
  setPageSize: Dispatch<SetStateAction<number>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  pageSize: number;
  total: number;
};

const FPagination = ({
  setPageSize,
  setCurrentPage,
  pageSize,
  total,
  currentPage,
}: TPaginationProps) => {
  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
    console.log("Current Page:", page, "Page Size:", pageSize, total);
    // Call your data fetching function here to load the new page data
  };

  return (
    <Pagination
      onChange={handlePageChange}
      showSizeChanger
      // onShowSizeChange={onShowSizeChange}
      defaultCurrent={currentPage}
      total={total}
      pageSize={pageSize}
    />
  );
};

export default FPagination;
