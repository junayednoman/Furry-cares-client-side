"use client";
import BigPostSkeleton from "@/app/(generalLayout)/skeletons/BigPostSkeleton";
import FeedFilter from "./FeedFilter";
import NoData from "@/components/ui/NoData";
import BigPostCard from "@/components/ui/BigPostCard";
import FPagination from "@/components/ui/Fpagination";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { TPost } from "@/types/post.type";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
const FeedContent = () => {
  // pagination
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const params = useSearchParams();
  const tagsFromSearchParams = params.get("tag");
  const categoryFromSearchParams = params.get("category");
  const [category, setCategory] = useState<string | null>(
    categoryFromSearchParams || null
  );

  // set date range
  const [daysBefore, setDaysBefore] = useState<string | null>(null);
  const [sorting, setSorting] = useState<string | null>(null);

  // fetch posts based on category, timePosted and tags
  const { data, isLoading, isError, refetch } = useHandleQuery(
    "getPosts",
    "/posts",
    {
      category,
      daysBefore,
      sort: sorting,
      limit: pageSize,
      page: currentPage,
      isPublished: true,
      searchTerm: tagsFromSearchParams,
    }
  );

  // refetch when category, timePosted or tags changes
  useEffect(() => {
    refetch();
  }, [
    categoryFromSearchParams,
    category,
    daysBefore,
    sorting,
    pageSize,
    currentPage,
    tagsFromSearchParams,
  ]);

  const postData = data?.data?.result;

  return (
    <>
      <div className="pb-8">
        <FeedFilter
          setCategory={setCategory}
          setTimePosted={setDaysBefore}
          setSorting={setSorting}
        />
      </div>
      {isLoading ? (
        <div className="">
          <div className="border-t-0 border-b border-x-0 border-solid border-slate-200 pb-6">
            <BigPostSkeleton />
          </div>
          <div className="border-t-0 border-b border-x-0 border-solid border-slate-200 py-6">
            <BigPostSkeleton />
          </div>
          <div className="pt-6">
            <BigPostSkeleton />
          </div>
        </div>
      ) : postData?.length <= 0 || isError ? (
        <NoData />
      ) : (
        <>
          <div>
            {postData?.map((post: TPost, index: number) => (
              <div
                key={post._id}
                className={`border-b ${
                  index === postData?.length - 1 && "border-b-0"
                } border-t-0 border-x-0 border-solid border-slate-200 py-8 ${
                  index === 0 && "pt-0"
                }`}
              >
                <BigPostCard post={post} />
              </div>
            ))}
          </div>

          <FPagination
            total={data?.data?.meta?.total}
            currentPage={currentPage}
            pageSize={pageSize}
            setCurrentPage={setCurrentPage}
            setPageSize={setPageSize}
          />
        </>
      )}
    </>
  );
};

export default FeedContent;
