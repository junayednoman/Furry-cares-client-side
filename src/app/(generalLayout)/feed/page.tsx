"use client";
import FeedFilter from "@/app/modules/feed/FeedFilter";
import BigPostCard from "@/components/ui/BigPostCard";
import FContainer from "@/components/ui/Container";
import FPagination from "@/components/ui/Fpagination";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { TPost } from "@/types/post.type";
import NoData from "@/components/ui/NoData";
import BigPostSkeleton from "../skeletons/BigPostSkeleton";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Feed = () => {
  // pagination
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log("pagesize: ", pageSize, "currentPage:", currentPage);

  const categoryFromSearchParams = useSearchParams().get("category");
  const [category, setCategory] = useState<string | null>(
    categoryFromSearchParams || null
  );

  // set date range
  const [daysBefore, setDaysBefore] = useState<string | null>(null);
  const [sorting, setSorting] = useState<string | null>(null);

  // fetch posts based on category, timePosted and tags
  const { data, isFetching, isLoading, isError, refetch } = useHandleQuery(
    "getPosts",
    "/posts",
    {
      category,
      daysBefore,
      sort: sorting,
      limit: pageSize,
      page: currentPage,
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
  ]);

  const postData = data?.data?.result;

  return (
    <div className="md:py-16 py-12">
      <FContainer>
        <div className="md:max-w-[1000px] sm:max-w-[400px] w-full mx-auto">
          <FeedFilter
            setCategory={setCategory}
            setTimePosted={setDaysBefore}
            setSorting={setSorting}
          />
          {isLoading || isFetching ? (
            <div className="md:mt-4 mt-1">
              <div className="border-t-0 border-b border-x-0 border-solid border-slate-200 py-6">
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
                    } border-t-0 border-x-0 border-solid border-slate-200 py-8`}
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
        </div>
      </FContainer>
    </div>
  );
};

export default Feed;
