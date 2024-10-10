"use client";
import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { Skeleton } from "antd";

const AuthorsSkeleton = () => {
  return (
    <div className="md:py-20 py-16 overflow-hidden">
      <FContainer>
        <FSectionTitle
          heading={"Top Authors"}
          subHeading={"Meet the top authors"}
        />
        <div className="grid md:grid-cols-3 grid-cols-1 items-center lg:gap-16 gap-4 mt-10 xl:max-w-[950px] md:w-full w-[85%] mx-auto">
          <div className="">
            <Skeleton.Image
              className="w-full min-h-[200px]"
              active
            ></Skeleton.Image>
            <div className="text-center">
              <Skeleton.Node
                active
                className="w-[160px] mx-auto mt-[10px] h-[22px]"
              ></Skeleton.Node>
              <br />
              <Skeleton.Node
                active
                className="w-[100px] mt-2 h-[15px]"
              ></Skeleton.Node>
            </div>
          </div>
          <div className="sm:block hidden">
            <Skeleton.Image
              className="w-full min-h-[200px]"
              active
            ></Skeleton.Image>
            <div className="text-center">
              <Skeleton.Node
                active
                className="w-[160px] mx-auto mt-[10px] h-[22px]"
              ></Skeleton.Node>
              <br />
              <Skeleton.Node
                active
                className="w-[100px] mt-2 h-[15px]"
              ></Skeleton.Node>
            </div>
          </div>
          <div className="lg:block hidden">
            <Skeleton.Image
              className="w-full min-h-[200px]"
              active
            ></Skeleton.Image>
            <div className="text-center">
              <Skeleton.Node
                active
                className="w-[160px] mx-auto mt-[10px] h-[22px]"
              ></Skeleton.Node>
              <br />
              <Skeleton.Node
                active
                className="w-[100px] mt-2 h-[15px]"
              ></Skeleton.Node>
            </div>
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default AuthorsSkeleton;
