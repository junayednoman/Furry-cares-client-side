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
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`
              ${i !== 1 && "lg:block hidden"}
              ${i === 2 && "sm:block hidden"}
            `}
            >
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
                className="w-full mt-2 h-[25px]"
              ></Skeleton.Node>
              <Skeleton.Node
                active
                className="w-full mt-2 h-[25px]"
              ></Skeleton.Node>
              <Skeleton.Node
                active
                className="w-full mt-[10px] h-[15px]"
              ></Skeleton.Node>
              <Skeleton.Node
                active
                className="w-full mt-[6px] h-[15px]"
              ></Skeleton.Node>
            </div>
          ))}
        </div>
      </FContainer>
    </div>
  );
};

export default FeaturedStoriesSkeleton;
