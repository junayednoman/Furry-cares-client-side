"use client";
import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { Skeleton } from "antd";

const FeaturedStoriesSkeleton = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading?: string;
}) => {
  return (
    <div className="md:py-20 py-16 overflow-hidden">
      <FContainer>
        <FSectionTitle heading={heading} subHeading={subHeading} />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4  mt-10">
          <div className="">
            <Skeleton.Image
              className="w-full min-h-[280px]"
              active
            ></Skeleton.Image>
            <Skeleton.Node
              active
              className="w-1/2 mt-1 h-[15px]"
            ></Skeleton.Node>
            <Skeleton.Node
              active
              className="w-full mt-[6px] h-[30px]"
            ></Skeleton.Node>
            <Skeleton.Node
              active
              className="w-full mt-[6px] h-[30px]"
            ></Skeleton.Node>

            <div className="flex items-center gap-2 mt-4">
              <Skeleton.Avatar size={60}></Skeleton.Avatar>
              <div className="flex flex-col gap-[6px]">
                <Skeleton.Node
                  active
                  className="h-[17px] w-[100px]"
                ></Skeleton.Node>
                <Skeleton.Node
                  active
                  className="h-[12px] w-[100px]"
                ></Skeleton.Node>
              </div>
            </div>
          </div>
          <div className="sm:block hidden">
            <Skeleton.Image
              className="w-full min-h-[280px]"
              active
            ></Skeleton.Image>
            <Skeleton.Node
              active
              className="w-1/2 mt-1 h-[15px]"
            ></Skeleton.Node>
            <Skeleton.Node
              active
              className="w-full mt-[6px] h-[30px]"
            ></Skeleton.Node>
            <Skeleton.Node
              active
              className="w-full mt-[6px] h-[30px]"
            ></Skeleton.Node>

            <div className="flex items-center gap-2 mt-4">
              <Skeleton.Avatar size={60}></Skeleton.Avatar>
              <div className="flex flex-col gap-[6px]">
                <Skeleton.Node
                  active
                  className="h-[17px] w-[100px]"
                ></Skeleton.Node>
                <Skeleton.Node
                  active
                  className="h-[12px] w-[100px]"
                ></Skeleton.Node>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <Skeleton.Image
              className="w-full min-h-[280px]"
              active
            ></Skeleton.Image>
            <Skeleton.Node
              active
              className="w-1/2 mt-1 h-[15px]"
            ></Skeleton.Node>
            <Skeleton.Node
              active
              className="w-full mt-[6px] h-[30px]"
            ></Skeleton.Node>
            <Skeleton.Node
              active
              className="w-full mt-[6px] h-[30px]"
            ></Skeleton.Node>

            <div className="flex items-center gap-2 mt-4">
              <Skeleton.Avatar size={60}></Skeleton.Avatar>
              <div className="flex flex-col gap-[6px]">
                <Skeleton.Node
                  active
                  className="h-[17px] w-[100px]"
                ></Skeleton.Node>
                <Skeleton.Node
                  active
                  className="h-[12px] w-[100px]"
                ></Skeleton.Node>
              </div>
            </div>
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default FeaturedStoriesSkeleton;
