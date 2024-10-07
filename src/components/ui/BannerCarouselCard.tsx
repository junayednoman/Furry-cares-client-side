import React from "react";
import { Card, Tooltip } from "antd";
import Link from "next/link";
import { BadgeDollarSign, Dot } from "lucide-react";
import Heading2 from "../typography/Heading2";

interface PostCardProps {
  imageUrl: string;
  heading: string;
  category: string;
  isPremium?: boolean;
}

const BannerCarouselCard: React.FC<PostCardProps> = ({
  imageUrl,
  heading,
  category,
  isPremium,
}) => {
  return (
    <Card
      className="relative xl:min-h-[600px] lg:min-h-[600px] md:min-h-[500px] min-h-[350px] w-full overflow-hidden border-none rounded-lg shadow-md group p-0 cursor-pointer"
      bodyStyle={{ padding: 0 }}
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end sm:p-14 p-7 py-6">
        {/* Tag */}
        <div className="w-fit text-primaryBg flex items-center mb-3">
          <Link href={"/"} className="font-medium mb-0 text-primaryBg">
            <p className="font-montserrat text-base text-primaryBg">
              By Junayed Noman
            </p>
          </Link>
          <Dot className="-ml-2" size={40} />
          <Link href={"/"} className="font-medium mb-0 -ml-2 text-primaryBg">
            <p className="font-montserrat  text-primaryBg">3 Oct, 2024</p>
          </Link>
        </div>
        {/* Heading */}
        <Link href={"/"}>
          <Heading2 color="white">{heading}</Heading2>
        </Link>
        <p className="text-white md:text-lg md:mt-6 mt-4 md:block hidden">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          consectetur a odit, quasi tempora quaerat, sunt maxime adipisci
          voluptates esse explicabo incidunt?
        </p>
        <div className="mt-4 flex items-center gap-4">
          <Link className="text-black" href={"/"}>
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
    </Card>
  );
};

export default BannerCarouselCard;
