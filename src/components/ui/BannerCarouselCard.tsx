import React from "react";
import { Card, Tooltip } from "antd";
import Link from "next/link";
import { BadgeDollarSign, Dot } from "lucide-react";
import Heading2 from "../typography/Heading2";
import { TPost } from "@/types/post.type";
import moment from "moment";

const BannerCarouselCard = ({ post }: { post: TPost }) => {
  return (
    <Card
      className="relative xl:min-h-[523px] lg:min-h-[600px] md:min-h-[500px] min-h-[350px] w-full overflow-hidden border-none rounded-lg shadow-md group p-0 cursor-pointer"
      bodyStyle={{ padding: 0 }}
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${post?.thumbnail})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>

      {/* Content Overlay */}
      <Link href={`/posts/${post?._id}?category=${post?.category}`}>
        <div className="absolute inset-0 flex flex-col justify-end sm:p-14 p-7 py-6">
          {/* Tag */}
          <div className="w-fit text-primaryBg flex items-center mb-3">
            <Link
              href={`/profile/${post?.author?._id}`}
              className="font-medium mb-0 text-primaryBg"
            >
              <p className="font-montserrat text-base text-primaryBg">
                By {post?.author?.name}
              </p>
            </Link>
            <Dot className="-ml-2" size={40} />
            <Link href={""} className="font-medium mb-0 -ml-2 text-primaryBg">
              <p className="font-montserrat  text-primaryBg">
                {moment(post?.createdAt).fromNow()}
              </p>
            </Link>
          </div>
          {/* Heading */}

          <Heading2 color="white">
            {post?.title.length > 53
              ? `${post?.title.slice(0, 53)}...`
              : post?.title}
          </Heading2>
          <p className="text-white md:text-lg md:mt-6 mt-4 md:block hidden">
            {post?.excerpt!.length > 150
              ? `${post?.excerpt!.slice(0, 150)}...`
              : post?.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Link
              className="text-black"
              href={`/posts?category=${post?.category}`}
            >
              <div className="bg-primaryBg px-3 py-1 rounded-[4px] inline capitalize font-medium">
                <span>{post?.category}</span>
              </div>
            </Link>
            {post?.isPremium && (
              <Tooltip title="Premium content">
                <div className="bg-[#FFC022] px-3 py-[3px] rounded-[4px] capitalize font-medium flex items-center justify-between text-center w-[100px]">
                  <p className="text-[#fff]">Premium</p>
                  <BadgeDollarSign size={16} className="text-[#fff] -mb-3" />
                </div>
              </Tooltip>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default BannerCarouselCard;
