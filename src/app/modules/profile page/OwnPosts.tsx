"use client";
import Loading from "@/app/(generalLayout)/loading";
import FPagination from "@/components/ui/Fpagination";
import NoData from "@/components/ui/NoData";
import SmallPostCard from "@/components/ui/SmallPostCard";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { TPost } from "@/types/post.type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const OwnPosts = ({ userId }: { userId: string }) => {
  // pagination
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log("pagesize: ", pageSize, "currentPage:", currentPage);

  const categoryFromSearchParams = useSearchParams().get("category");

  // fetch posts based on category, timePosted and tags
  const { data, isFetching, isLoading, isError, refetch } = useHandleQuery(
    "getPosts",
    `/posts/user/${userId}`,
    {
      limit: pageSize,
      page: currentPage,
    }
  );

  // refetch when category, timePosted or tags changes
  useEffect(() => {
    refetch();
  }, [categoryFromSearchParams, pageSize, currentPage]);

  const postData = data?.data?.result;
  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (isError || !postData || postData?.length < 1) {
    return <NoData />;
  }

  return (
    <div>
      {postData?.map((post: TPost, index: number) => (
        <>
          <div
            key={post._id}
            className={`border-b ${
              index === postData?.length - 1 && "border-b-0"
            } border-t-0 border-x-0 border-solid border-slate-200 py-6 ${
              index === 0 && "pt-0"
            } ${index === postData?.length - 1 && "pb-0"} sm:px-6 px-4`}
          >
            <SmallPostCard post={post} />
          </div>
        </>
      ))}

      <div className="mt-8">
        <FPagination
          total={data?.data?.meta?.total}
          currentPage={currentPage}
          pageSize={pageSize}
          setCurrentPage={setCurrentPage}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};

export default OwnPosts;
