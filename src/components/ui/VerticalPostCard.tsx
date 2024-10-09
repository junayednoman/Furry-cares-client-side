import React from "react";
import { Avatar, Card, Tooltip } from "antd";
import Link from "next/link";
import Image from "next/image";
import { TPost } from "@/types/post.type";
import verifyIcon from "@/assets/verified.png";
import { BadgeDollarSign } from "lucide-react";
import moment from "moment";

const VerticalPostCard = ({ post }: { post: TPost }) => {
  return (
    <Card className="border-none FCardShadow">
      <div className="rounded-md">
        <div className="relative">
          {post.isPremium && (
            <Tooltip title="Premium content" className="absolute top-4 left-5">
              <div className="bg-[#FFC022] px-3 py-[3px] rounded-[4px] capitalize font-medium flex items-center justify-between text-center w-[100px]">
                <p className="text-[#fff]">Premium</p>
                <BadgeDollarSign size={16} className="text-[#fff] -mb-3" />
              </div>
            </Tooltip>
          )}
          <Link href={"/"}>
            <Image
              className="rounded-t-md w-full lg:h-[260px] h-[230px]"
              src={post?.thumbnail}
              width={500}
              height={260}
              alt={post?.title}
            />
          </Link>
        </div>
        <div className="p-5 pt-1 pl-6">
          <div>
            <p className="font-montserrat font-semibold mb-0 text-slate-400 mt-3 text-[12px]">
              {moment(post?.createdAt).fromNow()}
            </p>
          </div>
          <Link
            href={"/"}
            className="text-text hover:text-accent inline-block mt-1"
          >
            <h4 className="text-[19px] font-semibold">
              {post?.title?.length > 60
                ? post?.title?.substring(0, 60) + "..."
                : post?.title}
            </h4>
          </Link>
          <Link href={`/profile/${post?.author?._id}`}>
            <div className="flex items-center gap-3 mt-3">
              <Avatar size={55} src={post?.author?.profilePicture} />
              <div>
                <h4 className="font-semibold">
                  {post?.author?.name}{" "}
                  {post?.author?.isVerified && (
                    <span>
                      <Image
                        src={verifyIcon}
                        alt="image"
                        width={16}
                        height={16}
                      />
                    </span>
                  )}
                </h4>
                <p className="text-sm text-gray-500">
                  <span>Followers: </span>
                  {post?.author?.followers?.length}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default VerticalPostCard;
