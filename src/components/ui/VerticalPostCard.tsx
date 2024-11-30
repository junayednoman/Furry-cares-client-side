import React from "react";
import { Card, Tooltip } from "antd";
import Link from "next/link";
import Image from "next/image";
import { TPost } from "@/types/post.type";
import verifyIcon from "@/assets/verified.png";
import { BadgeDollarSign, CircleCheckBig } from "lucide-react";
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
          <Link href={`/posts/${post?._id}?category=${post?.category}`}>
            <div
              className="rounded-t-md w-full min-h-[240px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${post?.thumbnail})` }}
            ></div>
          </Link>
        </div>
        <div className="p-5 pt-1 pl-6">
          <div className="flex justify-between gap-3 mt-3">
            <div>
              <Link
                href={`/profile/${post?.author?._id}`}
                className="inline-block"
              >
                <h4 className="font-semibold text-slate-400">
                  By {post?.author?.name}{" "}
                  {post?.author?.isVerified && (
                    <span className="inline-block">
                      <Image
                        src={verifyIcon}
                        alt="image"
                        width={16}
                        height={16}
                        className="max-w-[16px] max-h-[16px]"
                      />
                    </span>
                  )}
                </h4>
              </Link>
              <p className="font-montserrat font-semibold mb-0 text-slate-400 text-[12px]">
                {moment(post?.createdAt).fromNow()}
              </p>
            </div>
            <Tooltip title="Votes">
              <p className="flex items-start gap-1">
                <span className="flex items-start">
                  <CircleCheckBig size={16} className="text-slate-400" />
                </span>
                <span className="font-medium flex items-start -mt-1">
                  {post?.votes}
                </span>
              </p>
            </Tooltip>
          </div>

          <Link
            href={`/posts/${post?._id}?category=${post?.category}`}
            className="text-text hover:text-accent inline-block mt-2"
          >
            <h4 className="text-[19px] font-semibold">
              {post?.title?.length > 50
                ? post?.title?.substring(0, 50) + "..."
                : post?.title}
            </h4>
          </Link>
          <div>
            <div>
              {post!.excerpt!.length < 80 ? (
                <span>{post?.excerpt}</span>
              ) : (
                <div className="">
                  <span>{post?.excerpt?.slice(0, 80)} </span>
                  <Link
                    className="text-slate-500"
                    href={`/posts/${post?._id}?category=${post?.category}`}
                  >
                    ...more
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VerticalPostCard;
