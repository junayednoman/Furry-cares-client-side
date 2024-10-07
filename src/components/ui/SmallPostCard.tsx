import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { Dot } from "lucide-react";
import Heading5 from "../typography/Heading5";
import { TUser } from "@/types/user.type";

interface PostCardProps {
  thumbnail: string;
  title: string;
  content: string;
  category: string;
  author: TUser;
}

const SmallPostCard = ({ post }: { post: PostCardProps }) => {
  const { thumbnail, title, category, author } = post;
  return (
    <Card className="flex flex-row border-none p-0 duration-300">
      <div className="flex sm:flex-row flex-col md:gap-6 gap-3">
        <Link
          href={"/"}
          className="inline-block sm:h-[140px] h-[210px] md:w-[250px] sm:w-[320px] w-full object-cover rounded-md"
        >
          <div
            className={`bg-cover bg-center bg-no-repeat w-full h-full rounded-md`}
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
        </Link>
        <div className="flex justify-between flex-col">
          <div>
            <div className="flex items-center -mt-2">
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
              <Heading5>
                {title.length > 70 ? title.substring(0, 70) + "..." : title}
              </Heading5>
            </Link>
          </div>
          <div className="sm:mt-0 mt-7">
            <Link className="text-black" href={"/"}>
              <div className="bg-primaryBg px-3 py-1 rounded-[4px] inline capitalize font-medium">
                <span>{category}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SmallPostCard;
