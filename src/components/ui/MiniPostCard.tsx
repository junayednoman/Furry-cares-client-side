import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { Dot } from "lucide-react";
import { TPost } from "@/types/post.type";
import moment from "moment";

const MiniPostCard = ({ post, index }: { post: TPost; index: number }) => {
  const { thumbnail, title, author, createdAt } = post;

  return (
    <Card
      className={`flex flex-row border-0 rounded-none p-0 duration-300 ${
        index === 3 ? "pb-0" : "border-b "
      } border-b-gray py-4`}
    >
      <div className="flex sm:flex-row flex-col md:gap-4 gap-3">
        <Link
          href={`/posts/${post?._id}?category=${post?.category}`}
          className="inline-block object-cover rounded-md "
        >
          <div
            className={`bg-cover bg-center bg-no-repeat sm:min-h-[90px] min-h-[180px] sm:max-h-[90px] max-h-[200px] sm:min-w-[130px] min-w-full sm:max-w-[130px] max-w-full rounded-md`}
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
        </Link>
        <div className="flex justify-between flex-col">
          <div>
            <div className="flex sm:flex-row flex-col sm:items-center sm:-mt-2">
              <Link
                className="text-slate-600 font-semibold capitalize"
                href={`/profile/${author?._id}`}
              >
                <p className="font-montserrat text-[13px] font-medium">
                  {author.name}
                </p>
              </Link>
              <Dot className="-ml-2 text-slate-300 sm:block hidden" size={35} />

              <p className="font-montserrat sm:text-[13px] text-[12px] font-medium mb-0 sm:-ml-2 text-slate-400">
                {moment(createdAt).fromNow()}
              </p>
            </div>
            <Link
              href={`/posts/${post?._id}?category=${post?.category}`}
              className="sm:-mt-1 mt-2 inline-block"
            >
              <h5 className="text-base  font-semibold text-text">
                {title.length > 60 ? title.substring(0, 60) + "..." : title}
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MiniPostCard;
