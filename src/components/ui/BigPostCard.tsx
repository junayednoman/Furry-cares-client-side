import React from "react";
import { Card, Tooltip } from "antd";
import Link from "next/link";
import Image from "next/image";
import Heading3 from "../typography/Heading3";
import { BadgeDollarSign, Dot } from "lucide-react";
import moment from "moment";
import { TPost } from "@/types/post.type";

const BigPostCard = ({ post }: { post: TPost }) => {
  const {
    thumbnail,
    title,
    excerpt,
    category,
    isPremium,
    createdAt,
    votes,
    author,
  } = post || {};
  return (
    <Card className="flex flex-row border-none p-0 duration-300">
      <div className="grid md:grid-cols-5 grid-cols-1 xl:gap-10 md:gap-6 gap-y-3">
        <div className="col-span-2">
          <Link href={`/posts/${post?._id}`}>
            <Image
              className="lg:min-h-[240px] md:min-h-[200px] min-h-[240px] w-full rounded-[8px]"
              src={thumbnail}
              width={450}
              height={200}
              alt={title}
            />
          </Link>
        </div>
        <div className="flex justify-between flex-col col-span-3">
          <div>
            <div className="flex items-center gap-10">
              <div className=" flex items-center -mt-2">
                <Link
                  className="text-slate-600 font-semibold capitalize"
                  href={`/profile/${author?._id}`}
                >
                  <p className="font-montserrat md:text-base">
                    By Junayed Noman
                  </p>
                </Link>
                <Dot className="-ml-2 text-slate-300" size={40} />

                <p className="font-montserrat font-semibold mb-0 -ml-2 text-slate-400">
                  {moment(createdAt).fromNow()}
                </p>
              </div>
            </div>
            <Link href={`/posts/${post?._id}`}>
              <Heading3>
                {title?.length > 60 ? title.slice(0, 60) + "..." : title}
              </Heading3>
            </Link>
            <p className="md:my-5 my-3 text-slate-600 text-base">
              {(excerpt?.length as number) > 100
                ? excerpt!.slice(0, 100) + "..."
                : excerpt}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Link href={""}>
              <div className="bg-primaryBg px-3 py-1 rounded-[4px] inline capitalize font-medium">
                <span>{votes} Votes</span>
              </div>
            </Link>

            <Link className="text-black" href={`/posts?category=${category}`}>
              <div className="bg-primaryBg px-3 py-1 rounded-[4px] inline capitalize font-medium">
                <span>{category}</span>
              </div>
            </Link>
            {isPremium && (
              <Tooltip title="Premium content">
                <div className="bg-[#FFC022] px-3 py-[3px] rounded-[4px] capitalize font-medium flex items-center justify-between text-center w-[100px]">
                  <p className="text-[#fff]">Premium</p>
                  <BadgeDollarSign size={16} className="text-[#fff] -mb-3" />
                </div>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BigPostCard;
