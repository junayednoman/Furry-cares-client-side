import React from "react";
import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";
import Heading3 from "../typography/Heading3";
import { Dot } from "lucide-react";

interface PostCardProps {
  thumbnail: string;
  title: string;
  content: string;
  category: string;
  postId: string;
  categoryId: string;
}

const BigPostCard = ({ post }: { post: PostCardProps }) => {
  const { thumbnail, title, content, category, postId, categoryId, author } =
    post;
  return (
    <Card className="flex flex-row border-none p-0 duration-300">
      <div className="grid md:grid-cols-2 md:gap-10 gap-y-3">
        <div>
          <Link href={"/"}>
            <Image
              className="h-full w-full"
              src={thumbnail}
              width={500}
              height={350}
              alt={title}
            />
          </Link>
        </div>
        <div className="flex justify-between flex-col">
          <div>
            <div className=" flex items-center">
              <Link
                className="text-slate-600 font-semibold capitalize"
                href={`/category}`}
              >
                <p className="font-montserrat md:text-base">By Junayed Noman</p>
              </Link>
              <Dot className="-ml-2 text-slate-300" size={40} />

              <p className="font-montserrat font-semibold mb-0 -ml-2 text-slate-400">
                16 Minutes ago
              </p>
            </div>
            <Link href={"/"}>
              <Heading3>{title}</Heading3>
            </Link>
            <p className="md:my-5 my-3 text-slate-600 lg:text-base">
              {content.length > 100 ? content.slice(0, 100) + "..." : content}
            </p>
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

export default BigPostCard;
