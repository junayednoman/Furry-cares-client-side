"use client";
import { Skeleton } from "antd";

const BigPostSkeleton = () => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 md:gap-8 gap-y-3">
      <div className="col-span-2">
        <Skeleton.Image
          active
          className="lg:min-h-[240px] md:min-h-[200px] min-h-[240px] w-full rounded-[8px]"
        ></Skeleton.Image>
      </div>
      <div className="flex justify-between flex-col col-span-3">
        <div>
          <div>
            <Skeleton.Node
              active
              className="w-[250px] h-[15px]"
            ></Skeleton.Node>
          </div>
          <div className="mt-4">
            <Skeleton.Node active className="w-full h-[30px]"></Skeleton.Node>
            <Skeleton.Node
              active
              className="w-full h-[30px] mt-1"
            ></Skeleton.Node>
          </div>
          <div className="mt-6">
            <Skeleton.Node active className="w-full h-[15px]"></Skeleton.Node>
            <Skeleton.Node
              active
              className="w-full h-[15px] mt-1"
            ></Skeleton.Node>
          </div>
        </div>
        <div className="md:mt-0 mt-5">
          <Skeleton.Node active className="w-[150px] h-[25px]"></Skeleton.Node>
        </div>
      </div>
    </div>
  );
};

export default BigPostSkeleton;
