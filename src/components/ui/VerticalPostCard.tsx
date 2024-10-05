import React from "react";
import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  imageUrl: string;
  heading: string;
  tag: string;
}

const VerticalPostCard: React.FC<PostCardProps> = ({ imageUrl, heading }) => {
  return (
    <Card className="border-none FCardShadow">
      <div className="rounded-md">
        <div>
          <Link href={"/"}>
            <Image
              className="rounded-t-md w-full lg:h-[260px] h-[230px]"
              src={imageUrl}
              width={500}
              height={260}
              alt={heading}
            />
          </Link>
        </div>
        <div className="p-5 pl-6">
          <Link href={"/"} className="text-text hover:text-accent">
            <h4 className="text-[19px] font-semibold">
              {heading.length > 60 ? heading.substring(0, 60) + "..." : heading}
            </h4>
          </Link>
          <div>
            <p className="font-montserrat font-semibold mb-0 text-slate-400 mt-3 text-[13px]">
              45 Minutes ago
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VerticalPostCard;
