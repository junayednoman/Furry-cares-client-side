"use client";
import { Skeleton } from "antd";

const CommentSkeleton = () => {
  return (
    <div className="flex gap-3 mt-5">
      <div>
        <Skeleton.Avatar
          size={60}
          className="inline-block"
          active
        ></Skeleton.Avatar>
      </div>
      <div className="w-full">
        <div className="mt-2 space-y-2">
          <Skeleton.Node
            className="h-[17px] w-[170px] block"
            active
          ></Skeleton.Node>
          <Skeleton.Node
            className="h-[17px] w-[120px] block"
            active
          ></Skeleton.Node>
        </div>
        <div className="leading-6 mt-1">
          <Skeleton.Node className="h-[17px] w-full" active></Skeleton.Node>
          <Skeleton.Node className="h-[17px] w-full" active></Skeleton.Node>
          <Skeleton.Node className="h-[17px] w-full" active></Skeleton.Node>
        </div>
      </div>
    </div>
  );
};

export default CommentSkeleton;
