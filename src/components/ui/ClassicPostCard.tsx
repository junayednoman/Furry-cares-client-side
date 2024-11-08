import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { Dot } from "lucide-react";
import Heading3 from "../typography/Heading3";
import { TPost } from "@/types/post.type";

const ClassicPostsCard = ({ post }: { post: TPost }) => {
  return (
    <Card
      className="relative xl:min-h-[250px] lg:min-h-[280px] md:min-h-[250px] min-h-[250px] w-full overflow-hidden rounded-lg shadow-md group p-0 cursor-pointer"
      bodyStyle={{ padding: 0 }}
    >
      {/* Background Image with Gradient Overlay */}

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${post?.thumbnail})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

      {/* Content Overlay */}
      <Link href={`/posts/${post?._id}`}>
        <div className="absolute inset-0 flex flex-col justify-end sm:p-8 p-7 py-6">
          {/* category */}
          <div className="w-fit text-primaryBg flex items-center">
            <Link
              className="text-primaryBg font-medium underline uppercase"
              href={`/posts?category=${post?.category}`}
            >
              {post?.category}
            </Link>
            <Dot className="-ml-2" size={40} />
            <Link
              href={`/profile/${post?.author?._id}`}
              className="font-medium mb-0 -ml-2 text-primaryBg"
            >
              <p className="font-montserrat text-primaryBg">
                By {post?.author?.name}
              </p>
            </Link>
          </div>
          {/* Heading */}
          <Heading3 color="white">
            {post?.title?.length > 45
              ? post?.title?.substring(0, 45) + "..."
              : post?.title}
          </Heading3>
        </div>
      </Link>
    </Card>
  );
};

export default ClassicPostsCard;
