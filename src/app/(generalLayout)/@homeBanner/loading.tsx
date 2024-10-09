"use client";
import FContainer from "@/components/ui/Container";
import { Skeleton } from "antd";

const loading = () => {
  return (
    <div className="pt-10">
      <FContainer>
        <div className="grid xl:grid-cols-5 grid-cols-1 md:gap-6 gap-4">
          <div className="xl:col-span-3">
            <Skeleton.Node
              className="xl:min-h-[600px] lg:min-h-[600px] md:min-h-[500px] min-h-[350px] w-full rounded-[10px]"
              active
            ></Skeleton.Node>
          </div>
          <div className="xl:col-span-2 grid xl:grid-cols-1 xl:gap-0 md:gap-6 gap-4 lg:grid-cols-2 grid-cols-1 xl:space-y-6">
            <Skeleton.Node
              className=" sm:min-h-[288px] min-h-[250px] w-full rounded-[10px]"
              active
            ></Skeleton.Node>
            <Skeleton.Node
              className=" sm:min-h-[289px] min-h-[250px] w-full rounded-[10px]"
              active
            ></Skeleton.Node>
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default loading;
