import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { Dot } from "lucide-react";
import Heading3 from "../typography/Heading3";

interface ClassicPostsCardProps {
  imageUrl: string;
  heading: string;
  tag: string;
}

const ClassicPostsCard: React.FC<ClassicPostsCardProps> = ({
  imageUrl,
  heading,
  tag,
}) => {
  return (
    <Card
      className="relative sm:min-h-[280px] min-h-[250px] w-full overflow-hidden rounded-lg shadow-md group p-0 cursor-pointer"
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
      <div className="absolute inset-0 flex flex-col justify-end sm:p-8 p-7 py-6">
        {/* Tag */}
        <div className="w-fit text-primaryBg flex items-center">
          <Link
            className="text-primaryBg font-medium underline uppercase"
            href={`/category}`}
          >
            {tag}
          </Link>
          <Dot className="-ml-2" size={40} />
          <Link href={"/"} className="font-medium mb-0 -ml-2 text-primaryBg">
            <p className="font-montserrat text-primaryBg">By Junayed Noman</p>
          </Link>
        </div>
        {/* Heading */}
        <Link href={"/"}>
          <Heading3 color="white">
            {heading.length > 50 ? heading.substring(0, 50) + "..." : heading}
          </Heading3>
        </Link>
      </div>
    </Card>
  );
};

export default ClassicPostsCard;
