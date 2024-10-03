import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { Dot } from "lucide-react";
import Heading5 from "../typography/Heading5";

interface PostCardProps {
  thumbnail: string;
  title: string;
  content: string;
  category: string;
  postId: string;
  categoryId: string;
}

const SmallPostCard = ({ post }: { post: PostCardProps }) => {
  const { thumbnail, title, category, author } = post;
  return (
    <Card className="flex flex-row border-none p-0 duration-300">
      <div className="flex md:gap-6 gap-3">
        <Link
          href={"/"}
          className="inline-block h-auto md:w-[100px] w-[150px] object-cover"
        >
          <div
            className={`bg-cover bg-center bg-no-repeat w-full h-full`}
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
        </Link>
        <div className="flex justify-between flex-col">
          <div>
            <div className=" flex items-center -mt-2">
              <Link
                className="text-slate-600 font-semibold capitalize"
                href={`/category}`}
              >
                <p className="font-montserrat">{author.name}</p>
              </Link>
              <Dot className="-ml-2 text-slate-300" size={35} />

              <p className="font-montserrat font-semibold mb-0 -ml-2 text-slate-400">
                16 Minutes ago
              </p>
            </div>
            <Link href={"/"} className="-mt-1 inline-block">
              <Heading5>{title}</Heading5>
            </Link>
          </div>
          <div className="mt-4">
            <Link className="text-black" href={"/"}>
              <div className="bg-primaryBg px-3 py-1 rounded-sm inline capitalize font-medium">
                <span>{"story"}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SmallPostCard;
